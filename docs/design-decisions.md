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
| rail-road, air-road, rail-maritime, road-maritime, air-maritime, air-rail | `https://www.cranfield.ac.uk/transit/<a>-<b>` | the two mode modules | terminals that connect two modes, journeys that use both, transshipments between them |
| freight, passenger | `https://www.cranfield.ac.uk/transit/freight`, `.../passenger` | core | what is moved (consignments) and who is moved (passengers), independent of mode (section 8) |
| air-domain | `https://www.cranfield.ac.uk/transit/air-domain` | air, road, Air Domain Ontology | bridge hanging the Air Domain Ontology under TransiT (section 6) |
| all | `https://www.cranfield.ac.uk/transit/all` | the six intersections and the bridge | convenience entry point |

Each module has its own namespace, so the module a term belongs to is visible in its IRI.
The Air Domain Ontology keeps its original IRI `http://www.cranfield.ac.uk/ontology/air-domain`.

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

## 5. Version 0.4 changes

| Topic | Decision | Why |
|---|---|---|
| Energy | `Energy` renamed `EnergyCarrier` (an IOF material resource: fuel, electricity, hydrogen). The *quantity* is a separate `EnergyAmount` value expression attached with `hasEnergyAmount` to a process or material entity. `Electricity` stays a material resource with an explicit note that this is a convention for accounting. `Fuel` and `Electricity` are disjoint; `Hydrogen` added under `Fuel`. | the old class conflated the carrier with the quantity; a flight's energy use is a quantity, the kerosene is a carrier |
| Charger design | The eight `Designed*` function classes (current, voltage, power, frequency, phase, pin, connector, protocol) replaced by `ChargerDesignSpecification` and seven subclasses under IOF `DesignSpecification`. `EnergyCharger` is prescribed by some charger design specification and keeps its `DesignedChargerFunction`. | their definitions described specification values, not functions |
| Units | `hasMeasurementUnit` (object property, range `qudt:Unit`) replaces the string property `hasUnit`, which is deprecated but kept. `qudt:Unit` is declared locally so QUDT unit individuals can be referenced without importing QUDT. `hasNumericalValue` now ranges over `xsd:double`. | computation needs machine-readable units |
| Vehicle | No longer required to be prescribed by a `TransportDesignSpecification`. Still applies some energy carrier. | design specifications prescribe vehicle types, not every instance |
| Air-rail intersection | Added; the generator now produces six intersection modules. | completes the pairwise set |
| Mode coverage | Road: `Motorcycle`, `Bicycle`. Rail: `Tram`, `Metro`. Maritime: `Ferry`, `Barge`, `ContainerShip`. Air: `Aeroplane`, `Helicopter`, `UnmannedAircraft` (also an `AutonomousVehicle`). | the minimum set left obvious gaps |
| Pedestrian legs | `TravelLeg` now has *at most* one vehicle. `PedestrianLeg` is a travel leg with no vehicle and the new `WalkingMode`. | a journey from station to office has a walking leg; it was unrepresentable |
| Disruptions | `Disruption` (an inherent process that `disrupts` some movement) with `Delay` and `Incident`. `Schedule` gets `plannedStartTime` and `plannedEndTime`; actual times stay on the movement. | planned versus actual, and the reasons for divergence, were missing |
| Air Domain Ontology | Copied from the `air-ontology` branch to `ontology/air-domain.ttl` (its own IRI), improved in place, and hung under TransiT by the bridge `transit-air-domain.ttl`. See section 6. | the user asked for it to be assessed and integrated |
| IES4 alignment | `ontology/alignments/transit-ies4-alignment.ttl` records `skos:closeMatch` links for the fourteen adapted terms. Not imported anywhere. | provenance for data exchange without merging a 4D ontology into reasoning |

## 6. Air Domain Ontology: assessment and integration

**Assessment of version 0.2** (254 classes, 115 object properties, 13 data properties):
every class has a label and a definition, the hierarchy is acyclic, the file is in OWL 2 DL,
and HermiT finds it consistent with no unsatisfiable class. Its weaknesses were structural:
no upper ontology, nine pragmatic top-level classes with pairwise disjointness, and a few
misfiled branches: `Route`, `MultimodalLink`, `AirNetwork` and `RoadNetwork` under
`Location` although they are built ways and nodes; `EnergyUnit` (a quantity) under
`Measurement` next to `KPI`; `SustainableAviationFuel` under the `EnergySource`
classification rather than as a material; `LeasedAircraft` floating at the top because it
is only defined, never asserted, as a kind of aircraft.

**Improvements made in the file** (now version 0.3.0, with a change note): the four
misfiled classes moved to `Infrastructure` with corrected definitions, and
`LeasedAircraft` asserted under `Aircraft`. Nothing else was changed, so the ontology
remains usable on its own.

