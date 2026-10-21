# Air Domain Ontology

An OWL ontology of air transport, developed at Cranfield University. It covers passenger and cargo operations, airports, aircraft and airworthiness, flight operations and crew, air traffic management, ground handling, regulation, safety and security, and environmental sustainability.

Current version: 0.2.0

Namespace: `http://www.cranfield.ac.uk/ontology/air-domain#` (prefix `air:`)

## Files

- `Air_Domain_Ontology_v0.2.ttl` - the ontology in Turtle format
- `WIDOCO/` - HTML documentation generated with [WIDOCO](https://github.com/dgarijo/Widoco), including a WebVOWL diagram and downloads in RDF/XML, N-Triples and JSON-LD
- `index.html` - redirects the GitHub Pages site to the documentation

## About the ontology

There are 254 classes, 115 object properties, 13 data properties and 6 named individuals. The top-level classes are Agent, PhysicalObject, InformationObject, Process, Location, Measurement, Service and Category.

Version 0.2 adds axioms to what was previously just a class hierarchy:

- disjointness between the top-level classes and between sibling classes
- restrictions, e.g. a flight departs from exactly one aerodrome, every airline holds an Air Operator Certificate, and every consignment has an airway bill, a shipper and a consignee
- defined classes (TransitFlight, DirectFlight, DangerousGoods, LeasedAircraft)
- a transitive partOf/hasPart relation, inverse and functional properties, and a small property hierarchy


