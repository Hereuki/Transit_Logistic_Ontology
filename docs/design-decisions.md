# Design decisions for the modular TransiT ontology (version 0.3)

This note records the decisions taken when the single `transit.ttl` file was split into a
mode-neutral core plus mode and intersection modules, so that they can be reviewed and
revisited. Each decision is a proposal by the maintainers of this repository; nothing here
is final.

## 1. Module structure

| Module | IRI | Imports | Content |
|---|---|---|---|
| core | `https://www.cranfield.ac.uk/transit/core` | IOF Core (hence BFO) | everything that is true of transport regardless of mode |
| road, rail, air, maritime | `https://www.cranfield.ac.uk/transit/<mode>` | core | vehicles, ways, terminals and travel legs of one mode |
| rail-road, air-road, rail-maritime, road-maritime, air-maritime | `https://www.cranfield.ac.uk/transit/<a>-<b>` | the two mode modules | terminals that connect two modes, journeys that use both, transshipments between them |
| all | `https://www.cranfield.ac.uk/transit/all` | the five intersections | convenience entry point |

Each module has its own namespace, so the module a term belongs to is visible in its IRI.
The air-rail intersection is not in the current figure and has not been created; the
generator in the project history can add it in one line.

**Namespace change.** The core namespace moved from
`https://www.cranfield.ac.uk/transit/202501#` to `https://www.cranfield.ac.uk/transit/core#`.
The old namespace embedded a date and could not sit next to the module namespaces.
Versions are now carried by `owl:versionIRI` (`.../core/2025-11`) and `owl:versionInfo`.

## 2. Extension points in the core

A mode module only needs these hooks:

- `Vehicle`: subclass it (`RoadVehicle`, `RailVehicle`, `Aircraft`, `Ship`).
- `TransportWay`, `TransferNode`, `Terminal`: subclass them for roads, railways, stations, ports.
- `TravelLeg`: define the mode's leg as `TravelLeg and (operatedByVehicle some <mode vehicle>)`.
- `TransportMode` individuals `RoadMode`, `RailMode`, `AirMode`, `MaritimeMode` and the
  property `hasTransportMode`: assert `hasTransportMode value <mode>` on every mode class.
  A travel leg has exactly one mode; a terminal may have several, which is what makes an
  intermodal terminal definable.

An intersection module uses only `Terminal`, `Journey`, `IntermodalJourney`, `Transshipment`,
`hasTravelLeg`, `followsTravelLeg`, `precedesTravelLeg` and the mode individuals.

## 3. Modelling changes

| Topic | Before | After | Why |
|---|---|---|---|
| Journey / Transit / TravelLegProcess | three overlapping Movement classes, Journey needed two legs, Transit one | `Journey` (one or more `TravelLeg`s) and `TravelLeg` (one vehicle, one mode, one origin, one destination); `Transit` dropped | the editors' own comment said the distinction was unclear; a leg is the natural unit that carries mode |
| Mode versus control | `HDV_Car`, `HDV_Bus`, `HDV_Truck`, `HDV_Van`, `HDV_Train` under `HumanDrivenVehicle` under `RoadVehicle` | `Car`, `Bus`, `Truck`, `Van` in the road module, `Train` in the rail module; `HumanDrivenVehicle` and `AutonomousVehicle` are mode-neutral subclasses of `Vehicle` | an autonomous bus had no class, and a train was a road vehicle |
| GHG Protocol scopes | `EmissionProcessScopeOne/Two/Three` as subclasses of `EmissionProcess` | `GHGProtocolScope` value expression with individuals `Scope1..3`, and `EmissionScopeAssignment`, an information content entity about an emission process for one reporting organisation | scope is relative to the reporting organisation, not a kind of process |
| Carbon footprint | material entity under `GHG_entity` | `CarbonFootprint` under IOF `ValueExpression`, about some entity | it is a quantity |
| GHG source and sink | defined via the grab-bag `GHG_entity` | `GHGSource` and `GHGSink` defined as material entities bearing `GHGSourceRole` / `GHGSinkRole`; the roles sit directly under BFO role | `GHG_entity` had no criterion of identity |
| Emission axioms | GHG emission needed exactly one gas; `hasEmission` only ranged over GHG emissions; `Emission` was a kind of `Waste` | some gas; range `Emission`; `Emission` under `MaterialResidual` | mixed emissions and non-GHG emissions (NOx, particulates) must be expressible |
| Places versus facilities | `Correspondence` and `CorrespondencePort` were BFO objects, `Charging_Point` was defined as a site | `Infrastructure` (material entity, located in some `Location`) with `TransportWay`, `TransferNode`, `Terminal`, `EnergySupplyStation`; `Location` stays a BFO site | one consistent reading: infrastructure is the built thing, location is the place |
| Route | BFO disposition | IOF `PlanSpecification` that prescribes a journey, with `RouteSegment` parts; `Schedule` added alongside | the definition described information, not a disposition |
| Payload and parties | only `PayloadRole`, no bearer class | `Payload` (defined), `CargoUnit`, `Passenger`, `Driver`, `CarrierRole`, `ShipperRole`, `ConsigneeRole` with defined `Carrier`, `Shipper`, `Consignee` | logistics needs the thing being moved and the parties |
| Transshipment | absent | `Transshipment` planned process at a transfer node, between two travel legs | the mechanism behind every intersection in the figure |
| Time stamps and booleans | `startsAtTimeInstance`, `endsAtTimeInstance`, `hasName` and the boolean flags were sub-properties of IOF `hasSimpleExpressionValue` | detached; `isBooleanProperty` and `isPlanned` removed | the IOF property's domain is `ValueExpression`, which made every travel leg unsatisfiable; `isPlanned` contradicted `Movement` being a planned process |
| `exists at` | asserted as a sub-property of IOF `hasProcessCharacteristic` | removed | it made six IOF classes unsatisfiable; imported ontologies are never edited from TransiT |
| Cardinalities on `has occurrent part` | `min 2`, `min 1` | `hasTravelLeg` (a simple sub-property) and `someValuesFrom` | the BFO property is transitive, so cardinalities on it are outside OWL 2 DL |

