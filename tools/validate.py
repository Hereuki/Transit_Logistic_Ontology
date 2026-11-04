"""Validate the TransiT modules.

    python tools/validate.py                 structural checks on every module
    python tools/validate.py --reason        + consistency and satisfiability with HermiT (needs owlready2 and Java)
    python tools/validate.py --reason --example examples/rail-road-journey.ttl
                                             + classify the individuals of an example file

Exit code 1 if any check fails.
"""
import argparse, os, re, sys, tempfile
import rdflib
from rdflib import URIRef, BNode
from rdflib.namespace import OWL, RDF, RDFS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ONT = os.path.join(ROOT, "ontology")
BASE = "https://www.cranfield.ac.uk/transit/"
NLD = URIRef("https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/naturalLanguageDefinition")

# ontology IRI -> local file (mirrors ontology/catalog-v001.xml)
LOCAL = {
    "https://spec.industrialontologies.org/ontology/202401/core/Core/": os.path.join(ROOT, "imports", "iof-core.rdf"),
    "https://spec.industrialontologies.org/ontology/core/Core/": os.path.join(ROOT, "imports", "iof-core.rdf"),
    "https://spec.industrialontologies.org/ontology/202401/core/meta/AnnotationVocabulary/": os.path.join(ROOT, "imports", "iof-annotation-vocabulary.rdf"),
    "https://spec.industrialontologies.org/ontology/core/meta/AnnotationVocabulary/": os.path.join(ROOT, "imports", "iof-annotation-vocabulary.rdf"),
    "http://purl.obolibrary.org/obo/bfo/2020/bfo.owl": os.path.join(ROOT, "imports", "bfo.owl"),
    "http://purl.obolibrary.org/obo/bfo.owl": os.path.join(ROOT, "imports", "bfo.owl"),
}
for f in sorted(os.listdir(ONT)):
    if f.endswith(".ttl") and f.startswith("transit-"):
        LOCAL[BASE + f[len("transit-"):-4]] = os.path.join(ONT, f)
# the Air Domain Ontology keeps its own IRI
LOCAL["http://www.cranfield.ac.uk/ontology/air-domain"] = os.path.join(ONT, "air-domain.ttl")


def load_closure(start_files):
    """Load files plus their transitive owl:imports (resolved locally)."""
    g, seen, todo = rdflib.Graph(), set(), list(start_files)
    while todo:
        f = todo.pop()
        if f in seen:
            continue
        seen.add(f)
        fmt = "turtle" if f.endswith(".ttl") else "xml"
        g.parse(f, format=fmt)
        for imp in set(g.objects(None, OWL.imports)):
            tgt = LOCAL.get(str(imp))
            if tgt is None:
                print(f"  !! unresolved import {imp}")
            elif tgt not in seen:
                todo.append(tgt)
    return g, seen