**Bridge** (`transit-air-domain.ttl`, imports the air and road modules and the air
ontology): the nine top-level classes are mapped to BFO and IOF (`Agent`, `Organization`,
`Person`, material entity, process, `transit:Location`, information content entity,
value expression for both `Measurement` and `Category`, IOF `Capability` for `Service`),
and the key domain classes to TransiT (`Aircraft`, `Airport`, `Flight`, `GroundVehicle`,
`Cargo` and `Consignment` as payload, `CargoContainer` as cargo unit, `Airline` as carrier,
`Passenger`, schedules, `EnergyUnit` as energy amount, `CarbonEmission` as carbon
footprint). Nine properties are mapped, so a flight described purely in air-domain terms
is classified as a TransiT flight and travel leg. The whole closure, 167 TransiT classes
plus 254 air classes, is consistent under HermiT.

**Deliberately not aligned:** `ad:SustainableAviationFuel` (a classification value, not the
material fuel), `ad:Terminal` (an airport building, not a transfer node), and
`ad:hasPart`/`ad:partOf` (used for both continuants and occurrents).

## 8. Version 0.5: freight and passenger movement

A coverage review found that the ontology described vehicles, infrastructure, energy and
emissions in detail but what is moved only as "a leg carries a payload". Version 0.5 adds
the missing layer, split into a core part and two cross-cutting modules.

| Topic | Decision | Why |
|---|---|---|
| Vehicle run versus carried leg | `VehicleRun` is a travel leg that is one vehicle's movement. The legs of passengers and consignments aboard are separate travel legs `carriedBy` the run; `carriedBy` is a sub-property of BFO *occurrent part of*. `ConsignmentLeg` and `PassengerLeg` are both disjoint from `VehicleRun`. | one bus run carries many passenger journeys and one truck round many consignments; load factor, groupage and allocating a run's emissions to what it carried are inexpressible without the split |
| No property chain from run to leg | `carriedBy o operatedByVehicle -> operatedByVehicle` was considered and rejected: it makes `operatedByVehicle` non-simple, and `TravelLeg` carries a cardinality on it. Data must assert the vehicle on carried legs for mode classification. A SPARQL rule can propagate it. | stay in OWL 2 DL |
| Services and operators | `TransportService` is an IOF commercial service specification `offeredBy` a `TransportOperator`; runs `realiseService`. `CarrierRole` is now a sub-role of `TransportOperatorRole`. `Line` (passenger) is a service with at least two stops; `TimetabledRun` is a run that realises a line. | the offering, the operator and the realisation are three different things |
| Stops and calls | `Stop` is a transfer node at which runs call; `StopCall` is the dwell process at one stop (arrival to departure), part of the run. `LoadingBay` (freight) and `Platform` (passenger) attach here. | boarding, alighting, loading and unloading happen at calls, and time slots are booked for them |
| Capacity and load | `Occupancy` and `LoadFactor` are measured value expressions on runs; `TransportWork` (tonne-km, passenger-km) on movements; `MassAmount` and `VolumeAmount` on material entities. `SeatedCapacity` and `StandingCapacity` are design specifications. | the denominators of every emission-intensity figure |
| Status | `TransportStatus` is a value expression; the freight and passenger modules provide the individuals (booked, collected, in transit, delivered; scheduled, boarded, completed, cancelled). Handling processes are modelled separately as processes. | track-and-trace states are information about a movement, not kinds of movement |
| Bookings, documents, prices | `Booking` is an agreement that `books` a service or run; `TransportDocument` is an information content entity that `documents` a movement, payload or booking; `Tariff` prescribes a `MonetaryAmount` whose unit is a QUDT currency. Freight: `Waybill` and its kinds, `ProofOfDelivery`, `CustomsDeclaration`, `TransportOrder`, `FreightRate`. Passenger: `Ticket`, `Reservation`, `Fare`, `FareClass`. | contracts and evidence were entirely absent |
| Consignments | `Consignment` is a payload with a shipper and a consignee, the unit of contract and tracking. `FreightJourney` is its journey. `EmptyRun` is a defined class: a vehicle run with no payload. | the unit of freight transport |
| Kinds of goods | Dangerous, perishable, temperature-controlled, live animals, oversized, high-value and bulk are subclasses of `Payload`; containerised and palletised are defined by being part of a container or pallet. Cargo units: `Container`, `SwapBody`, `Pallet`, `Parcel`. | handling needs drive mode, vehicle and cost |
| Delivery terms | `DeliveryTerm` value expression with six Incoterms 2020 individuals. | who pays and where risk passes |
| Handling processes | `HandlingProcess` (a planned process that `handlesPayload`) with Pickup, Delivery, Loading, Unloading, Storage, Picking, Packing, Consolidation, Deconsolidation, CrossDocking, CustomsClearance, Inspection, ReturnOfEmpties. `Transshipment` in the core is left as is; `Interchange` (passenger) is a transshipment made by the passengers themselves. | the nodes of a freight event chain |
| Freight nodes | `Warehouse`, `DistributionCentre` (also a transfer node), `Depot`, `CrossDock`, `ContainerYard`, `LoadingBay`, `DockAppointment` (a time slot). | the places handling happens |
| Passenger journeys | `PassengerLeg` boards and alights at stops; `PassengerJourney` is made of passenger and pedestrian legs with a `TripPurpose`. `PassengerGroup`, `Luggage` (payload that accompanies a passenger). | the passenger's trip is not the bus's run |
| Services for people | `PublicTransportService`, `SharedMobilityService` with demand-responsive, ride-hailing, car-sharing and bike-sharing, `TransportAuthority`. | shared mobility is not timetabled public transport |
| Accessibility | `AccessibilityNeed` on passengers and `AccessibilityFeature` on infrastructure and vehicles share four individuals (wheelchair, step-free, visual, hearing); `ReducedMobilityPassenger` is defined. | needs and provisions must be matchable |
| Service quality | `Cancellation` (core), `MissedConnection`, `Punctuality`, `Headway`. | the quality measures that passengers notice |