## 4. Renames

| Old | New | Module |
|---|---|---|
| `Correspondence` | `TransferNode` | core |
| `CorrespondencePort` | `Terminal` | core |
| `LandStation` | dropped (use `Terminal` or a mode terminal) | |
| `ServiceStation` | `ServiceStation` | road |
| `HarborPort` | `Seaport` | maritime |
| `Airport`, `Aircraft`, `Flight`, `AircraftIdentifier` | same names | air |
| `SAF_Fuel` | `SustainableAviationFuel` | air |
| `Ship`, `Sailing`, `ShipIdentifier` | same names | maritime |
| `RoadVehicle`, `RoadVehicleIdentifier` | same names | road |
| `CarTravel` | `RoadTravelLeg` | road |
| `TrainTravel` | `RailTravelLeg` | rail |
| `HDV_Car`, `HDV_Bus`, `HDV_Truck`, `HDV_Van` | `Car`, `Bus`, `Truck`, `Van` | road |
| `HDV_Train` | `Train` | rail |
| `TravelLegProcess` | `TravelLeg` | core |
| `Transit` | dropped | |
| `Charging_Point` | `ChargingPoint` | core |
| `GHG_Source`, `GHG_Sink`, `GHG_SourceRole`, `GHG_SinkRole` | `GHGSource`, `GHGSink`, `GHGSourceRole`, `GHGSinkRole` | core |
| `GHG_entity` | dropped | |
| `Greenhouse_Gas`, `Carbon_Dioxide` | `GreenhouseGas`, `CarbonDioxide` | core |
| `EV_charger` | `ElectricVehicleCharger` | core |
| `FuelAdder` | `FuelDispenser` | core |
| `FuleChargerRole` | `FuelChargerRole` | core |
| `TransportMoneytaryCostSpecification` | `TransportMonetaryCostSpecification` | core |
| `EnergyTransRole` | `EnergyTransferRole` | core |
| `route`, `RouteLeg` | `Route`, `RouteSegment` | core |
| `hasPayLoad` | `hasPayload` | core |
| `_tempPropertyObjectIES4`, `isBooleanProperty`, `isPlanned`, `hasParticipantsInIndustry` | dropped | |

## 5. Known open issues

- `Energy`, `Fuel` and `Electricity` are still IOF material resources. Fuel is matter, but
  electricity is a flow of charge and energy is a quantity. Left as is for now.
- `DesignedCurrent`, `DesignedPower` and the other charger design classes are modelled as
  functions, but their definitions describe specification values.
- `hasUnit` is a string. A units ontology (QUDT or OM) should replace it.
- `Vehicle` requires a `TransportDesignSpecification` for every instance, which forces data
  completeness.
- The diagrams in `docs/figures/` predate the split and still show the old class names.
- The Air Domain Ontology on the `air-ontology` branch has its own upper level and must be
  re-hung under the core before it can extend the air module.