def structural(modules):
    ok = True
    print("== structural checks ==")
    for f in modules:
        g = rdflib.Graph()
        try:
            g.parse(f, format="turtle")
        except Exception as e:
            print(f"FAIL parse {os.path.basename(f)}: {e}"); ok = False; continue
        ns = [str(o) for s, o in g.subject_objects(RDF.type) if o == OWL.Ontology]
        print(f"OK   {os.path.basename(f)}: {len(g)} triples")
    full, files = load_closure(modules)
    declared = set(full.subjects(RDF.type, OWL.Class)) | set(full.subjects(RDF.type, OWL.ObjectProperty)) | \
        set(full.subjects(RDF.type, OWL.DatatypeProperty)) | set(full.subjects(RDF.type, OWL.NamedIndividual)) | \
        set(full.subjects(RDF.type, OWL.AnnotationProperty))
    # references to undeclared TransiT terms
    refs = set()
    for s, p, o in full:
        for x in (s, p, o):
            if isinstance(x, URIRef) and str(x).startswith(BASE) and "#" in str(x) and x not in declared:
                refs.add(str(x))
    if refs:
        print("FAIL undeclared TransiT terms referenced:", sorted(refs)); ok = False
    else:
        print("OK   every TransiT term referenced is declared")
    # old namespace must not survive
    old = [str(x) for x in set(full.subjects()) | set(full.objects()) if isinstance(x, URIRef) and "transit/202501" in str(x)]
    if old:
        print("FAIL old namespace still used:", old[:5]); ok = False
    # labels and definitions on TransiT classes/properties
    missing_lab, missing_def = [], []
    for t in (OWL.Class, OWL.ObjectProperty, OWL.DatatypeProperty):
        for e in full.subjects(RDF.type, t):
            if isinstance(e, URIRef) and str(e).startswith(BASE):
                if not full.value(e, RDFS.label): missing_lab.append(str(e).split("#")[-1])
                if not full.value(e, NLD): missing_def.append(str(e).split("#")[-1])
    print(f"{'OK  ' if not missing_lab else 'WARN'} labels missing: {sorted(missing_lab) or 'none'}")
    print(f"{'OK  ' if not missing_def else 'WARN'} definitions missing: {sorted(missing_def) or 'none'}")
    # cardinality restrictions on non-simple properties (outside OWL 2 DL)
    nonsimple = set(full.subjects(RDF.type, OWL.TransitiveProperty)) | set(full.subjects(OWL.propertyChainAxiom, None))
    for p in list(nonsimple):
        nonsimple |= set(full.objects(p, OWL.inverseOf)) | set(full.subjects(OWL.inverseOf, p))
    bad = []
    for r in full.subjects(RDF.type, OWL.Restriction):
        p = full.value(r, OWL.onProperty)
        if p in nonsimple and any(full.value(r, c) is not None for c in (OWL.minQualifiedCardinality, OWL.qualifiedCardinality, OWL.maxQualifiedCardinality, OWL.minCardinality, OWL.cardinality, OWL.maxCardinality)):
            bad.append(str(p).split("/")[-1])
    if bad:
        print("FAIL cardinality on non-simple property:", bad); ok = False
    else:
        print("OK   no cardinality restriction on a non-simple property")
    n_cls = len([c for c in full.subjects(RDF.type, OWL.Class) if isinstance(c, URIRef) and str(c).startswith(BASE)])
    print(f"     TransiT classes across modules: {n_cls}")
    return ok, full


def reason(full, example=None):
    print("== reasoning (HermiT) ==")
    try:
        import owlready2
        from owlready2 import get_ontology, sync_reasoner_hermit, Nothing
    except ImportError:
        print("SKIP owlready2 not installed"); return True
    g = rdflib.Graph()
    for t in full: g.add(t)
    if example:
        g.parse(example, format="turtle")
    for s, p, o in list(g.triples((None, OWL.imports, None))): g.remove((s, p, o))
    for s in list(g.subjects(RDF.type, OWL.Ontology)):
        for p, o in list(g.predicate_objects(s)): g.remove((s, p, o))
    g.add((URIRef("http://example.org/transit-merged"), RDF.type, OWL.Ontology))
    tmp = os.path.join(tempfile.gettempdir(), "transit-merged.owl")
    g.serialize(tmp, format="xml")
    onto = get_ontology("file://" + tmp.replace("\\", "/")).load()
    try:
        with onto:
            sync_reasoner_hermit(infer_property_values=bool(example), debug=0)
    except owlready2.base.OwlReadyInconsistentOntologyError:
        print("FAIL inconsistent"); return False
    unsat = sorted(c.name for c in onto.classes() if Nothing in c.equivalent_to)
    print("OK   consistent" if not unsat else f"FAIL unsatisfiable classes: {unsat}")
    if example:
        print("-- inferred types of example individuals --")
        for ind in sorted(onto.individuals(), key=lambda i: i.name):
            if "examples" in ind.iri:
                print(f"   {ind.name}: {sorted(c.name for c in ind.is_a if hasattr(c, 'name'))}")
    return not unsat


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--reason", action="store_true")
    ap.add_argument("--example")
    a = ap.parse_args()
    modules = [os.path.join(ONT, f) for f in sorted(os.listdir(ONT)) if f.endswith(".ttl")]
    ok, full = structural(modules)
    if a.reason:
        ok = reason(full, a.example) and ok
    print("RESULT:", "PASS" if ok else "FAIL")
    sys.exit(0 if ok else 1)