## 9. Version 0.6: the open issues closed

| Issue | Resolution |
|---|---|
| `Electricity` was a material resource by convention | `ElectricitySupply` is now a BFO process: charge flowing through a conductor, via a charger (`suppliedBy`), to a device (`suppliesElectricityTo`), with an energy amount. `Fuel` stays a material resource. `EnergyCarrier` is a defined union of the two, so `appliesEnergy`, `usesEnergy` and `chargesEnergy` keep their range and `Vehicle` keeps applying some energy carrier. A charging session is the natural instance: a process with a start, an end and a quantity. |
| Figures showed 0.2 class names | Four SVG figures are generated by a script (modules, core hierarchy under BFO and IOF, emission scene, transport scene with the vehicle-run split and allocation). The 0.2 PNGs moved to `docs/figures/v0.2/`. |
| Air ontology filed `EDISystem` and `OperationalControlSystem` under `InformationObject` | Air Domain Ontology 0.3.1 adds `InformationSystem` under `PhysicalObject` and moves both there; the bridge maps it to IOF `EngineeredSystem`. |
| Air ontology models parties as agent subclasses | The bridge now makes `ad:Shipper`, `ad:Consignee`, `ad:Exporter` and `ad:Importer` equivalent to an air agent bearing the matching TransiT role (`ExporterRole` and `ImporterRole` were added to the freight module). Both readings coincide: an agent given the role is classified as the party, and a party is entailed to have the role. The air file itself is untouched. |

With the freight module in place the bridge also maps `ad:Consignment`, `ad:DangerousGoods`,
`ad:AirwayBill`, `ad:CustomsClearance`, `ad:CargoHandlingOperation`, `ad:Warehouse`,
`ad:FreightForwarder` and `ad:Slot`, and the properties `hasShipper`, `hasConsignee`,
`usesAirline`, `handledByFreightForwarder` and `usesAirwayBill`. `ad:Flight` is now also a
`VehicleRun`.

## 10. Version 0.7: additions for the end-to-end demo

| Addition | Where | Why |
|---|---|---|
| `CrewRole`, `CrewMember`, `crews` | core | train drivers, masters and pilots are not road drivers; `DriverRole` ranges over human-driven road vehicles |
| `ElectricVehicle` (defined: applies some electricity supply), `ChargingSession` (defined: electricity supply through a charger) | core | lets the reasoner find electric and bi-mode vehicles and charging sessions from the energy data |
| `EmissionFactor` with `EmissionFactorBasis` (`LocationBased`, `MarketBased`) and `hasEmissionFactor` | core | the figure an emission mass is derived from, and whether electricity is counted at grid average or contracted supply |
| `DistanceAmount`, `hasDistanceAmount` | core | needed for transport work and per tonne-kilometre figures |
| `ElectricAircraft`, `AircraftCharger` | air | electrification near the airport |
| `Berth` | maritime | the stop at which a ship moors |
| `tools/footprint.py` | tools | allocates each run's emission to a consignment by payload-mass share; works on asserted data without a reasoner |

The demo `examples/uk-orkney-vaccines.ttl` uses all of these. Its figures are invented.

## 11. Known open issues

- The SVG figures are generated with fixed coordinates; they should be checked visually
  after any change to the script.
- The air ontology's `ad:ULD` is a cargo unit but neither an ISO container nor a pallet; a
  `UnitLoadDevice` class in the freight module would let it be placed precisely.
- Propagating a vehicle from a run to the legs it carries stays outside OWL (see section 8).
