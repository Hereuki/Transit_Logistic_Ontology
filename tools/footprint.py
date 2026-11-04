"""Carbon footprint of a consignment, allocated from the vehicle runs that carried it.

    python tools/footprint.py examples/uk-orkney-vaccines.ttl
    python tools/footprint.py <example.ttl> <consignment IRI>

For each consignment leg: the vehicle run it is carried by, the run's emission mass (all
emission processes that are occurrent parts of the run), the consignment's share of the
run's payload mass, and the allocated emission. Totals are given with location-based and
market-based electricity figures and per tonne-kilometre. No reasoning is needed:
everything used is asserted in the data. Uses only rdflib.
"""
import sys
from collections import defaultdict
import rdflib
from rdflib import URIRef
from rdflib.namespace import RDF, RDFS

T = rdflib.Namespace("https://www.cranfield.ac.uk/transit/core#")
F = rdflib.Namespace("https://www.cranfield.ac.uk/transit/freight#")
PART_OF = URIRef("http://purl.obolibrary.org/obo/BFO_0000132")


def num(g, s, p):
    v = g.value(s, p)
    return float(g.value(v, T.hasNumericalValue)) if v is not None else None


def main(path, cons=None):
    g = rdflib.Graph(); g.parse(path, format="turtle")
    if cons is None:
        conss = list(g.subjects(RDF.type, F.Consignment))
        if len(conss) != 1:
            sys.exit(f"give the consignment IRI; found {len(conss)}: {conss}")
        cons = conss[0]
    cons = URIRef(cons)
    cons_kg = num(g, cons, T.hasMass)
    print(f"consignment: {g.value(cons, RDFS.label) or cons} ({cons_kg:.0f} kg)\n")
    print(f"{'leg':32s} {'run':44s} {'km':>5s} {'run kg':>8s} {'share':>7s} {'alloc kg':>9s}  basis")

    legs = sorted((l for l in g.subjects(RDF.type, F.ConsignmentLeg) if (l, T.hasPayload, cons) in g), key=str)
    total_loc = total_mkt = tkm = 0.0
    for leg in legs:
        run = g.value(leg, T.carriedBy)
        if run is None:
            print(f"{str(g.value(leg, RDFS.label) or leg)[:32]:32s} (not carried by a vehicle run)"); continue
        km = num(g, run, T.hasDistanceAmount) or 0.0
        tkm += cons_kg / 1000.0 * km
        payload_kg = sum(num(g, p, T.hasMass) or 0.0 for p in g.objects(run, T.hasPayload))
        share = cons_kg / payload_kg if payload_kg else 1.0
        by_basis = defaultdict(float)
        for ep in g.subjects(PART_OF, run):
            if (ep, RDF.type, T.EmissionProcess) not in g:
                continue
            for em in g.objects(ep, T.hasEmission):
                for m in g.objects(em, T.hasMass):
                    basis = str(g.value(m, T.hasEmissionFactorBasis) or T.LocationBased).split("#")[-1]
                    by_basis[basis] += float(g.value(m, T.hasNumericalValue))
        for basis, kg in sorted(by_basis.items()):
            print(f"{str(g.value(leg, RDFS.label) or leg)[:32]:32s} {str(g.value(run, RDFS.label) or run)[:44]:44s} {km:5.0f} {kg:8.1f} {share:7.4f} {kg * share:9.2f}  {basis}")
        total_loc += by_basis.get("LocationBased", 0.0) * share
        total_mkt += by_basis.get("MarketBased", by_basis.get("LocationBased", 0.0)) * share
    print(f"\ntransport work: {tkm:.1f} tonne-km over {len(legs)} legs")
    print(f"footprint with location-based electricity: {total_loc:8.2f} kg CO2e  ({total_loc * 1000 / tkm:.1f} g per tonne-km)")
    print(f"footprint with market-based electricity:   {total_mkt:8.2f} kg CO2e  ({total_mkt * 1000 / tkm:.1f} g per tonne-km)")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
