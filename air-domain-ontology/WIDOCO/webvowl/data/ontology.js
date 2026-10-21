window.WEBVOWL_EMBEDDED_ONTOLOGY = {
  "_comment" : "Created with OWL2VOWL (version 0.3.5), http://vowl.visualdataweb.org",
  "header" : {
    "languages" : [ "en", "undefined" ],
    "baseIris" : [ "http://www.cranfield.ac.uk/ontology/air-domain", "http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://www.w3.org/2000/01/rdf-schema", "http://www.w3.org/2001/XMLSchema" ],
    "title" : {
      "en" : "Air Domain Ontology"
    },
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "version" : "0.2.0",
    "labels" : {
      "en" : "Air Domain Ontology"
    },
    "comments" : {
      "en" : "A comprehensive ontology of the civil air transport domain, covering air passenger and cargo/freight operations, airport infrastructure and operations, aircraft and airworthiness, flight operations and crew, air traffic management, ground handling, regulatory/certification instruments, safety and security, and environmental sustainability. Consolidated from the project's existing class/relationship tables (Air_Freight_and_Passenger_Ontology, Sheet3 organisational/regulatory layers, the cargo-handling 'Category' breakdown, and the Airport Operations Plan / APOC concepts) and extended with generally-recognised air-domain concepts not yet captured there. No upper ontology (e.g. BFO) is imported; a small set of pragmatic top-level classes (Agent, PhysicalObject, InformationObject, Process, Location, PolicyOrRegulation, Measurement, Service, Category) organises the hierarchy instead."
    },
    "other" : {
      "preferredNamespacePrefix" : [ {
        "identifier" : "preferredNamespacePrefix",
        "language" : "undefined",
        "value" : "air",
        "type" : "label"
      } ],
      "changeNote" : [ {
        "identifier" : "changeNote",
        "language" : "en",
        "value" : "0.2.0: fixed inverted/part-of subclass links (Aerodrome/Airport, AerodromeOperatingSite, ChargingPoint, Consignment); converted EASA, FAA, ICAO, IATA, CORSIA from classes to individuals; moved classifications out of Measurement into a new Category branch; added Identifier, Certificate, Licence, Occurrence, TradeAssociation, GroundVehicle; fixed IATAcode/ICAOcode range typos and over-narrow domains/ranges; added part-of, property hierarchy, inverses, functional properties, existential and cardinality restrictions, defined classes and disjointness axioms.",
        "type" : "label"
      } ],
      "versionInfo" : [ {
        "identifier" : "versionInfo",
        "language" : "undefined",
        "value" : "0.2.0",
        "type" : "label"
      } ],
      "preferredNamespaceUri" : [ {
        "identifier" : "preferredNamespaceUri",
        "language" : "undefined",
        "value" : "http://www.cranfield.ac.uk/ontology/air-domain#",
        "type" : "label"
      } ],
      "abstract" : [ {
        "identifier" : "abstract",
        "language" : "en",
        "value" : "An OWL 2 DL ontology of the civil air transport domain: passenger and cargo operations, airports, aircraft and airworthiness, flight operations and crew, air traffic management, ground handling, regulation, safety and security, and environmental sustainability.",
        "type" : "label"
      } ],
      "title" : [ {
        "identifier" : "title",
        "language" : "en",
        "value" : "Air Domain Ontology",
        "type" : "label"
      }, {
        "identifier" : "title",
        "language" : "en",
        "value" : "Air Domain Ontology",
        "type" : "label"
      } ]
    }
  },
  "namespace" : [ ],
  "class" : [ {
    "id" : "6",
    "type" : "owl:Class"
  }, {
    "id" : "14",
    "type" : "owl:Class"
  }, {
    "id" : "20",
    "type" : "owl:intersectionOf"
  }, {
    "id" : "30",
    "type" : "owl:Class"
  }, {
    "id" : "7",
    "type" : "owl:Class"
  }, {
    "id" : "61",
    "type" : "owl:Class"
  }, {
    "id" : "63",
    "type" : "owl:Class"
  }, {
    "id" : "65",
    "type" : "owl:Class"
  }, {
    "id" : "69",
    "type" : "owl:Class"
  }, {
    "id" : "79",
    "type" : "owl:Class"
  }, {
    "id" : "92",
    "type" : "owl:Class"
  }, {
    "id" : "116",
    "type" : "owl:Class"
  }, {
    "id" : "21",
    "type" : "owl:Class"
  }, {
    "id" : "119",
    "type" : "owl:Class"
  }, {
    "id" : "2",
    "type" : "owl:Class"
  }, {
    "id" : "122",
    "type" : "owl:Class"
  }, {
    "id" : "123",
    "type" : "owl:Class"
  }, {
    "id" : "162",
    "type" : "owl:Class"
  }, {
    "id" : "164",
    "type" : "owl:Class"
  }, {
    "id" : "166",
    "type" : "owl:Class"
  }, {
    "id" : "167",
    "type" : "owl:Class"
  }, {
    "id" : "10",
    "type" : "owl:Class"
  }, {
    "id" : "173",
    "type" : "owl:Class"
  }, {
    "id" : "174",
    "type" : "owl:Class"
  }, {
    "id" : "176",
    "type" : "owl:Class"
  }, {
    "id" : "210",
    "type" : "owl:Class"
  }, {
    "id" : "217",
    "type" : "owl:Class"
  }, {
    "id" : "219",
    "type" : "owl:Class"
  }, {
    "id" : "220",
    "type" : "owl:Class"
  }, {
    "id" : "51",
    "type" : "owl:Class"
  }, {
    "id" : "24",
    "type" : "owl:Class"
  }, {
    "id" : "237",
    "type" : "owl:Class"
  }, {
    "id" : "19",
    "type" : "owl:Class"
  }, {
    "id" : "153",
    "type" : "owl:Class"
  }, {
    "id" : "38",
    "type" : "owl:Class"
  }, {
    "id" : "28",
    "type" : "owl:Class"
  }, {
    "id" : "241",
    "type" : "owl:Class"
  }, {
    "id" : "47",
    "type" : "owl:Class"
  }, {
    "id" : "255",
    "type" : "owl:intersectionOf"
  }, {
    "id" : "260",
    "type" : "owl:Class"
  }, {
    "id" : "283",
    "type" : "owl:Class"
  }, {
    "id" : "288",
    "type" : "owl:Class"
  }, {
    "id" : "291",
    "type" : "owl:Class"
  }, {
    "id" : "33",
    "type" : "owl:Class"
  }, {
    "id" : "192",
    "type" : "owl:Class"
  }, {
    "id" : "293",
    "type" : "owl:Class"
  }, {
    "id" : "295",
    "type" : "owl:Class"
  }, {
    "id" : "308",
    "type" : "owl:Class"
  }, {
    "id" : "64",
    "type" : "owl:Class"
  }, {
    "id" : "254",
    "type" : "owl:Class"
  }, {
    "id" : "271",
    "type" : "owl:Class"
  }, {
    "id" : "264",
    "type" : "owl:Class"
  }, {
    "id" : "351",
    "type" : "owl:Class"
  }, {
    "id" : "355",
    "type" : "owl:Class"
  }, {
    "id" : "356",
    "type" : "owl:Class"
  }, {
    "id" : "150",
    "type" : "owl:Class"
  }, {
    "id" : "297",
    "type" : "owl:Class"
  }, {
    "id" : "389",
    "type" : "owl:Class"
  }, {
    "id" : "335",
    "type" : "owl:Class"
  }, {
    "id" : "94",
    "type" : "owl:Class"
  }, {
    "id" : "42",
    "type" : "owl:intersectionOf"
  }, {
    "id" : "333",
    "type" : "owl:Class"
  }, {
    "id" : "282",
    "type" : "owl:Class"
  }, {
    "id" : "181",
    "type" : "owl:Class"
  }, {
    "id" : "287",
    "type" : "owl:Class"
  }, {
    "id" : "245",
    "type" : "owl:Class"
  }, {
    "id" : "37",
    "type" : "owl:Class"
  }, {
    "id" : "163",
    "type" : "owl:unionOf"
  }, {
    "id" : "218",
    "type" : "owl:Class"
  }, {
    "id" : "318",
    "type" : "owl:Class"
  }, {
    "id" : "169",
    "type" : "owl:Class"
  }, {
    "id" : "126",
    "type" : "owl:Class"
  }, {
    "id" : "98",
    "type" : "owl:Class"
  }, {
    "id" : "364",
    "type" : "owl:Class"
  }, {
    "id" : "269",
    "type" : "owl:Class"
  }, {
    "id" : "131",
    "type" : "owl:Class"
  }, {
    "id" : "276",
    "type" : "owl:Class"
  }, {
    "id" : "346",
    "type" : "owl:Class"
  }, {
    "id" : "121",
    "type" : "owl:Class"
  }, {
    "id" : "252",
    "type" : "owl:Class"
  }, {
    "id" : "194",
    "type" : "owl:Class"
  }, {
    "id" : "233",
    "type" : "owl:Class"
  }, {
    "id" : "212",
    "type" : "owl:Class"
  }, {
    "id" : "375",
    "type" : "owl:Class"
  }, {
    "id" : "312",
    "type" : "owl:Class"
  }, {
    "id" : "454",
    "type" : "owl:Class"
  }, {
    "id" : "410",
    "type" : "owl:Class"
  }, {
    "id" : "201",
    "type" : "owl:Class"
  }, {
    "id" : "172",
    "type" : "owl:Class"
  }, {
    "id" : "458",
    "type" : "owl:Class"
  }, {
    "id" : "147",
    "type" : "owl:Class"
  }, {
    "id" : "106",
    "type" : "owl:intersectionOf"
  }, {
    "id" : "34",
    "type" : "owl:Class"
  }, {
    "id" : "476",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "70",
    "type" : "owl:Class"
  }, {
    "id" : "325",
    "type" : "owl:Class"
  }, {
    "id" : "278",
    "type" : "owl:Class"
  }, {
    "id" : "298",
    "type" : "owl:Class"
  }, {
    "id" : "494",
    "type" : "owl:Class"
  }, {
    "id" : "23",
    "type" : "owl:Class"
  }, {
    "id" : "143",
    "type" : "owl:Class"
  }, {
    "id" : "262",
    "type" : "owl:Class"
  }, {
    "id" : "518",
    "type" : "owl:Class"
  }, {
    "id" : "266",
    "type" : "owl:Class"
  }, {
    "id" : "108",
    "type" : "owl:Class"
  }, {
    "id" : "536",
    "type" : "owl:Class"
  }, {
    "id" : "118",
    "type" : "owl:Class"
  }, {
    "id" : "440",
    "type" : "owl:Thing"
  }, {
    "id" : "415",
    "type" : "owl:Thing"
  }, {
    "id" : "313",
    "type" : "owl:Class"
  }, {
    "id" : "280",
    "type" : "owl:Class"
  }, {
    "id" : "527",
    "type" : "owl:Class"
  }, {
    "id" : "206",
    "type" : "owl:Class"
  }, {
    "id" : "555",
    "type" : "owl:Class"
  }, {
    "id" : "290",
    "type" : "owl:Class"
  }, {
    "id" : "59",
    "type" : "owl:Thing"
  }, {
    "id" : "535",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "499",
    "type" : "owl:Thing"
  }, {
    "id" : "557",
    "type" : "owl:Thing"
  }, {
    "id" : "496",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "560",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "561",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "562",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "391",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "548",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "141",
    "type" : "owl:Class"
  }, {
    "id" : "67",
    "type" : "owl:Class"
  }, {
    "id" : "100",
    "type" : "owl:Class"
  }, {
    "id" : "422",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "568",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "456",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "564",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "569",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "208",
    "type" : "owl:Class"
  }, {
    "id" : "385",
    "type" : "owl:Class"
  }, {
    "id" : "175",
    "type" : "owl:Class"
  }, {
    "id" : "55",
    "type" : "owl:Class"
  }, {
    "id" : "221",
    "type" : "owl:Class"
  }, {
    "id" : "165",
    "type" : "owl:Class"
  }, {
    "id" : "348",
    "type" : "owl:Class"
  }, {
    "id" : "46",
    "type" : "owl:Class"
  }, {
    "id" : "137",
    "type" : "owl:Class"
  }, {
    "id" : "225",
    "type" : "owl:Class"
  }, {
    "id" : "240",
    "type" : "owl:Class"
  }, {
    "id" : "583",
    "type" : "owl:Class"
  }, {
    "id" : "32",
    "type" : "owl:Class"
  }, {
    "id" : "405",
    "type" : "owl:Class"
  }, {
    "id" : "530",
    "type" : "owl:Class"
  }, {
    "id" : "246",
    "type" : "owl:Class"
  }, {
    "id" : "15",
    "type" : "owl:Class"
  }, {
    "id" : "17",
    "type" : "owl:Class"
  }, {
    "id" : "465",
    "type" : "owl:Class"
  }, {
    "id" : "418",
    "type" : "owl:Class"
  }, {
    "id" : "285",
    "type" : "owl:Class"
  }, {
    "id" : "161",
    "type" : "owl:Class"
  }, {
    "id" : "57",
    "type" : "owl:Class"
  }, {
    "id" : "216",
    "type" : "owl:Class"
  }, {
    "id" : "72",
    "type" : "owl:Class"
  }, {
    "id" : "303",
    "type" : "owl:Class"
  }, {
    "id" : "148",
    "type" : "owl:Class"
  }, {
    "id" : "248",
    "type" : "owl:Class"
  }, {
    "id" : "12",
    "type" : "owl:Class"
  }, {
    "id" : "274",
    "type" : "owl:Class"
  }, {
    "id" : "323",
    "type" : "owl:Class"
  }, {
    "id" : "183",
    "type" : "owl:Class"
  }, {
    "id" : "83",
    "type" : "owl:Class"
  }, {
    "id" : "525",
    "type" : "owl:Class"
  }, {
    "id" : "353",
    "type" : "owl:Class"
  }, {
    "id" : "179",
    "type" : "owl:Class"
  }, {
    "id" : "214",
    "type" : "owl:Class"
  }, {
    "id" : "4",
    "type" : "owl:Class"
  }, {
    "id" : "139",
    "type" : "owl:Class"
  }, {
    "id" : "68",
    "type" : "owl:Class"
  }, {
    "id" : "82",
    "type" : "owl:Class"
  }, {
    "id" : "5",
    "type" : "owl:Class"
  }, {
    "id" : "397",
    "type" : "owl:Class"
  }, {
    "id" : "484",
    "type" : "owl:Class"
  }, {
    "id" : "257",
    "type" : "owl:Class"
  }, {
    "id" : "13",
    "type" : "owl:Class"
  }, {
    "id" : "44",
    "type" : "owl:Class"
  }, {
    "id" : "514",
    "type" : "owl:Class"
  }, {
    "id" : "338",
    "type" : "owl:Class"
  }, {
    "id" : "60",
    "type" : "owl:Class"
  }, {
    "id" : "573",
    "type" : "owl:Class"
  }, {
    "id" : "444",
    "type" : "owl:Class"
  }, {
    "id" : "582",
    "type" : "owl:Class"
  }, {
    "id" : "307",
    "type" : "owl:Class"
  }, {
    "id" : "1",
    "type" : "owl:Class"
  }, {
    "id" : "52",
    "type" : "owl:Class"
  }, {
    "id" : "579",
    "type" : "owl:Class"
  }, {
    "id" : "480",
    "type" : "owl:Class"
  }, {
    "id" : "376",
    "type" : "owl:Class"
  }, {
    "id" : "49",
    "type" : "owl:Class"
  }, {
    "id" : "305",
    "type" : "owl:Class"
  }, {
    "id" : "473",
    "type" : "owl:Class"
  }, {
    "id" : "196",
    "type" : "owl:Class"
  }, {
    "id" : "488",
    "type" : "owl:Class"
  }, {
    "id" : "129",
    "type" : "owl:Class"
  }, {
    "id" : "204",
    "type" : "owl:Class"
  }, {
    "id" : "343",
    "type" : "owl:Class"
  }, {
    "id" : "104",
    "type" : "owl:Class"
  }, {
    "id" : "501",
    "type" : "owl:Class"
  }, {
    "id" : "145",
    "type" : "owl:Class"
  }, {
    "id" : "379",
    "type" : "owl:Class"
  }, {
    "id" : "272",
    "type" : "owl:Class"
  }, {
    "id" : "635",
    "type" : "owl:Class"
  }, {
    "id" : "113",
    "type" : "owl:Class"
  }, {
    "id" : "311",
    "type" : "owl:Class"
  }, {
    "id" : "329",
    "type" : "owl:Class"
  }, {
    "id" : "523",
    "type" : "owl:Class"
  }, {
    "id" : "482",
    "type" : "owl:Class"
  }, {
    "id" : "259",
    "type" : "owl:Class"
  }, {
    "id" : "40",
    "type" : "owl:Class"
  }, {
    "id" : "544",
    "type" : "owl:Class"
  }, {
    "id" : "76",
    "type" : "owl:Class"
  }, {
    "id" : "117",
    "type" : "owl:Class"
  }, {
    "id" : "331",
    "type" : "owl:Class"
  }, {
    "id" : "112",
    "type" : "owl:Class"
  }, {
    "id" : "31",
    "type" : "owl:Class"
  }, {
    "id" : "509",
    "type" : "owl:Class"
  }, {
    "id" : "581",
    "type" : "owl:Class"
  }, {
    "id" : "9",
    "type" : "owl:Class"
  }, {
    "id" : "155",
    "type" : "owl:Class"
  }, {
    "id" : "78",
    "type" : "owl:Class"
  }, {
    "id" : "96",
    "type" : "owl:Class"
  }, {
    "id" : "314",
    "type" : "owl:Class"
  }, {
    "id" : "185",
    "type" : "owl:Class"
  }, {
    "id" : "506",
    "type" : "owl:Class"
  }, {
    "id" : "352",
    "type" : "owl:Class"
  }, {
    "id" : "349",
    "type" : "owl:Class"
  }, {
    "id" : "242",
    "type" : "owl:Class"
  }, {
    "id" : "190",
    "type" : "owl:Class"
  }, {
    "id" : "124",
    "type" : "owl:Class"
  }, {
    "id" : "26",
    "type" : "owl:Class"
  }, {
    "id" : "229",
    "type" : "owl:Class"
  }, {
    "id" : "74",
    "type" : "owl:Class"
  }, {
    "id" : "102",
    "type" : "owl:Class"
  }, {
    "id" : "135",
    "type" : "owl:Class"
  }, {
    "id" : "35",
    "type" : "owl:Class"
  }, {
    "id" : "226",
    "type" : "owl:Class"
  }, {
    "id" : "223",
    "type" : "owl:Class"
  }, {
    "id" : "316",
    "type" : "owl:Class"
  }, {
    "id" : "354",
    "type" : "owl:Class"
  }, {
    "id" : "659",
    "type" : "owl:Class"
  }, {
    "id" : "186",
    "type" : "owl:Class"
  }, {
    "id" : "53",
    "type" : "owl:Class"
  }, {
    "id" : "56",
    "type" : "owl:Class"
  }, {
    "id" : "239",
    "type" : "owl:Class"
  }, {
    "id" : "250",
    "type" : "owl:Class"
  }, {
    "id" : "327",
    "type" : "owl:Class"
  }, {
    "id" : "382",
    "type" : "owl:Class"
  }, {
    "id" : "133",
    "type" : "owl:Class"
  }, {
    "id" : "115",
    "type" : "owl:Class"
  }, {
    "id" : "361",
    "type" : "owl:Class"
  }, {
    "id" : "209",
    "type" : "owl:Class"
  }, {
    "id" : "340",
    "type" : "owl:Class"
  }, {
    "id" : "54",
    "type" : "owl:Class"
  }, {
    "id" : "62",
    "type" : "owl:Class"
  }, {
    "id" : "110",
    "type" : "owl:Class"
  }, {
    "id" : "86",
    "type" : "owl:Class"
  }, {
    "id" : "159",
    "type" : "owl:Class"
  }, {
    "id" : "89",
    "type" : "owl:Class"
  }, {
    "id" : "671",
    "type" : "owl:Class"
  }, {
    "id" : "29",
    "type" : "owl:Class"
  }, {
    "id" : "543",
    "type" : "owl:Class"
  }, {
    "id" : "151",
    "type" : "owl:Class"
  }, {
    "id" : "604",
    "type" : "owl:Class"
  }, {
    "id" : "486",
    "type" : "owl:Class"
  }, {
    "id" : "593",
    "type" : "owl:Class"
  }, {
    "id" : "231",
    "type" : "owl:Class"
  }, {
    "id" : "157",
    "type" : "owl:Class"
  }, {
    "id" : "566",
    "type" : "owl:Class"
  } ],
  "classAttribute" : [ {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Shipper",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Consignor",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "Shipper",
      "en" : "Shipper"
    },
    "comment" : {
      "en" : "The party that tenders goods for carriage and is named as such on the airway bill."
    },
    "id" : "6",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LiftingEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LiftingEquipment",
      "en" : "Lifting Equipment"
    },
    "comment" : {
      "en" : "Equipment that assists with loading and unloading cargo or baggage."
    },
    "id" : "14",
    "superClasses" : [ "15" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DirectFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "editorialNote" : [ {
        "identifier" : "editorialNote",
        "language" : "en",
        "value" : "In airline usage a 'direct' flight may stop en route under one flight number; this class follows the non-stop meaning.",
        "type" : "label"
      } ],
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Non-stop Flight",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "DirectFlight",
      "en" : "Direct Flight"
    },
    "intersection" : [ "21" ],
    "comment" : {
      "en" : "A flight that travels from origin to destination without stopovers."
    },
    "attributes" : [ "intersection" ],
    "id" : "20",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ShipmentException",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ShipmentException",
      "en" : "Shipment Exception"
    },
    "subClasses" : [ "32", "33", "34", "35" ],
    "comment" : {
      "en" : "An unplanned event that interrupts the normal handling of a shipment."
    },
    "id" : "30",
    "superClasses" : [ "31" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Agent",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Agent",
      "en" : "Agent"
    },
    "subClasses" : [ "6", "52", "53", "54", "55", "56", "57" ],
    "comment" : {
      "en" : "An entity capable of acting within the air transport domain, either an organization or a person."
    },
    "id" : "7"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CateringService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CateringService",
      "en" : "Catering Service"
    },
    "comment" : {
      "en" : "The provision and loading of food and beverages onto an aircraft."
    },
    "id" : "61",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DispatchSchedule",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "DispatchSchedule",
      "en" : "Dispatch Schedule"
    },
    "comment" : {
      "en" : "The planned timing for shipping goods from the origin."
    },
    "id" : "63",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Aerodrome",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Aerodrome",
      "en" : "Aerodrome"
    },
    "subClasses" : [ "29" ],
    "comment" : {
      "en" : "A defined area on land or water (including any buildings, installations and equipment) intended to be used wholly or in part for the arrival, departure and surface movement of aircraft (ICAO Annex 14). Airport is a kind of aerodrome."
    },
    "id" : "65",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BondedArea",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BondedArea",
      "en" : "Bonded Area"
    },
    "comment" : {
      "en" : "A secure zone authorised for storing cargo without paying duties until customs clearance."
    },
    "id" : "69",
    "superClasses" : [ "70" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftManufacturer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftManufacturer",
      "en" : "Aircraft Manufacturer"
    },
    "comment" : {
      "en" : "An organization that designs and manufactures aircraft or aircraft components."
    },
    "id" : "79",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LooseLoading",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LooseLoading",
      "en" : "Loose Loading"
    },
    "comment" : {
      "en" : "The direct loading of cargo into trucks without using ULDs."
    },
    "id" : "92",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#OperationsManual",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "OperationsManual",
      "en" : "Operations Manual"
    },
    "comment" : {
      "en" : "A manual, approved by the regulator, describing an operator's procedures for the safe conduct of operations."
    },
    "id" : "116",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Flight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Flight",
      "en" : "Flight"
    },
    "subClasses" : [ "20", "94", "98", "102", "106", "110" ],
    "comment" : {
      "en" : "A single journey (leg) of an aircraft from a departure aerodrome to an arrival aerodrome, whether scheduled or not."
    },
    "id" : "21",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MROOrganization",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "MRO",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "MROOrganization",
      "en" : "MRO Organization"
    },
    "comment" : {
      "en" : "An organization approved to perform aircraft Maintenance, Repair, and Overhaul (MRO)."
    },
    "id" : "119",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundPersonnel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "GroundPersonnel",
      "en" : "Ground Personnel"
    },
    "subClasses" : [ "72", "76", "1" ],
    "comment" : {
      "en" : "Staff who perform operational duties on the ground rather than aboard an aircraft."
    },
    "id" : "2",
    "superClasses" : [ "55" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Invoice",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Invoice",
      "en" : "Invoice"
    },
    "comment" : {
      "en" : "A commercial document stating the value of the goods and transaction details."
    },
    "id" : "122",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CertificateOfAirworthiness",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "CofA",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "CertificateOfAirworthiness",
      "en" : "Certificate of Airworthiness"
    },
    "comment" : {
      "en" : "A certificate confirming that an aircraft conforms to its approved design and is safe for operation."
    },
    "id" : "123",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#NonCommercialOperation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "NonCommercialOperation",
      "en" : "Non-Commercial Operation"
    },
    "comment" : {
      "en" : "An aircraft operation other than commercial air transport, not undertaken for remuneration or hire."
    },
    "id" : "162",
    "superClasses" : [ "163" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AviationPolicy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AviationPolicy",
      "en" : "Aviation Policy"
    },
    "comment" : {
      "en" : "Policies and regulations that govern the safety, security, environmental standards, and operations of the aviation industry at a national or international level."
    },
    "id" : "164",
    "superClasses" : [ "165" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TAF",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Terminal Aerodrome Forecast",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "TAF",
      "en" : "TAF"
    },
    "comment" : {
      "en" : "A coded aerodrome weather forecast used in aviation."
    },
    "id" : "166",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ControlTower",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ControlTower",
      "en" : "Control Tower"
    },
    "comment" : {
      "en" : "An airport facility from which air traffic controllers direct aircraft movement on the ground and in the air near the airport."
    },
    "id" : "167",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "AWB",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirwayBill",
      "en" : "Airway Bill"
    },
    "subClasses" : [ "9", "17" ],
    "comment" : {
      "en" : "A document that acts as a contract of carriage between the shipper and airline."
    },
    "id" : "10",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsPermit",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsPermit",
      "en" : "Customs Permit"
    },
    "comment" : {
      "en" : "Official authorisation granted by customs to allow export or import of cargo."
    },
    "id" : "173",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Commander",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Commander",
      "en" : "Commander"
    },
    "comment" : {
      "en" : "The crew member vested with command authority and overall responsibility for the safe conduct of the flight."
    },
    "id" : "174",
    "superClasses" : [ "175" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MasterMinimumEquipmentList",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "MMEL",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "MasterMinimumEquipmentList",
      "en" : "Master Minimum Equipment List"
    },
    "comment" : {
      "en" : "The baseline list, approved for an aircraft type, from which an operator's Minimum Equipment List is derived."
    },
    "id" : "176",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SortationSystem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SortationSystem",
      "en" : "Sortation System"
    },
    "comment" : {
      "en" : "Automated infrastructure that routes shipments to their correct destination within a facility."
    },
    "id" : "210",
    "superClasses" : [ "201" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightCost",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightCost",
      "en" : "Flight Cost"
    },
    "comment" : {
      "en" : "The financial cost associated with operating a flight."
    },
    "id" : "217",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BaseMaintenance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BaseMaintenance",
      "en" : "Base Maintenance"
    },
    "comment" : {
      "en" : "More extensive scheduled maintenance performed at a maintenance base, typically involving hangar time."
    },
    "id" : "219",
    "superClasses" : [ "121" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AutomaticScanning",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AutomaticScanning",
      "en" : "Automatic Scanning"
    },
    "comment" : {
      "en" : "Automated barcode or airway bill scanning as part of screening."
    },
    "id" : "220",
    "superClasses" : [ "221" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TomographyMachine",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TomographyMachine",
      "en" : "Tomography Machine"
    },
    "comment" : {
      "en" : "3D X-ray computed tomography screening equipment used for advanced security inspection."
    },
    "id" : "51",
    "superClasses" : [ "47" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#OperationalDisruption",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "OperationalDisruption",
      "en" : "Operational Disruption"
    },
    "subClasses" : [ "23" ],
    "comment" : {
      "en" : "An unexpected disruption to planned operations."
    },
    "id" : "24",
    "superClasses" : [ "31" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirportOperationsCentre",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "APOC",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirportOperationsCentre",
      "en" : "Airport Operations Centre"
    },
    "comment" : {
      "en" : "A centralised facility from which airport stakeholders jointly monitor and manage day-to-day airport operations."
    },
    "id" : "237",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Helicopter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Helicopter",
      "en" : "Helicopter"
    },
    "comment" : {
      "en" : "A rotorcraft that derives lift and propulsion from horizontally spinning rotors, used for passenger, cargo, or specialised operations."
    },
    "id" : "19",
    "superClasses" : [ "13" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CateringCompany",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CateringCompany",
      "en" : "Catering Company"
    },
    "comment" : {
      "en" : "A company that prepares and supplies food and beverages for flights."
    },
    "id" : "153",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Cargo",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Cargo",
      "en" : "Cargo"
    },
    "subClasses" : [ "37", "42" ],
    "comment" : {
      "en" : "Goods or merchandise transported in an aircraft."
    },
    "id" : "38",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MonitorService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MonitorService",
      "en" : "Monitor Service"
    },
    "comment" : {
      "en" : "A service that monitors current airport or flight operations in real time."
    },
    "id" : "28",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ImportCustomsClearance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ImportCustomsClearance",
      "en" : "Import Customs Clearance"
    },
    "comment" : {
      "en" : "Customs clearance conducted for goods entering the destination country."
    },
    "id" : "241",
    "superClasses" : [ "242" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ScreeningEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ScreeningEquipment",
      "en" : "Screening Equipment"
    },
    "subClasses" : [ "46", "51", "246" ],
    "comment" : {
      "en" : "Equipment used to inspect passengers, baggage, or cargo for prohibited or dangerous items."
    },
    "id" : "47",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LeasedAircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LeasedAircraft",
      "en" : "Leased Aircraft"
    },
    "intersection" : [ "13" ],
    "comment" : {
      "en" : "Defined class: any aircraft operated under a lease agreement. Membership is inferred by the reasoner."
    },
    "attributes" : [ "intersection" ],
    "id" : "255"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AerodromeService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AerodromeService",
      "en" : "Aerodrome Service"
    },
    "comment" : {
      "en" : "A service provided at an aerodrome to support aircraft operations."
    },
    "id" : "260",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#OperationalData",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "OperationalData",
      "en" : "Operational Data"
    },
    "comment" : {
      "en" : "Data describing the current or historical state of airport or flight operations."
    },
    "id" : "283",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ManageService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ManageService",
      "en" : "Manage Service"
    },
    "comment" : {
      "en" : "A service that supports the active management of airport or flight operations."
    },
    "id" : "288",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TechnicalCrew",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TechnicalCrew",
      "en" : "Technical Crew"
    },
    "comment" : {
      "en" : "Crew members responsible for technical/engineering duties during a flight."
    },
    "id" : "291",
    "superClasses" : [ "226" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsException",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsException",
      "en" : "Customs Exception"
    },
    "comment" : {
      "en" : "A customs-related exception encountered during shipment handling."
    },
    "id" : "33",
    "superClasses" : [ "30" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ChargingPoint",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ChargingPoint",
      "en" : "Charging Point"
    },
    "comment" : {
      "en" : "An individual connection point at a charging station used to charge a vehicle or aircraft."
    },
    "id" : "192",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#KPI",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "KPI",
      "en" : "KPI"
    },
    "comment" : {
      "en" : "A Key Performance Indicator used to measure airport or airline operational performance."
    },
    "id" : "293",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PackingList",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PackingList",
      "en" : "Packing List"
    },
    "comment" : {
      "en" : "A detailed list of the contents of the shipment."
    },
    "id" : "295",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ExtendableConveyor",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ExtendableConveyor",
      "en" : "Extendable Conveyor"
    },
    "comment" : {
      "en" : "An extending conveyor used to load or unload cargo directly into or from a truck."
    },
    "id" : "308",
    "superClasses" : [ "15" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#InformationObject",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "InformationObject",
      "en" : "Information Object"
    },
    "subClasses" : [ "311", "172", "63", "283", "312", "313", "252", "314", "165", "117" ],
    "comment" : {
      "en" : "A document, record, code, message, or digital artefact that carries information within air transport operations."
    },
    "id" : "64"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ExceptionRecord",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ExceptionRecord",
      "en" : "Exception Record"
    },
    "comment" : {
      "en" : "A record of a shipment exception raised during handling."
    },
    "id" : "254",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EnergySource",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EnergySource",
      "en" : "Energy Source"
    },
    "subClasses" : [ "349" ],
    "comment" : {
      "en" : "A classification of the type of energy used to power an aircraft or ground equipment (e.g. jet fuel, electricity, sustainable aviation fuel)."
    },
    "id" : "271",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#RoutingInstruction",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "RoutingInstruction",
      "en" : "Routing Instruction"
    },
    "comment" : {
      "en" : "Routing information used to direct a shipment through a sortation system."
    },
    "id" : "264",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Airspace",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Airspace",
      "en" : "Airspace"
    },
    "subClasses" : [ "353", "354" ],
    "comment" : {
      "en" : "A defined three-dimensional portion of the atmosphere within which specific rules or air traffic services apply."
    },
    "id" : "351",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirNavigationFacility",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirNavigationFacility",
      "en" : "Air Navigation Facility"
    },
    "comment" : {
      "en" : "A facility that provides navigation aids or communication services in support of air navigation."
    },
    "id" : "355",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirTrafficControl",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ATC",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirTrafficControl",
      "en" : "Air Traffic Control"
    },
    "comment" : {
      "en" : "The service provided to manage aircraft movement in airspace and on the ground at an airport, in order to prevent collisions and expedite traffic."
    },
    "id" : "356",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TrainingProgramme",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TrainingProgramme",
      "en" : "Training Programme"
    },
    "comment" : {
      "en" : "A structured programme of instruction for personnel."
    },
    "id" : "150",
    "superClasses" : [ "151" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirNetwork",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirNetwork",
      "en" : "Air Network"
    },
    "comment" : {
      "en" : "The interconnected system of air routes, flights, and airports."
    },
    "id" : "297",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirTrafficController",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ATCO",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirTrafficController",
      "en" : "Air Traffic Controller"
    },
    "comment" : {
      "en" : "A licensed person who provides air traffic control services to manage aircraft movement in the air and on the ground."
    },
    "id" : "389",
    "superClasses" : [ "55" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CommercialAirTransportOperation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CommercialAirTransportOperation",
      "en" : "Commercial Air Transport Operation"
    },
    "comment" : {
      "en" : "An aircraft operation involving the transport of passengers, cargo, or mail for remuneration or hire."
    },
    "id" : "335",
    "superClasses" : [ "163" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TrainingFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TrainingFlight",
      "en" : "Training Flight"
    },
    "comment" : {
      "en" : "A flight conducted for the purpose of crew training."
    },
    "id" : "94",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DangerousGoods",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "DG",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "DangerousGoods",
      "en" : "Dangerous Goods"
    },
    "intersection" : [ "38" ],
    "comment" : {
      "en" : "Items classified as hazardous for air transport, requiring special handling and labelling."
    },
    "attributes" : [ "intersection" ],
    "id" : "42",
    "superClasses" : [ "38" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Taxiway",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Taxiway",
      "en" : "Taxiway"
    },
    "comment" : {
      "en" : "A defined path at an airport on which aircraft taxi between the runway and other airport facilities."
    },
    "id" : "333",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EnergyUnit",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EnergyUnit",
      "en" : "Energy Unit"
    },
    "comment" : {
      "en" : "A quantity of energy consumed, expressed in a defined unit (e.g. litres of fuel, kWh)."
    },
    "id" : "282",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BaggageHandling",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BaggageHandling",
      "en" : "Baggage Handling"
    },
    "comment" : {
      "en" : "The loading, unloading, and sorting of passenger baggage."
    },
    "id" : "181",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoType",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoType",
      "en" : "Cargo Type"
    },
    "individuals" : [ {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DangerousGoodsCargoType",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "comment" : {
        "en" : "The cargo-type value for goods classified as dangerous under the ICAO Technical Instructions / IATA DGR."
      },
      "labels" : {
        "IRI-based" : "DangerousGoodsCargoType",
        "en" : "Dangerous goods (cargo type)"
      }
    } ],
    "comment" : {
      "en" : "The classification of cargo based on content and handling needs."
    },
    "id" : "287",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsAuthority",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsAuthority",
      "en" : "Customs Authority"
    },
    "comment" : {
      "en" : "A government agency responsible for controlling the flow of goods, including cargo, into and out of a country."
    },
    "id" : "245",
    "superClasses" : [ "113" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Parcel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Parcel",
      "en" : "Parcel"
    },
    "subClasses" : [ "331" ],
    "comment" : {
      "en" : "An individual shipment."
    },
    "id" : "37",
    "superClasses" : [ "38" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightOperation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightOperation",
      "en" : "Flight Operation"
    },
    "union" : [ "335", "338", "162" ],
    "subClasses" : [ "335", "338", "162" ],
    "comment" : {
      "en" : "The conduct of a flight or series of flights under a defined operational category."
    },
    "attributes" : [ "union" ],
    "id" : "163",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Measurement",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Measurement",
      "en" : "Measurement"
    },
    "subClasses" : [ "282", "348", "305", "217", "316", "293", "325" ],
    "comment" : {
      "en" : "A quantity, metric, classification, or measured/assigned value used in air transport operations."
    },
    "id" : "218"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Runway",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Runway",
      "en" : "Runway"
    },
    "comment" : {
      "en" : "A strip of land at an airport on which aircraft can take off and land."
    },
    "id" : "318",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Consignment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Consignment",
      "en" : "Consignment"
    },
    "comment" : {
      "en" : "A shipment of one or more cargo items tendered by one shipper and transported under one air waybill. A consignment is an aggregate of cargo items, not itself a cargo item."
    },
    "id" : "169",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Takeoff",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Takeoff",
      "en" : "Takeoff"
    },
    "comment" : {
      "en" : "The phase in which an aircraft transitions from ground movement to flight."
    },
    "id" : "126",
    "superClasses" : [ "83" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MaintenanceCheckFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MaintenanceCheckFlight",
      "en" : "Maintenance Check Flight"
    },
    "comment" : {
      "en" : "A flight conducted to verify aircraft airworthiness following maintenance."
    },
    "id" : "98",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CheckInCounter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CheckInCounter",
      "en" : "Check-In Counter"
    },
    "comment" : {
      "en" : "A location at an airport where passengers confirm their presence for a flight."
    },
    "id" : "364",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Warehouse",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Warehouse",
      "en" : "Warehouse"
    },
    "subClasses" : [ "70", "274", "278" ],
    "comment" : {
      "en" : "A facility for storing goods before or after transportation."
    },
    "id" : "269",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsClearanceAgency",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsClearanceAgency",
      "en" : "Customs Clearance Agency"
    },
    "comment" : {
      "en" : "An authorised service provider responsible for processing customs declarations."
    },
    "id" : "131",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FareClass",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FareClass",
      "en" : "Fare Class"
    },
    "comment" : {
      "en" : "A booking code representing a specific fare and set of conditions within a passenger class."
    },
    "id" : "276",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ArrivalGate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ArrivalGate",
      "en" : "Arrival Gate"
    },
    "comment" : {
      "en" : "An area where passengers disembark from an aircraft."
    },
    "id" : "346",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MaintenanceActivity",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MaintenanceActivity",
      "en" : "Maintenance Activity"
    },
    "subClasses" : [ "285", "290", "219", "248" ],
    "comment" : {
      "en" : "An activity performed to inspect, service, or repair an aircraft or its components."
    },
    "id" : "121",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Identifier",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Identifier",
      "en" : "Identifier"
    },
    "subClasses" : [ "60", "257" ],
    "comment" : {
      "en" : "A code or designator that uniquely identifies an entity within an identification scheme (e.g. IATA or ICAO codes)."
    },
    "id" : "252",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#InsuranceProvider",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "InsuranceProvider",
      "en" : "Insurance Provider"
    },
    "comment" : {
      "en" : "An organization that provides insurance cover for aircraft, cargo, or aviation liability."
    },
    "id" : "194",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Label",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Label",
      "en" : "Label"
    },
    "comment" : {
      "en" : "A tag placed on cargo to identify flight, destination, and handling instructions."
    },
    "id" : "233",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PackingCompany",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PackingCompany",
      "en" : "Packing Company"
    },
    "comment" : {
      "en" : "A service provider responsible for securely packing cargo before shipment."
    },
    "id" : "212",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#NoiseRegulation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "NoiseRegulation",
      "en" : "Noise Regulation"
    },
    "comment" : {
      "en" : "A regulation restricting or managing aircraft noise, particularly around airports."
    },
    "id" : "375",
    "superClasses" : [ "376" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#OperationalControlSystem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "OperationalControlSystem",
      "en" : "Operational Control System"
    },
    "comment" : {
      "en" : "A system used by an operator to exercise control over the initiation, continuation, diversion, or termination of a flight."
    },
    "id" : "312",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#METAR",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "METAR",
      "en" : "METAR"
    },
    "comment" : {
      "en" : "A routine, coded surface weather observation report used in aviation."
    },
    "id" : "454",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirOperatorCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "AOC",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirOperatorCertificate",
      "en" : "Air Operator Certificate"
    },
    "comment" : {
      "en" : "A certificate issued by a competent authority confirming an operator's capability to conduct specified aircraft operations."
    },
    "id" : "410",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoHandlingEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoHandlingEquipment",
      "en" : "Cargo Handling Equipment"
    },
    "subClasses" : [ "262", "266", "210", "231" ],
    "comment" : {
      "en" : "Equipment used to move, sort, or consolidate cargo within a handling facility."
    },
    "id" : "201",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Slot",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Slot",
      "en" : "Slot"
    },
    "comment" : {
      "en" : "An authorisation to use the full range of airport infrastructure necessary to arrive or depart at an airport on a specific date and time."
    },
    "id" : "172",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SafetyManagementSystem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "SMS",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "SafetyManagementSystem",
      "en" : "Safety Management System"
    },
    "comment" : {
      "en" : "A systematic approach to managing safety, including the necessary organisational structures, accountabilities, policies, and procedures."
    },
    "id" : "458",
    "superClasses" : [ "165" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Accident",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Accident",
      "en" : "Accident"
    },
    "comment" : {
      "en" : "An occurrence involving an aircraft resulting in death, serious injury, or significant aircraft damage."
    },
    "id" : "147",
    "superClasses" : [ "148" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TransitFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TransitFlight",
      "en" : "Transit Flight"
    },
    "intersection" : [ "21" ],
    "comment" : {
      "en" : "A flight that includes one or more stops before reaching the final destination."
    },
    "attributes" : [ "intersection" ],
    "id" : "106",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#RoutingException",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "RoutingException",
      "en" : "Routing Exception"
    },
    "comment" : {
      "en" : "A routing-related exception encountered during shipment handling."
    },
    "id" : "34",
    "superClasses" : [ "30" ]
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#decimal",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "476",
    "label" : {
      "IRI-based" : "decimal"
    }
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsWarehouse",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsWarehouse",
      "en" : "Customs Warehouse"
    },
    "subClasses" : [ "69" ],
    "comment" : {
      "en" : "An authorised location for storing cargo awaiting customs clearance."
    },
    "id" : "70",
    "superClasses" : [ "269" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CutTime",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CutTime",
      "en" : "Cut Time"
    },
    "comment" : {
      "en" : "The latest time by which cargo must be delivered to the airline for loading onto a scheduled flight."
    },
    "id" : "325",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#StorageShed",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Airside Storage Shed",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "StorageShed",
      "en" : "Storage Shed"
    },
    "comment" : {
      "en" : "A bonded holding area at the airport for cargo before loading or after unloading."
    },
    "id" : "278",
    "superClasses" : [ "269" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#RoadNetwork",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "RoadNetwork",
      "en" : "Road Network"
    },
    "comment" : {
      "en" : "The interconnected system of road routes and road vehicles."
    },
    "id" : "298",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MultimodalLink",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MultimodalLink",
      "en" : "Multimodal Link"
    },
    "comment" : {
      "en" : "A connection point between air and road (or other) transport systems."
    },
    "id" : "494",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightDiversion",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightDiversion",
      "en" : "Flight Diversion"
    },
    "comment" : {
      "en" : "A flight diverted from its planned destination."
    },
    "id" : "23",
    "superClasses" : [ "24" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirNavigationServiceProvider",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ANSP",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirNavigationServiceProvider",
      "en" : "Air Navigation Service Provider"
    },
    "comment" : {
      "en" : "An organization that provides air traffic management and air navigation services within a defined airspace."
    },
    "id" : "143",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SpiralChute",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SpiralChute",
      "en" : "Spiral Chute"
    },
    "comment" : {
      "en" : "A destination-specific chute used to route sorted shipments."
    },
    "id" : "262",
    "superClasses" : [ "201" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ShippingInstruction",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "SI",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "ShippingInstruction",
      "en" : "Shipping Instruction"
    },
    "comment" : {
      "en" : "A document outlining the exporter's request to arrange shipment."
    },
    "id" : "518",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Scanner",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Scanner",
      "en" : "Scanner"
    },
    "comment" : {
      "en" : "A device that reads shipment identifiers such as barcodes or airway bill numbers."
    },
    "id" : "266",
    "superClasses" : [ "201" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DeBagging",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "DeBagging",
      "en" : "De-Bagging"
    },
    "comment" : {
      "en" : "The removal of parcels from transport bags."
    },
    "id" : "108",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#NOTAM",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "NOTAM",
      "en" : "NOTAM"
    },
    "comment" : {
      "en" : "A Notice to Airmen, distributed to alert pilots of potential hazards or changes to facilities, services, or procedures."
    },
    "id" : "536",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Process",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Process",
      "en" : "Process"
    },
    "subClasses" : [ "31", "242", "83", "121", "221", "543", "21", "151", "163", "356", "544", "68", "62" ],
    "comment" : {
      "en" : "An activity, operation, or event that occurs over time within air transport operations."
    },
    "id" : "118"
  }, {
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "baseIri" : "http://owl2vowl.de",
    "id" : "440",
    "label" : {
      "undefined" : "Thing"
    }
  }, {
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "baseIri" : "http://owl2vowl.de",
    "id" : "415",
    "label" : {
      "undefined" : "Thing"
    }
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EDISystem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EDISystem",
      "en" : "EDI System"
    },
    "comment" : {
      "en" : "An Electronic Data Interchange system used to submit shipping documents digitally."
    },
    "id" : "313",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftType",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftType",
      "en" : "Aircraft Type"
    },
    "comment" : {
      "en" : "The certificated type/model classification of an aircraft (e.g. Boeing 777, Airbus A320)."
    },
    "id" : "280",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Route",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Route",
      "en" : "Route"
    },
    "comment" : {
      "en" : "A designated air corridor between two airports."
    },
    "id" : "527",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundHandlingAgent",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "GroundHandlingAgent",
      "en" : "Ground Handling Agent"
    },
    "comment" : {
      "en" : "A company contracted to provide ground handling services (baggage, ramp, catering, etc.) to airlines at an airport."
    },
    "id" : "206",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BoardingPass",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BoardingPass",
      "en" : "Boarding Pass"
    },
    "comment" : {
      "en" : "A document provided to a passenger to access the aircraft."
    },
    "id" : "555",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftMaintenanceCheck",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftMaintenanceCheck",
      "en" : "Aircraft Maintenance Check"
    },
    "comment" : {
      "en" : "A scheduled inspection of an aircraft carried out at defined intervals (e.g. A, B, C, or D check)."
    },
    "id" : "290",
    "superClasses" : [ "121" ]
  }, {
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "baseIri" : "http://owl2vowl.de",
    "id" : "59",
    "label" : {
      "undefined" : "Thing"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#boolean",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "535",
    "label" : {
      "IRI-based" : "boolean"
    }
  }, {
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "baseIri" : "http://owl2vowl.de",
    "id" : "499",
    "label" : {
      "undefined" : "Thing"
    }
  }, {
    "iri" : "http://www.w3.org/2002/07/owl#Thing",
    "baseIri" : "http://owl2vowl.de",
    "id" : "557",
    "label" : {
      "undefined" : "Thing"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "496",
    "label" : {
      "IRI-based" : "dateTime"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "560",
    "label" : {
      "IRI-based" : "dateTime"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#decimal",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "561",
    "label" : {
      "IRI-based" : "decimal"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "562",
    "label" : {
      "IRI-based" : "dateTime"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#string",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "391",
    "label" : {
      "IRI-based" : "string"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#string",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "548",
    "label" : {
      "IRI-based" : "string"
    }
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Marshalling",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Marshalling",
      "en" : "Marshalling"
    },
    "comment" : {
      "en" : "The visual guidance of an aircraft during taxiing, parking, or pushback by ground staff."
    },
    "id" : "141",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Offloading",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Offloading",
      "en" : "Offloading"
    },
    "comment" : {
      "en" : "The removal of cargo or ULDs from an aircraft."
    },
    "id" : "67",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Sortation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Sortation",
      "en" : "Sortation"
    },
    "comment" : {
      "en" : "The automated routing of shipments through a handling facility."
    },
    "id" : "100",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#string",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "422",
    "label" : {
      "IRI-based" : "string"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#decimal",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "568",
    "label" : {
      "IRI-based" : "decimal"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#decimal",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "456",
    "label" : {
      "IRI-based" : "decimal"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#string",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "564",
    "label" : {
      "IRI-based" : "string"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#dateTime",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "569",
    "label" : {
      "IRI-based" : "dateTime"
    }
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirShipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirShipment",
      "en" : "Air Shipment"
    },
    "comment" : {
      "en" : "A mode of cargo transportation using aircraft, known for speed and suitability for high-value or time-sensitive goods."
    },
    "id" : "208",
    "superClasses" : [ "209" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Terminal",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Terminal",
      "en" : "Terminal"
    },
    "comment" : {
      "en" : "A building at an airport where passengers transfer between ground transport and their aircraft."
    },
    "id" : "385",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightCrew",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightCrew",
      "en" : "Flight Crew"
    },
    "subClasses" : [ "509", "174", "488" ],
    "comment" : {
      "en" : "Personnel responsible for operating the aircraft."
    },
    "id" : "175",
    "superClasses" : [ "226" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Person",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Person",
      "en" : "Person"
    },
    "subClasses" : [ "2", "226", "530", "389", "501" ],
    "comment" : {
      "en" : "An individual human being."
    },
    "id" : "55",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SecurityScreening",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SecurityScreening",
      "en" : "Security Screening"
    },
    "subClasses" : [ "220", "329", "573", "465" ],
    "comment" : {
      "en" : "A process to inspect passengers, baggage, or cargo before boarding or onward transport."
    },
    "id" : "221",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PolicyOrRegulation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PolicyOrRegulation",
      "en" : "Policy or Regulation"
    },
    "subClasses" : [ "458", "579", "164", "376", "566" ],
    "comment" : {
      "en" : "A rule, standard, directive, or regulatory instrument governing air transport."
    },
    "id" : "165",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Capacity",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Capacity",
      "en" : "Capacity"
    },
    "comment" : {
      "en" : "The maximum throughput of an airport resource (e.g. runway, terminal, apron) in a given period."
    },
    "id" : "348",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#XRayMachine",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "XRayMachine",
      "en" : "X-Ray Machine"
    },
    "comment" : {
      "en" : "Security screening equipment that uses X-rays to inspect the contents of baggage or cargo."
    },
    "id" : "46",
    "superClasses" : [ "47" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Deicing",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Deicing",
      "en" : "Deicing"
    },
    "comment" : {
      "en" : "The removal or prevention of ice and frost accumulation on an aircraft prior to departure."
    },
    "id" : "137",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CabinCrew",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CabinCrew",
      "en" : "Cabin Crew"
    },
    "comment" : {
      "en" : "Personnel responsible for passenger safety and service during a flight."
    },
    "id" : "225",
    "superClasses" : [ "226" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Service",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Service",
      "en" : "Service"
    },
    "subClasses" : [ "506", "288", "581", "582", "28", "484", "260" ],
    "comment" : {
      "en" : "A defined capability or function offered by a system, facility, or organization."
    },
    "id" : "240"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CodeShareAgreement",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CodeShareAgreement",
      "en" : "Code Share Agreement"
    },
    "comment" : {
      "en" : "An agreement under which two or more airlines share the same flight, each marketing it under its own designator code."
    },
    "id" : "583",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#HeldShipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "HeldShipment",
      "en" : "Held Shipment"
    },
    "comment" : {
      "en" : "A shipment held pending resolution of an exception."
    },
    "id" : "32",
    "superClasses" : [ "30" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsDeclaration",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsDeclaration",
      "en" : "Customs Declaration"
    },
    "comment" : {
      "en" : "A form listing the details of goods being transported across borders."
    },
    "id" : "405",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Passenger",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Passenger",
      "en" : "Passenger"
    },
    "comment" : {
      "en" : "An individual who travels in an aircraft but is not part of the crew."
    },
    "id" : "530",
    "superClasses" : [ "55" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ManualXRayMachine",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ManualXRayMachine",
      "en" : "Manual X-Ray Machine"
    },
    "comment" : {
      "en" : "A manually operated X-ray machine used for security screening."
    },
    "id" : "246",
    "superClasses" : [ "47" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundSupportEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "GSE",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "GroundSupportEquipment",
      "en" : "Ground Support Equipment"
    },
    "subClasses" : [ "14", "308" ],
    "comment" : {
      "en" : "Vehicles and equipment used to service aircraft while on the ground."
    },
    "id" : "15",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MasterAirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "MAWB",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "MasterAirwayBill",
      "en" : "Master Airway Bill"
    },
    "comment" : {
      "en" : "A shipment document issued by the airline to the freight forwarder for consolidated cargo."
    },
    "id" : "17",
    "superClasses" : [ "10" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ManualScanning",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ManualScanning",
      "en" : "Manual Scanning"
    },
    "comment" : {
      "en" : "Manual scanning of a shipment identifier by an operator."
    },
    "id" : "465",
    "superClasses" : [ "221" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Licence",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "License",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "Licence",
      "en" : "Licence"
    },
    "subClasses" : [ "444" ],
    "comment" : {
      "en" : "A certificate issued to a person authorising them to exercise specified privileges (e.g. pilot, ATCO or engineer licence)."
    },
    "id" : "418",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LineMaintenance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LineMaintenance",
      "en" : "Line Maintenance"
    },
    "comment" : {
      "en" : "Routine maintenance performed on an aircraft between flights, typically at an airport."
    },
    "id" : "285",
    "superClasses" : [ "121" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Approach",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Approach",
      "en" : "Approach"
    },
    "comment" : {
      "en" : "The phase of flight in which an aircraft descends and manoeuvres to land."
    },
    "id" : "161",
    "superClasses" : [ "83" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Organization",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Organization",
      "en" : "Organization"
    },
    "subClasses" : [ "79", "183", "112", "190", "194", "153", "113", "119", "206", "212", "216", "179", "131", "135", "139", "143" ],
    "comment" : {
      "en" : "A formally structured group that acts as a single entity within air transport."
    },
    "id" : "57",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FreightForwarder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FreightForwarder",
      "en" : "Freight Forwarder"
    },
    "comment" : {
      "en" : "A logistics service provider that arranges cargo transport, documentation, and compliance on behalf of exporters/importers."
    },
    "id" : "216",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TrainingInstructor",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TrainingInstructor",
      "en" : "Training Instructor"
    },
    "comment" : {
      "en" : "Personnel responsible for delivering training to aviation staff."
    },
    "id" : "72",
    "superClasses" : [ "2" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoTerminal",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoTerminal",
      "en" : "Cargo Terminal"
    },
    "comment" : {
      "en" : "A dedicated facility at an airport for the handling of air cargo."
    },
    "id" : "303",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SafetyIncident",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SafetyIncident",
      "en" : "Safety Incident"
    },
    "subClasses" : [ "147", "155", "157" ],
    "comment" : {
      "en" : "An occurrence involving an aircraft or aviation operation that affects or could affect safety."
    },
    "id" : "148",
    "superClasses" : [ "31" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ComponentOverhaul",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ComponentOverhaul",
      "en" : "Component Overhaul"
    },
    "comment" : {
      "en" : "The disassembly, inspection, repair, and restoration of an aircraft component to a serviceable condition."
    },
    "id" : "248",
    "superClasses" : [ "121" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FreighterAircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Cargo Aircraft",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "FreighterAircraft",
      "en" : "Freighter Aircraft"
    },
    "comment" : {
      "en" : "An aircraft designed specifically to carry freight or cargo, with no passenger cabin."
    },
    "id" : "12",
    "superClasses" : [ "13" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirWarehouse",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirWarehouse",
      "en" : "Air Warehouse"
    },
    "comment" : {
      "en" : "A storage facility at or near an airport for freight or goods."
    },
    "id" : "274",
    "superClasses" : [ "269" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LeaseAgreement",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LeaseAgreement",
      "en" : "Lease Agreement"
    },
    "comment" : {
      "en" : "A contract under which an aircraft owner grants an airline the right to operate the aircraft for a defined period."
    },
    "id" : "323",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TradeAssociation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TradeAssociation",
      "en" : "Trade Association"
    },
    "individuals" : [ {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#IATA",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "annotations" : {
        "altLabel" : [ {
          "identifier" : "altLabel",
          "language" : "en",
          "value" : "International Air Transport Association",
          "type" : "label"
        } ]
      },
      "comment" : {
        "en" : "The International Air Transport Association, the trade body for the world's airlines that sets commercial and operational industry standards. It is not a regulator."
      },
      "labels" : {
        "IRI-based" : "IATA",
        "en" : "IATA"
      }
    } ],
    "comment" : {
      "en" : "An industry body representing member organisations and setting non-binding commercial or operational standards."
    },
    "id" : "183",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightPhase",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightPhase",
      "en" : "Flight Phase"
    },
    "subClasses" : [ "159", "161", "126", "129", "82" ],
    "comment" : {
      "en" : "A distinct stage within the conduct of a flight."
    },
    "id" : "83",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Destination",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "editorialNote" : [ {
        "identifier" : "editorialNote",
        "language" : "en",
        "value" : "Deprecated in 0.2.0: origin/destination are roles a place plays for a shipment. Use hasOrigin/hasDestination pointing directly at an Aerodrome, Location or premises.",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "Destination",
      "en" : "Destination"
    },
    "comment" : {
      "en" : "The final location where a flight or cargo shipment is to be delivered."
    },
    "attributes" : [ "deprecated" ],
    "id" : "525",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ControlledAirspace",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ControlledAirspace",
      "en" : "Controlled Airspace"
    },
    "comment" : {
      "en" : "Airspace within which air traffic control service is provided to aircraft."
    },
    "id" : "353",
    "superClasses" : [ "351" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#LeasingCompany",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "LeasingCompany",
      "en" : "Leasing Company"
    },
    "comment" : {
      "en" : "An organization that owns aircraft and leases them to airlines under a lease agreement."
    },
    "id" : "179",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundTransport",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "GroundTransport",
      "en" : "Ground Transport"
    },
    "comment" : {
      "en" : "Vehicle-based transport used to move goods or passengers to/from the airport."
    },
    "id" : "214",
    "superClasses" : [ "209" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftEquipment",
      "en" : "Aircraft Equipment"
    },
    "comment" : {
      "en" : "Equipment fitted to an aircraft in accordance with its approved configuration."
    },
    "id" : "4",
    "superClasses" : [ "5" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirportOperator",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirportOperator",
      "en" : "Airport Operator"
    },
    "comment" : {
      "en" : "The organization responsible for managing and operating an airport."
    },
    "id" : "139",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoHandlingOperation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoHandlingOperation",
      "en" : "Cargo Handling Operation"
    },
    "subClasses" : [ "86", "89", "92", "96", "100", "104", "108", "67" ],
    "comment" : {
      "en" : "An operational activity performed on cargo within a handling facility."
    },
    "id" : "68",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Landing",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Landing",
      "en" : "Landing"
    },
    "comment" : {
      "en" : "The phase in which an aircraft transitions from flight to ground movement."
    },
    "id" : "82",
    "superClasses" : [ "83" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftComponent",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftComponent",
      "en" : "Aircraft Component"
    },
    "subClasses" : [ "74", "78", "4" ],
    "comment" : {
      "en" : "A part or subsystem fitted to or carried aboard an aircraft."
    },
    "id" : "5",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Baggage",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Baggage",
      "en" : "Baggage"
    },
    "comment" : {
      "en" : "Personal belongings of passengers transported separately."
    },
    "id" : "397",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PerformanceService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PerformanceService",
      "en" : "Performance Service"
    },
    "comment" : {
      "en" : "A service that measures and reports on airport or airline operational performance."
    },
    "id" : "484",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#IATACode",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "IATACode",
      "en" : "IATA Code"
    },
    "comment" : {
      "en" : "A unique 3-letter identifier for airlines and airports issued by IATA."
    },
    "id" : "257",
    "superClasses" : [ "252" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Aircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Aircraft",
      "en" : "Aircraft"
    },
    "subClasses" : [ "12", "19", "26", "40" ],
    "comment" : {
      "en" : "A vehicle capable of atmospheric flight used to transport passengers or goods."
    },
    "id" : "13",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PhysicalObject",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PhysicalObject",
      "en" : "Physical Object"
    },
    "subClasses" : [ "5", "49", "169", "186", "397", "115", "38", "13" ],
    "comment" : {
      "en" : "A material entity that occupies space, such as an aircraft, item of equipment, cargo, or piece of infrastructure."
    },
    "id" : "44"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SystemFailure",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SystemFailure",
      "en" : "System Failure"
    },
    "comment" : {
      "en" : "The failure of an operational system or piece of equipment."
    },
    "id" : "514",
    "superClasses" : [ "31" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SpecialisedOperation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SpecialisedOperation",
      "en" : "Specialised Operation"
    },
    "comment" : {
      "en" : "An aircraft operation involving specialised activities such as aerial survey, agriculture, or construction."
    },
    "id" : "338",
    "superClasses" : [ "163" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ICAOCode",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ICAOCode",
      "en" : "ICAO Code"
    },
    "comment" : {
      "en" : "A 4-letter or alphanumeric code designating airports, airlines, or aircraft, issued by ICAO."
    },
    "id" : "60",
    "superClasses" : [ "252" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#HandSearch",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "HandSearch",
      "en" : "Hand Search"
    },
    "comment" : {
      "en" : "Manual security inspection of baggage or cargo."
    },
    "id" : "573",
    "superClasses" : [ "221" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PilotLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PilotLicense",
      "en" : "Pilot License"
    },
    "comment" : {
      "en" : "A licence issued by a competent authority certifying that a pilot is qualified to act in a specified capacity."
    },
    "id" : "444",
    "superClasses" : [ "418" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SteerService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SteerService",
      "en" : "Steer Service"
    },
    "comment" : {
      "en" : "A service that supports collaborative decision-making to steer airport operations."
    },
    "id" : "582",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ChargingStation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ChargingStation",
      "en" : "Charging Station"
    },
    "comment" : {
      "en" : "A facility for charging electric ground handling equipment or electric aircraft."
    },
    "id" : "307",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightOperationsOfficer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Dispatcher",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "FlightOperationsOfficer",
      "en" : "Flight Operations Officer"
    },
    "comment" : {
      "en" : "Personnel who assist in flight planning, dispatch, and monitoring of flights."
    },
    "id" : "1",
    "superClasses" : [ "2" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Importer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Importer",
      "en" : "Importer"
    },
    "comment" : {
      "en" : "The party (person or organisation) that receives goods in the destination country after import clearance."
    },
    "id" : "52",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirportPolicy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirportPolicy",
      "en" : "Airport Policy"
    },
    "comment" : {
      "en" : "Rules and regulations governing operations at an airport."
    },
    "id" : "579",
    "superClasses" : [ "165" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TypeCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TypeCertificate",
      "en" : "Type Certificate"
    },
    "comment" : {
      "en" : "A certificate issued by a regulatory authority approving the design of an aircraft type as meeting applicable safety standards."
    },
    "id" : "480",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EnvironmentalRegulation",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EnvironmentalRegulation",
      "en" : "Environmental Regulation"
    },
    "individuals" : [ {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CORSIA",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "annotations" : {
        "altLabel" : [ {
          "identifier" : "altLabel",
          "language" : "en",
          "value" : "Carbon Offsetting and Reduction Scheme for International Aviation",
          "type" : "label"
        } ]
      },
      "comment" : {
        "en" : "The Carbon Offsetting and Reduction Scheme for International Aviation, an ICAO scheme to offset growth in international aviation CO2 emissions."
      },
      "labels" : {
        "IRI-based" : "CORSIA",
        "en" : "CORSIA"
      }
    } ],
    "subClasses" : [ "375" ],
    "comment" : {
      "en" : "A regulation governing the environmental impact of aviation operations."
    },
    "id" : "376",
    "superClasses" : [ "165" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Infrastructure",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Infrastructure",
      "en" : "Infrastructure"
    },
    "subClasses" : [ "379", "382", "385", "237", "361", "364", "269", "355", "333", "167", "340", "343", "346", "303", "307", "65", "318" ],
    "comment" : {
      "en" : "A fixed facility or structure that supports air transport operations."
    },
    "id" : "49",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CarbonEmission",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CarbonEmission",
      "en" : "Carbon Emission"
    },
    "comment" : {
      "en" : "The amount of carbon dioxide released during a flight or logistics operation."
    },
    "id" : "305",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ExportCustomsClearance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ExportCustomsClearance",
      "en" : "Export Customs Clearance"
    },
    "comment" : {
      "en" : "Customs clearance conducted for goods leaving the country of origin."
    },
    "id" : "473",
    "superClasses" : [ "242" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EmergencyEquipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EmergencyEquipment",
      "en" : "Emergency Equipment"
    },
    "comment" : {
      "en" : "Equipment carried or provided for use in an aviation emergency, such as fire suppression or evacuation equipment."
    },
    "id" : "196",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PilotInCommand",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Captain",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "PilotInCommand",
      "en" : "Pilot in Command"
    },
    "comment" : {
      "en" : "The pilot designated as being in command and responsible for the safe conduct of the flight."
    },
    "id" : "488",
    "superClasses" : [ "175" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Cruise",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Cruise",
      "en" : "Cruise"
    },
    "comment" : {
      "en" : "The phase of flight at a stable altitude and speed between climb and descent."
    },
    "id" : "129",
    "superClasses" : [ "83" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TransportBag",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TransportBag",
      "en" : "Transport Bag"
    },
    "comment" : {
      "en" : "A reusable bag used to consolidate small parcels for handling."
    },
    "id" : "204",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirDepot",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AirDepot",
      "en" : "Air Depot"
    },
    "comment" : {
      "en" : "A ground logistics depot facility associated with air cargo operations, such as a charging or staging depot."
    },
    "id" : "343",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ContainerBuildUp",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ULD Build-Up",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "ContainerBuildUp",
      "en" : "Container Build-Up"
    },
    "comment" : {
      "en" : "The consolidation of shipments into a ULD."
    },
    "id" : "104",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MaintenanceEngineer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MaintenanceEngineer",
      "en" : "Maintenance Engineer"
    },
    "comment" : {
      "en" : "A licensed person qualified to inspect, maintain, and certify aircraft airworthiness."
    },
    "id" : "501",
    "superClasses" : [ "55" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Refuelling",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Refuelling",
      "en" : "Refuelling"
    },
    "comment" : {
      "en" : "The supply of fuel to an aircraft on the ground."
    },
    "id" : "145",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DepartureGate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "DepartureGate",
      "en" : "Departure Gate"
    },
    "comment" : {
      "en" : "An airport terminal section where passengers wait before boarding."
    },
    "id" : "379",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Category",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Category",
      "en" : "Category"
    },
    "subClasses" : [ "209", "327", "271", "276", "280", "287" ],
    "comment" : {
      "en" : "A classification value or kind used to categorise other entities (e.g. aircraft type, cargo type, passenger class, energy source). Categories are not measurements: they are not quantities and carry no unit."
    },
    "id" : "272"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MinimumEquipmentList",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "MEL",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "MinimumEquipmentList",
      "en" : "Minimum Equipment List"
    },
    "comment" : {
      "en" : "A list, specific to an aircraft, of equipment that may be inoperative for dispatch under defined conditions."
    },
    "id" : "635",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#RegulatoryAuthority",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "RegulatoryAuthority",
      "en" : "Regulatory Authority"
    },
    "individuals" : [ {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ICAO",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "annotations" : {
        "altLabel" : [ {
          "identifier" : "altLabel",
          "language" : "en",
          "value" : "International Civil Aviation Organization",
          "type" : "label"
        } ]
      },
      "comment" : {
        "en" : "The International Civil Aviation Organization, a UN agency that sets global standards and recommended practices for civil aviation."
      },
      "labels" : {
        "IRI-based" : "ICAO",
        "en" : "ICAO"
      }
    }, {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FAA",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "annotations" : {
        "altLabel" : [ {
          "identifier" : "altLabel",
          "language" : "en",
          "value" : "Federal Aviation Administration",
          "type" : "label"
        } ]
      },
      "comment" : {
        "en" : "The Federal Aviation Administration, the United States' national aviation authority."
      },
      "labels" : {
        "IRI-based" : "FAA",
        "en" : "FAA"
      }
    }, {
      "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EASA",
      "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
      "annotations" : {
        "altLabel" : [ {
          "identifier" : "altLabel",
          "language" : "en",
          "value" : "European Union Aviation Safety Agency",
          "type" : "label"
        } ]
      },
      "comment" : {
        "en" : "The European Union Aviation Safety Agency, responsible for civil aviation safety regulation in the EU."
      },
      "labels" : {
        "IRI-based" : "EASA",
        "en" : "EASA"
      }
    } ],
    "subClasses" : [ "239", "245" ],
    "comment" : {
      "en" : "A governmental or international body responsible for setting and enforcing aviation rules and standards."
    },
    "id" : "113",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AircraftConfiguration",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AircraftConfiguration",
      "en" : "Aircraft Configuration"
    },
    "comment" : {
      "en" : "The specific approved configuration of an aircraft, including seating layout and fitted equipment."
    },
    "id" : "311",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ExplosiveInspection",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Explosive Trace Detection",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "ExplosiveInspection",
      "en" : "Explosive Inspection"
    },
    "comment" : {
      "en" : "A security screening process to ensure cargo does not contain explosives."
    },
    "id" : "329",
    "superClasses" : [ "221" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Origin",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "editorialNote" : [ {
        "identifier" : "editorialNote",
        "language" : "en",
        "value" : "Deprecated in 0.2.0: origin/destination are roles a place plays for a shipment. Use hasOrigin/hasDestination pointing directly at an Aerodrome, Location or premises.",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "Origin",
      "en" : "Origin"
    },
    "comment" : {
      "en" : "The starting point of a flight or cargo journey."
    },
    "attributes" : [ "deprecated" ],
    "id" : "523",
    "superClasses" : [ "352" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#MedicalCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "MedicalCertificate",
      "en" : "Medical Certificate"
    },
    "comment" : {
      "en" : "A certificate confirming that a crew member meets the medical fitness requirements for their role."
    },
    "id" : "482",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightSchedule",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightSchedule",
      "en" : "Flight Schedule"
    },
    "comment" : {
      "en" : "A timetable showing the planned flights of an airline."
    },
    "id" : "259",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PassengerAircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PassengerAircraft",
      "en" : "Passenger Aircraft"
    },
    "comment" : {
      "en" : "An aircraft primarily designed to transport passengers."
    },
    "id" : "40",
    "superClasses" : [ "13" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightDataMonitoring",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "FDM",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "FlightDataMonitoring",
      "en" : "Flight Data Monitoring"
    },
    "comment" : {
      "en" : "The routine analysis of recorded flight data to identify safety trends and improve operations."
    },
    "id" : "544",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Supervisor",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Supervisor",
      "en" : "Supervisor"
    },
    "comment" : {
      "en" : "Personnel responsible for overseeing ground operations staff and activities."
    },
    "id" : "76",
    "superClasses" : [ "2" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Document",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Document",
      "en" : "Document"
    },
    "subClasses" : [ "250", "254", "259", "264", "124", "229", "233", "166", "10", "173", "555", "176", "323", "671", "518", "635", "454", "116", "659", "604", "583", "405", "295", "122", "593", "536" ],
    "comment" : {
      "en" : "A record, form, or certificate that carries information for legal, operational, or logistical purposes."
    },
    "id" : "117",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SmallParcel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SmallParcel",
      "en" : "Small Parcel"
    },
    "comment" : {
      "en" : "A small shipment handled separately from standard cargo."
    },
    "id" : "331",
    "superClasses" : [ "37" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Airline",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Airline",
      "en" : "Airline"
    },
    "comment" : {
      "en" : "An organization providing air transport services for passengers or goods."
    },
    "id" : "112",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Occurrence",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Occurrence",
      "en" : "Occurrence"
    },
    "subClasses" : [ "30", "148", "24", "514" ],
    "comment" : {
      "en" : "An unplanned event that affects, or could affect, normal operations. Safety incidents are one kind of occurrence; operational disruptions and shipment exceptions are others."
    },
    "id" : "31",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FirstOfficer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Co-pilot",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "FirstOfficer",
      "en" : "First Officer"
    },
    "comment" : {
      "en" : "A qualified pilot who assists the Pilot in Command in operating the aircraft."
    },
    "id" : "509",
    "superClasses" : [ "175" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PostOpsAnalysisService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PostOpsAnalysisService",
      "en" : "Post-Operations Analysis Service"
    },
    "comment" : {
      "en" : "A service that analyses completed operations to identify performance trends and improvement opportunities."
    },
    "id" : "581",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#HouseAirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "HAWB",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "HouseAirwayBill",
      "en" : "House Airway Bill"
    },
    "comment" : {
      "en" : "A shipment document issued by a freight forwarder for individual consignments."
    },
    "id" : "9",
    "superClasses" : [ "10" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BirdStrike",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BirdStrike",
      "en" : "Bird Strike"
    },
    "comment" : {
      "en" : "A collision between an aircraft and a bird or wildlife."
    },
    "id" : "155",
    "superClasses" : [ "148" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightRecorder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightRecorder",
      "en" : "Flight Recorder"
    },
    "comment" : {
      "en" : "An onboard device that records flight data and/or cockpit audio for safety investigation purposes."
    },
    "id" : "78",
    "superClasses" : [ "5" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Reloading",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Reloading",
      "en" : "Reloading"
    },
    "comment" : {
      "en" : "The loading of sorted cargo for onward transport."
    },
    "id" : "96",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Scenario",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Scenario",
      "en" : "Scenario"
    },
    "comment" : {
      "en" : "A defined operational situation, used for planning or simulation of airport or flight operations."
    },
    "id" : "314",
    "superClasses" : [ "64" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoContainer",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoContainer",
      "en" : "Cargo Container"
    },
    "subClasses" : [ "223" ],
    "comment" : {
      "en" : "A container used to hold and transport cargo."
    },
    "id" : "185",
    "superClasses" : [ "186" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirTrafficService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ATS",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirTrafficService",
      "en" : "Air Traffic Service"
    },
    "comment" : {
      "en" : "A service provided to promote the safe, orderly, and expeditious flow of air traffic."
    },
    "id" : "506",
    "superClasses" : [ "240" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Location",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Location",
      "en" : "Location"
    },
    "subClasses" : [ "298", "494", "297", "523", "525", "527", "351" ],
    "comment" : {
      "en" : "A geographic, spatial, or airspace entity relevant to air transport."
    },
    "id" : "352"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SustainableAviationFuel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "SAF",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "SustainableAviationFuel",
      "en" : "Sustainable Aviation Fuel"
    },
    "comment" : {
      "en" : "An aviation fuel derived from non-petroleum feedstocks that reduces lifecycle carbon emissions relative to conventional jet fuel."
    },
    "id" : "349",
    "superClasses" : [ "271" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CustomsClearance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CustomsClearance",
      "en" : "Customs Clearance"
    },
    "subClasses" : [ "473", "241" ],
    "comment" : {
      "en" : "A formal process of obtaining government permission to export or import goods."
    },
    "id" : "242",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TravelAgency",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TravelAgency",
      "en" : "Travel Agency"
    },
    "comment" : {
      "en" : "An organization that sells flights and travel services to passengers on behalf of airlines."
    },
    "id" : "190",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Certificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Certificate",
      "en" : "Certificate"
    },
    "subClasses" : [ "418", "480", "482", "486", "410", "123" ],
    "comment" : {
      "en" : "A document issued by a competent authority attesting that an entity meets specified requirements."
    },
    "id" : "124",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#UnmannedAircraftSystem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "UAS",
        "type" : "label"
      }, {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Drone",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "UnmannedAircraftSystem",
      "en" : "Unmanned Aircraft System"
    },
    "comment" : {
      "en" : "An aircraft and its associated remote-control equipment operated without a pilot on board."
    },
    "id" : "26",
    "superClasses" : [ "13" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightManifest",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightManifest",
      "en" : "Flight Manifest"
    },
    "comment" : {
      "en" : "A list of passengers or cargo aboard a particular flight."
    },
    "id" : "229",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CargoHold",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CargoHold",
      "en" : "Cargo Hold"
    },
    "comment" : {
      "en" : "The section of an aircraft designated for carrying cargo."
    },
    "id" : "74",
    "superClasses" : [ "5" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#DemonstrationFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "DemonstrationFlight",
      "en" : "Demonstration Flight"
    },
    "comment" : {
      "en" : "A flight conducted to demonstrate an aircraft's capabilities."
    },
    "id" : "102",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AuthorisedEconomicOperator",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "AEO",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AuthorisedEconomicOperator",
      "en" : "Authorised Economic Operator"
    },
    "comment" : {
      "en" : "A certified party recognised as having secure and compliant supply chain and customs procedures."
    },
    "id" : "135",
    "superClasses" : [ "57" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SecurityException",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SecurityException",
      "en" : "Security Exception"
    },
    "comment" : {
      "en" : "A security-related exception encountered during shipment handling."
    },
    "id" : "35",
    "superClasses" : [ "30" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CrewMember",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "CrewMember",
      "en" : "Crew Member"
    },
    "subClasses" : [ "175", "291", "225" ],
    "comment" : {
      "en" : "A person assigned to operational or service duties aboard an aircraft."
    },
    "id" : "226",
    "superClasses" : [ "55" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ULD",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Unit Load Device",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "ULD",
      "en" : "ULD"
    },
    "comment" : {
      "en" : "A container or pallet used to consolidate cargo for easier handling and loading onto an aircraft."
    },
    "id" : "223",
    "superClasses" : [ "185" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#EnergyConsumption",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "EnergyConsumption",
      "en" : "Energy Consumption"
    },
    "comment" : {
      "en" : "The amount of energy used by an aircraft or ground equipment during operation."
    },
    "id" : "316",
    "superClasses" : [ "218" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightInformationRegion",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "FIR",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "FlightInformationRegion",
      "en" : "Flight Information Region"
    },
    "comment" : {
      "en" : "A defined volume of airspace within which flight information and alerting services are provided."
    },
    "id" : "354",
    "superClasses" : [ "351" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ServiceBulletin",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ServiceBulletin",
      "en" : "Service Bulletin"
    },
    "comment" : {
      "en" : "A notice issued by a manufacturer recommending or describing modifications, inspections, or repairs to a product."
    },
    "id" : "659",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Equipment",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Equipment",
      "en" : "Equipment"
    },
    "subClasses" : [ "185", "15", "192", "196", "47", "201", "204" ],
    "comment" : {
      "en" : "A physical item of apparatus or machinery used to support air transport operations."
    },
    "id" : "186",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Exporter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Exporter",
      "en" : "Exporter"
    },
    "comment" : {
      "en" : "The party (person or organisation) that dispatches goods from the country of origin to a foreign country."
    },
    "id" : "53",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Stakeholder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Stakeholder",
      "en" : "Stakeholder"
    },
    "comment" : {
      "en" : "Any organization, role, or individual who contributes to, is affected by, or has an interest in airport or airline operations."
    },
    "id" : "56",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#CivilAviationAuthority",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "CAA",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "CivilAviationAuthority",
      "en" : "Civil Aviation Authority"
    },
    "comment" : {
      "en" : "A national authority responsible for civil aviation safety oversight and regulation within its state."
    },
    "id" : "239",
    "superClasses" : [ "113" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FlightPlan",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FlightPlan",
      "en" : "Flight Plan"
    },
    "comment" : {
      "en" : "A document filed with air traffic services detailing a flight's intended route, altitude, timing, and fuel."
    },
    "id" : "250",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#PassengerClass",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "PassengerClass",
      "en" : "Passenger Class"
    },
    "comment" : {
      "en" : "The category of service assigned to a passenger (e.g. economy, business)."
    },
    "id" : "327",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirportApron",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "Ramp",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirportApron",
      "en" : "Airport Apron"
    },
    "comment" : {
      "en" : "The area of an airport where aircraft are parked, unloaded or loaded, refuelled, boarded, or maintained."
    },
    "id" : "382",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Pushback",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Pushback",
      "en" : "Pushback"
    },
    "comment" : {
      "en" : "The use of a tug to move an aircraft away from its gate before taxiing."
    },
    "id" : "133",
    "superClasses" : [ "62" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundVehicle",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "GroundVehicle",
      "en" : "Ground Vehicle"
    },
    "comment" : {
      "en" : "A road vehicle (e.g. a truck or van) used to move cargo or passengers to or from an airport."
    },
    "id" : "115",
    "superClasses" : [ "44" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AerodromeOperatingSite",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "AerodromeOperatingSite",
      "en" : "Aerodrome Operating Site"
    },
    "comment" : {
      "en" : "A specific site within or associated with an aerodrome from which operations are conducted."
    },
    "id" : "361",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TransportMode",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TransportMode",
      "en" : "Transport Mode"
    },
    "subClasses" : [ "208", "214" ],
    "comment" : {
      "en" : "A classification of the mode used to move goods or passengers."
    },
    "id" : "209",
    "superClasses" : [ "272" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Hangar",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Hangar",
      "en" : "Hangar"
    },
    "comment" : {
      "en" : "A building used to store, maintain, or repair aircraft."
    },
    "id" : "340",
    "superClasses" : [ "49" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Consignee",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Consignee",
      "en" : "Consignee"
    },
    "comment" : {
      "en" : "The person or company to whom the goods are to be delivered."
    },
    "id" : "54",
    "superClasses" : [ "7" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#GroundHandlingService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "GroundHandlingService",
      "en" : "Ground Handling Service"
    },
    "subClasses" : [ "61", "181", "133", "137", "141", "145" ],
    "comment" : {
      "en" : "A service performed to support an aircraft's turnaround at an airport."
    },
    "id" : "62",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#FerryFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "FerryFlight",
      "en" : "Ferry Flight"
    },
    "comment" : {
      "en" : "A non-revenue flight conducted to reposition an aircraft."
    },
    "id" : "110",
    "superClasses" : [ "21" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#BreakBulk",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "BreakBulk",
      "en" : "Break Bulk"
    },
    "comment" : {
      "en" : "The process of deconsolidating cargo from a ULD into individual shipments at the destination."
    },
    "id" : "86",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Taxiing",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Taxiing",
      "en" : "Taxiing"
    },
    "comment" : {
      "en" : "The movement of an aircraft on the ground under its own power."
    },
    "id" : "159",
    "superClasses" : [ "83" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Bagging",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Bagging",
      "en" : "Bagging"
    },
    "comment" : {
      "en" : "The loading of small parcels into transport bags."
    },
    "id" : "89",
    "superClasses" : [ "68" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ScreeningResult",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ScreeningResult",
      "en" : "Screening Result"
    },
    "comment" : {
      "en" : "The recorded result of a security screening process."
    },
    "id" : "671",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Airport",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Airport",
      "en" : "Airport"
    },
    "comment" : {
      "en" : "An aerodrome equipped with facilities for commercial air transport, such as passenger terminals and cargo handling."
    },
    "id" : "29",
    "superClasses" : [ "65" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirTrafficFlowManagement",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "ATFM",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirTrafficFlowManagement",
      "en" : "Air Traffic Flow Management"
    },
    "comment" : {
      "en" : "A service that manages air traffic flow to optimise the use of available airspace and airport capacity."
    },
    "id" : "543",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#Training",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Training",
      "en" : "Training"
    },
    "subClasses" : [ "150" ],
    "comment" : {
      "en" : "An activity intended to develop or maintain the competence of aviation personnel."
    },
    "id" : "151",
    "superClasses" : [ "118" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SafetyReport",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SafetyReport",
      "en" : "Safety Report"
    },
    "comment" : {
      "en" : "A report documenting a safety occurrence, hazard, or concern for review by safety management."
    },
    "id" : "604",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#TypeRating",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "TypeRating",
      "en" : "Type Rating"
    },
    "comment" : {
      "en" : "A qualification, endorsed on a pilot's licence, permitting them to operate a specific aircraft type."
    },
    "id" : "486",
    "superClasses" : [ "124" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ArrivalNotice",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ArrivalNotice",
      "en" : "Arrival Notice"
    },
    "comment" : {
      "en" : "Notification issued by the airline or freight forwarder indicating the cargo has arrived."
    },
    "id" : "593",
    "superClasses" : [ "117" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ConveyorBelt",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "ConveyorBelt",
      "en" : "Conveyor Belt"
    },
    "comment" : {
      "en" : "A conveyor used to transport shipments through a handling facility."
    },
    "id" : "231",
    "superClasses" : [ "201" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#SeriousIncident",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "label" : {
      "IRI-based" : "SeriousIncident",
      "en" : "Serious Incident"
    },
    "comment" : {
      "en" : "An occurrence, other than an accident, associated with the operation of an aircraft in which safety was seriously compromised."
    },
    "id" : "157",
    "superClasses" : [ "148" ]
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#AirworthinessDirective",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "instances" : 0,
    "annotations" : {
      "altLabel" : [ {
        "identifier" : "altLabel",
        "language" : "en",
        "value" : "AD",
        "type" : "label"
      } ]
    },
    "label" : {
      "IRI-based" : "AirworthinessDirective",
      "en" : "Airworthiness Directive"
    },
    "comment" : {
      "en" : "A legally enforceable regulation issued by a regulatory authority to correct an unsafe condition in an aircraft product."
    },
    "id" : "566",
    "superClasses" : [ "165" ]
  } ],
  "property" : [ {
    "id" : "0",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "3",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "8",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "11",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "16",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "18",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "22",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "25",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "27",
    "type" : "owl:objectProperty"
  }, {
    "id" : "36",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "39",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "41",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "43",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "45",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "48",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "50",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "58",
    "type" : "owl:objectProperty"
  }, {
    "id" : "66",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "71",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "73",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "75",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "77",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "80",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "81",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "84",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "85",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "87",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "88",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "90",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "91",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "93",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "95",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "97",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "99",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "101",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "103",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "105",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "107",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "109",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "111",
    "type" : "owl:objectProperty"
  }, {
    "id" : "114",
    "type" : "owl:objectProperty"
  }, {
    "id" : "120",
    "type" : "owl:objectProperty"
  }, {
    "id" : "125",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "127",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "128",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "130",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "132",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "134",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "136",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "138",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "140",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "142",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "144",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "146",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "149",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "152",
    "type" : "owl:objectProperty"
  }, {
    "id" : "154",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "156",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "158",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "160",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "168",
    "type" : "owl:objectProperty"
  }, {
    "id" : "171",
    "type" : "owl:objectProperty"
  }, {
    "id" : "177",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "178",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "180",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "182",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "184",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "187",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "188",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "189",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "191",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "193",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "195",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "197",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "198",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "199",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "200",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "202",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "203",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "205",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "207",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "211",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "213",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "215",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "222",
    "type" : "owl:objectProperty"
  }, {
    "id" : "224",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "227",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "228",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "230",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "232",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "234",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "235",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "236",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "238",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "243",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "244",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "247",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "249",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "251",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "253",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "256",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "258",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "261",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "263",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "265",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "267",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "268",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "270",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "273",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "275",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "277",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "279",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "281",
    "type" : "owl:objectProperty"
  }, {
    "id" : "284",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "286",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "289",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "292",
    "type" : "owl:objectProperty"
  }, {
    "id" : "294",
    "type" : "owl:objectProperty"
  }, {
    "id" : "296",
    "type" : "owl:objectProperty"
  }, {
    "id" : "299",
    "type" : "owl:objectProperty"
  }, {
    "id" : "300",
    "type" : "owl:objectProperty"
  }, {
    "id" : "302",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "304",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "306",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "309",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "310",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "315",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "317",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "319",
    "type" : "owl:objectProperty"
  }, {
    "id" : "320",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "321",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "322",
    "type" : "owl:objectProperty"
  }, {
    "id" : "324",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "326",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "328",
    "type" : "owl:objectProperty"
  }, {
    "id" : "330",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "332",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "334",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "336",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "337",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "339",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "341",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "342",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "344",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "345",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "347",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "350",
    "type" : "owl:objectProperty"
  }, {
    "id" : "357",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "358",
    "type" : "owl:objectProperty"
  }, {
    "id" : "359",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "360",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "362",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "363",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "365",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "366",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "367",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "368",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "369",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "370",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "371",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "372",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "373",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "374",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "377",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "378",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "380",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "381",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "383",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "384",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "386",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "387",
    "type" : "owl:objectProperty"
  }, {
    "id" : "388",
    "type" : "owl:objectProperty"
  }, {
    "id" : "390",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "392",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "393",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "394",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "395",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "396",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "398",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "399",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "400",
    "type" : "owl:disjointWith"
  }, {
    "id" : "401",
    "type" : "owl:objectProperty"
  }, {
    "id" : "403",
    "type" : "owl:objectProperty"
  }, {
    "id" : "404",
    "type" : "owl:objectProperty"
  }, {
    "id" : "406",
    "type" : "owl:disjointWith"
  }, {
    "id" : "407",
    "type" : "owl:disjointWith"
  }, {
    "id" : "408",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "409",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "411",
    "type" : "owl:disjointWith"
  }, {
    "id" : "412",
    "type" : "owl:disjointWith"
  }, {
    "id" : "413",
    "type" : "owl:disjointWith"
  }, {
    "id" : "414",
    "type" : "owl:disjointWith"
  }, {
    "id" : "170",
    "type" : "owl:objectProperty"
  }, {
    "id" : "417",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "419",
    "type" : "owl:disjointWith"
  }, {
    "id" : "420",
    "type" : "owl:objectProperty"
  }, {
    "id" : "421",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "423",
    "type" : "owl:disjointWith"
  }, {
    "id" : "424",
    "type" : "owl:disjointWith"
  }, {
    "id" : "425",
    "type" : "owl:disjointWith"
  }, {
    "id" : "426",
    "type" : "owl:disjointWith"
  }, {
    "id" : "427",
    "type" : "owl:disjointWith"
  }, {
    "id" : "428",
    "type" : "owl:disjointWith"
  }, {
    "id" : "429",
    "type" : "owl:disjointWith"
  }, {
    "id" : "430",
    "type" : "owl:disjointWith"
  }, {
    "id" : "431",
    "type" : "owl:objectProperty"
  }, {
    "id" : "432",
    "type" : "owl:disjointWith"
  }, {
    "id" : "433",
    "type" : "owl:disjointWith"
  }, {
    "id" : "434",
    "type" : "owl:disjointWith"
  }, {
    "id" : "435",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "436",
    "type" : "owl:disjointWith"
  }, {
    "id" : "437",
    "type" : "owl:objectProperty"
  }, {
    "id" : "438",
    "type" : "owl:objectProperty"
  }, {
    "id" : "439",
    "type" : "owl:objectProperty"
  }, {
    "id" : "441",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "442",
    "type" : "owl:disjointWith"
  }, {
    "id" : "443",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "445",
    "type" : "owl:objectProperty"
  }, {
    "id" : "446",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "447",
    "type" : "owl:disjointWith"
  }, {
    "id" : "448",
    "type" : "owl:disjointWith"
  }, {
    "id" : "449",
    "type" : "owl:disjointWith"
  }, {
    "id" : "450",
    "type" : "owl:disjointWith"
  }, {
    "id" : "451",
    "type" : "owl:disjointWith"
  }, {
    "id" : "452",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "453",
    "type" : "owl:objectProperty"
  }, {
    "id" : "455",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "457",
    "type" : "owl:objectProperty"
  }, {
    "id" : "459",
    "type" : "owl:disjointWith"
  }, {
    "id" : "460",
    "type" : "owl:objectProperty"
  }, {
    "id" : "461",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "462",
    "type" : "owl:disjointWith"
  }, {
    "id" : "463",
    "type" : "owl:disjointWith"
  }, {
    "id" : "464",
    "type" : "owl:disjointWith"
  }, {
    "id" : "466",
    "type" : "owl:objectProperty"
  }, {
    "id" : "467",
    "type" : "owl:disjointWith"
  }, {
    "id" : "468",
    "type" : "owl:disjointWith"
  }, {
    "id" : "469",
    "type" : "owl:disjointWith"
  }, {
    "id" : "470",
    "type" : "owl:disjointWith"
  }, {
    "id" : "471",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "472",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "474",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "475",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "477",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "478",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "479",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "481",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "483",
    "type" : "owl:objectProperty"
  }, {
    "id" : "485",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "487",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "489",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "490",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "491",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "492",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "493",
    "type" : "owl:objectProperty"
  }, {
    "id" : "495",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "497",
    "type" : "owl:disjointWith"
  }, {
    "id" : "498",
    "type" : "owl:objectProperty"
  }, {
    "id" : "500",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "502",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "503",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "504",
    "type" : "owl:disjointWith"
  }, {
    "id" : "505",
    "type" : "owl:objectProperty"
  }, {
    "id" : "507",
    "type" : "owl:disjointWith"
  }, {
    "id" : "508",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "510",
    "type" : "owl:disjointWith"
  }, {
    "id" : "511",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "512",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "513",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "515",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "516",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "517",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "519",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "520",
    "type" : "owl:objectProperty"
  }, {
    "id" : "521",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "522",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "524",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "526",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "528",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "529",
    "type" : "owl:objectProperty"
  }, {
    "id" : "531",
    "type" : "owl:objectProperty"
  }, {
    "id" : "532",
    "type" : "owl:objectProperty"
  }, {
    "id" : "533",
    "type" : "owl:objectProperty"
  }, {
    "id" : "534",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "537",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "538",
    "type" : "owl:objectProperty"
  }, {
    "id" : "539",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "540",
    "type" : "owl:disjointWith"
  }, {
    "id" : "541",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "542",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "545",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "546",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "547",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "549",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "550",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "551",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "552",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "553",
    "type" : "owl:objectProperty"
  }, {
    "id" : "554",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "556",
    "type" : "owl:objectProperty"
  }, {
    "id" : "558",
    "type" : "owl:objectProperty"
  }, {
    "id" : "559",
    "type" : "owl:objectProperty"
  }, {
    "id" : "563",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "565",
    "type" : "owl:objectProperty"
  }, {
    "id" : "567",
    "type" : "owl:objectProperty"
  }, {
    "id" : "570",
    "type" : "owl:objectProperty"
  }, {
    "id" : "571",
    "type" : "owl:objectProperty"
  }, {
    "id" : "572",
    "type" : "owl:objectProperty"
  }, {
    "id" : "574",
    "type" : "owl:objectProperty"
  }, {
    "id" : "575",
    "type" : "owl:objectProperty"
  }, {
    "id" : "576",
    "type" : "owl:objectProperty"
  }, {
    "id" : "577",
    "type" : "owl:objectProperty"
  }, {
    "id" : "578",
    "type" : "owl:objectProperty"
  }, {
    "id" : "580",
    "type" : "owl:objectProperty"
  }, {
    "id" : "584",
    "type" : "owl:objectProperty"
  }, {
    "id" : "585",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "586",
    "type" : "owl:objectProperty"
  }, {
    "id" : "587",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "588",
    "type" : "owl:objectProperty"
  }, {
    "id" : "589",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "590",
    "type" : "owl:objectProperty"
  }, {
    "id" : "591",
    "type" : "owl:objectProperty"
  }, {
    "id" : "592",
    "type" : "owl:objectProperty"
  }, {
    "id" : "594",
    "type" : "owl:objectProperty"
  }, {
    "id" : "595",
    "type" : "owl:objectProperty"
  }, {
    "id" : "596",
    "type" : "owl:objectProperty"
  }, {
    "id" : "597",
    "type" : "owl:objectProperty"
  }, {
    "id" : "598",
    "type" : "owl:objectProperty"
  }, {
    "id" : "599",
    "type" : "owl:objectProperty"
  }, {
    "id" : "402",
    "type" : "owl:objectProperty"
  }, {
    "id" : "600",
    "type" : "owl:objectProperty"
  }, {
    "id" : "601",
    "type" : "owl:objectProperty"
  }, {
    "id" : "602",
    "type" : "owl:objectProperty"
  }, {
    "id" : "603",
    "type" : "owl:objectProperty"
  }, {
    "id" : "605",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "606",
    "type" : "owl:objectProperty"
  }, {
    "id" : "609",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "610",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "611",
    "type" : "owl:objectProperty"
  }, {
    "id" : "612",
    "type" : "owl:objectProperty"
  }, {
    "id" : "301",
    "type" : "owl:objectProperty"
  }, {
    "id" : "607",
    "type" : "owl:objectProperty"
  }, {
    "id" : "615",
    "type" : "owl:objectProperty"
  }, {
    "id" : "616",
    "type" : "owl:objectProperty"
  }, {
    "id" : "617",
    "type" : "owl:objectProperty"
  }, {
    "id" : "618",
    "type" : "owl:objectProperty"
  }, {
    "id" : "619",
    "type" : "owl:objectProperty"
  }, {
    "id" : "620",
    "type" : "owl:objectProperty"
  }, {
    "id" : "621",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "622",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "623",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "624",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "625",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "626",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "627",
    "type" : "owl:objectProperty"
  }, {
    "id" : "628",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "629",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "630",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "631",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "632",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "633",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "634",
    "type" : "owl:objectProperty"
  }, {
    "id" : "608",
    "type" : "owl:objectProperty"
  }, {
    "id" : "636",
    "type" : "owl:objectProperty"
  }, {
    "id" : "637",
    "type" : "owl:objectProperty"
  }, {
    "id" : "638",
    "type" : "owl:objectProperty"
  }, {
    "id" : "639",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "640",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "641",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "642",
    "type" : "owl:objectProperty"
  }, {
    "id" : "613",
    "type" : "owl:objectProperty"
  }, {
    "id" : "643",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "644",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "645",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "646",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "647",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "648",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "649",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "650",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "651",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "652",
    "type" : "owl:objectProperty"
  }, {
    "id" : "653",
    "type" : "owl:objectProperty"
  }, {
    "id" : "654",
    "type" : "owl:objectProperty"
  }, {
    "id" : "655",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "656",
    "type" : "owl:objectProperty"
  }, {
    "id" : "657",
    "type" : "owl:objectProperty"
  }, {
    "id" : "658",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "660",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "661",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "662",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "663",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "664",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "665",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "666",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "667",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "668",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "669",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "670",
    "type" : "owl:objectProperty"
  }, {
    "id" : "672",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "673",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "674",
    "type" : "owl:objectProperty"
  }, {
    "id" : "675",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "676",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "677",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "678",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "679",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "680",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "681",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "682",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "683",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "684",
    "type" : "owl:objectProperty"
  }, {
    "id" : "685",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "686",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "687",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "688",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "689",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "690",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "691",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "692",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "693",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "694",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "695",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "696",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "697",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "698",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "699",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "700",
    "type" : "owl:objectProperty"
  }, {
    "id" : "701",
    "type" : "owl:objectProperty"
  }, {
    "id" : "702",
    "type" : "owl:objectProperty"
  }, {
    "id" : "703",
    "type" : "owl:objectProperty"
  }, {
    "id" : "614",
    "type" : "owl:objectProperty"
  }, {
    "id" : "704",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "705",
    "type" : "owl:objectProperty"
  }, {
    "id" : "706",
    "type" : "owl:objectProperty"
  }, {
    "id" : "707",
    "type" : "owl:disjointWith"
  }, {
    "id" : "708",
    "type" : "owl:objectProperty"
  }, {
    "id" : "709",
    "type" : "owl:disjointWith"
  }, {
    "id" : "710",
    "type" : "owl:disjointWith"
  }, {
    "id" : "711",
    "type" : "owl:disjointWith"
  }, {
    "id" : "712",
    "type" : "owl:disjointWith"
  }, {
    "id" : "713",
    "type" : "owl:disjointWith"
  }, {
    "id" : "714",
    "type" : "owl:disjointWith"
  }, {
    "id" : "715",
    "type" : "owl:disjointWith"
  }, {
    "id" : "716",
    "type" : "owl:disjointWith"
  }, {
    "id" : "717",
    "type" : "owl:someValuesFrom"
  }, {
    "id" : "718",
    "type" : "owl:objectProperty"
  } ],
  "propertyAttribute" : [ {
    "range" : "2",
    "domain" : "1",
    "attributes" : [ "anonymous", "object" ],
    "id" : "0"
  }, {
    "range" : "5",
    "domain" : "4",
    "attributes" : [ "anonymous", "object" ],
    "id" : "3"
  }, {
    "range" : "10",
    "domain" : "9",
    "attributes" : [ "anonymous", "object" ],
    "id" : "8"
  }, {
    "range" : "13",
    "domain" : "12",
    "attributes" : [ "anonymous", "object" ],
    "id" : "11"
  }, {
    "range" : "10",
    "domain" : "17",
    "attributes" : [ "anonymous", "object" ],
    "id" : "16"
  }, {
    "range" : "13",
    "domain" : "19",
    "attributes" : [ "anonymous", "object" ],
    "id" : "18"
  }, {
    "range" : "24",
    "domain" : "23",
    "attributes" : [ "anonymous", "object" ],
    "id" : "22"
  }, {
    "range" : "13",
    "domain" : "26",
    "attributes" : [ "anonymous", "object" ],
    "id" : "25"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#monitorsAirportOperations",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "29",
    "label" : {
      "IRI-based" : "monitorsAirportOperations",
      "en" : "monitors airport operations"
    },
    "domain" : "28",
    "comment" : {
      "en" : "Relates a monitoring service to the airport operations it monitors."
    },
    "attributes" : [ "object" ],
    "id" : "27"
  }, {
    "range" : "38",
    "domain" : "37",
    "attributes" : [ "anonymous", "object" ],
    "id" : "36"
  }, {
    "range" : "13",
    "domain" : "40",
    "attributes" : [ "anonymous", "object" ],
    "id" : "39"
  }, {
    "range" : "38",
    "domain" : "42",
    "attributes" : [ "anonymous", "object" ],
    "id" : "41"
  }, {
    "range" : "44",
    "domain" : "5",
    "attributes" : [ "anonymous", "object" ],
    "id" : "43"
  }, {
    "range" : "47",
    "domain" : "46",
    "attributes" : [ "anonymous", "object" ],
    "id" : "45"
  }, {
    "range" : "44",
    "domain" : "49",
    "attributes" : [ "anonymous", "object" ],
    "id" : "48"
  }, {
    "range" : "47",
    "domain" : "51",
    "attributes" : [ "anonymous", "object" ],
    "id" : "50"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesICAOCode",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "60",
    "label" : {
      "IRI-based" : "usesICAOCode",
      "en" : "uses ICAO code"
    },
    "domain" : "59",
    "comment" : {
      "en" : "Relates an airport, airline, or aircraft to its ICAO code."
    },
    "attributes" : [ "object" ],
    "id" : "58"
  }, {
    "range" : "68",
    "domain" : "67",
    "attributes" : [ "anonymous", "object" ],
    "id" : "66"
  }, {
    "range" : "2",
    "domain" : "72",
    "attributes" : [ "anonymous", "object" ],
    "id" : "71"
  }, {
    "range" : "5",
    "domain" : "74",
    "attributes" : [ "anonymous", "object" ],
    "id" : "73"
  }, {
    "range" : "2",
    "domain" : "76",
    "attributes" : [ "anonymous", "object" ],
    "id" : "75"
  }, {
    "range" : "5",
    "domain" : "78",
    "attributes" : [ "anonymous", "object" ],
    "id" : "77"
  }, {
    "range" : "7",
    "domain" : "56",
    "attributes" : [ "anonymous", "object" ],
    "id" : "80"
  }, {
    "range" : "83",
    "domain" : "82",
    "attributes" : [ "anonymous", "object" ],
    "id" : "81"
  }, {
    "range" : "7",
    "domain" : "57",
    "attributes" : [ "anonymous", "object" ],
    "id" : "84"
  }, {
    "range" : "68",
    "domain" : "86",
    "attributes" : [ "anonymous", "object" ],
    "id" : "85"
  }, {
    "range" : "65",
    "domain" : "29",
    "attributes" : [ "anonymous", "object" ],
    "id" : "87"
  }, {
    "range" : "68",
    "domain" : "89",
    "attributes" : [ "anonymous", "object" ],
    "id" : "88"
  }, {
    "range" : "21",
    "domain" : "20",
    "attributes" : [ "anonymous", "object" ],
    "id" : "90"
  }, {
    "range" : "68",
    "domain" : "92",
    "attributes" : [ "anonymous", "object" ],
    "id" : "91"
  }, {
    "range" : "21",
    "domain" : "94",
    "attributes" : [ "anonymous", "object" ],
    "id" : "93"
  }, {
    "range" : "68",
    "domain" : "96",
    "attributes" : [ "anonymous", "object" ],
    "id" : "95"
  }, {
    "range" : "21",
    "domain" : "98",
    "attributes" : [ "anonymous", "object" ],
    "id" : "97"
  }, {
    "range" : "68",
    "domain" : "100",
    "attributes" : [ "anonymous", "object" ],
    "id" : "99"
  }, {
    "range" : "21",
    "domain" : "102",
    "attributes" : [ "anonymous", "object" ],
    "id" : "101"
  }, {
    "range" : "68",
    "domain" : "104",
    "attributes" : [ "anonymous", "object" ],
    "id" : "103"
  }, {
    "range" : "21",
    "domain" : "106",
    "attributes" : [ "anonymous", "object" ],
    "id" : "105"
  }, {
    "range" : "68",
    "domain" : "108",
    "attributes" : [ "anonymous", "object" ],
    "id" : "107"
  }, {
    "range" : "21",
    "domain" : "110",
    "attributes" : [ "anonymous", "object" ],
    "id" : "109"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#certifiedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "113",
    "label" : {
      "IRI-based" : "certifiedBy",
      "en" : "certified by"
    },
    "domain" : "112",
    "comment" : {
      "en" : "Relates an airline to the regulatory authority that certifies it."
    },
    "attributes" : [ "object" ],
    "id" : "111"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#loadedOnTruckForDelivery",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "115",
    "label" : {
      "IRI-based" : "loadedOnTruckForDelivery",
      "en" : "loaded on truck for delivery"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Shows that cargo is moved to truck transport after import clearance."
    },
    "attributes" : [ "object" ],
    "id" : "114"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#performsMaintenanceActivity",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "121",
    "label" : {
      "IRI-based" : "performsMaintenanceActivity",
      "en" : "performs maintenance activity"
    },
    "domain" : "119",
    "comment" : {
      "en" : "Relates an MRO organization to a maintenance activity it performs."
    },
    "attributes" : [ "object" ],
    "id" : "120"
  }, {
    "range" : "83",
    "domain" : "126",
    "attributes" : [ "anonymous", "object" ],
    "id" : "125"
  }, {
    "range" : "7",
    "domain" : "55",
    "attributes" : [ "anonymous", "object" ],
    "id" : "127"
  }, {
    "range" : "83",
    "domain" : "129",
    "attributes" : [ "anonymous", "object" ],
    "id" : "128"
  }, {
    "range" : "57",
    "domain" : "131",
    "attributes" : [ "anonymous", "object" ],
    "id" : "130"
  }, {
    "range" : "62",
    "domain" : "133",
    "attributes" : [ "anonymous", "object" ],
    "id" : "132"
  }, {
    "range" : "57",
    "domain" : "135",
    "attributes" : [ "anonymous", "object" ],
    "id" : "134"
  }, {
    "range" : "62",
    "domain" : "137",
    "attributes" : [ "anonymous", "object" ],
    "id" : "136"
  }, {
    "range" : "57",
    "domain" : "139",
    "attributes" : [ "anonymous", "object" ],
    "id" : "138"
  }, {
    "range" : "62",
    "domain" : "141",
    "attributes" : [ "anonymous", "object" ],
    "id" : "140"
  }, {
    "range" : "57",
    "domain" : "143",
    "attributes" : [ "anonymous", "object" ],
    "id" : "142"
  }, {
    "range" : "62",
    "domain" : "145",
    "attributes" : [ "anonymous", "object" ],
    "id" : "144"
  }, {
    "range" : "148",
    "domain" : "147",
    "attributes" : [ "anonymous", "object" ],
    "id" : "146"
  }, {
    "range" : "151",
    "domain" : "150",
    "attributes" : [ "anonymous", "object" ],
    "id" : "149"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#suppliesCatering",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "61",
    "label" : {
      "IRI-based" : "suppliesCatering",
      "en" : "supplies catering"
    },
    "domain" : "153",
    "comment" : {
      "en" : "Relates a catering company to a catering service it supplies."
    },
    "attributes" : [ "object" ],
    "id" : "152"
  }, {
    "range" : "148",
    "domain" : "155",
    "attributes" : [ "anonymous", "object" ],
    "id" : "154"
  }, {
    "range" : "148",
    "domain" : "157",
    "attributes" : [ "anonymous", "object" ],
    "id" : "156"
  }, {
    "range" : "83",
    "domain" : "159",
    "attributes" : [ "anonymous", "object" ],
    "id" : "158"
  }, {
    "range" : "83",
    "domain" : "161",
    "attributes" : [ "anonymous", "object" ],
    "id" : "160"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#includesCargoItem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "38",
    "label" : {
      "IRI-based" : "includesCargoItem",
      "en" : "includes cargo item"
    },
    "superproperty" : [ "170" ],
    "domain" : "169",
    "comment" : {
      "en" : "Associates a shipment with its individual cargo items."
    },
    "attributes" : [ "object" ],
    "id" : "168"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#allocatedSlot",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "172",
    "label" : {
      "IRI-based" : "allocatedSlot",
      "en" : "allocated slot"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the airport slot allocated to it."
    },
    "attributes" : [ "object" ],
    "id" : "171"
  }, {
    "range" : "62",
    "domain" : "61",
    "attributes" : [ "anonymous", "object" ],
    "id" : "177"
  }, {
    "range" : "57",
    "domain" : "179",
    "attributes" : [ "anonymous", "object" ],
    "id" : "178"
  }, {
    "range" : "62",
    "domain" : "181",
    "attributes" : [ "anonymous", "object" ],
    "id" : "180"
  }, {
    "range" : "57",
    "domain" : "183",
    "attributes" : [ "anonymous", "object" ],
    "id" : "182"
  }, {
    "range" : "186",
    "domain" : "185",
    "attributes" : [ "anonymous", "object" ],
    "id" : "184"
  }, {
    "range" : "57",
    "domain" : "112",
    "attributes" : [ "anonymous", "object" ],
    "id" : "187"
  }, {
    "range" : "186",
    "domain" : "15",
    "attributes" : [ "anonymous", "object" ],
    "id" : "188"
  }, {
    "range" : "57",
    "domain" : "190",
    "attributes" : [ "anonymous", "object" ],
    "id" : "189"
  }, {
    "range" : "186",
    "domain" : "192",
    "attributes" : [ "anonymous", "object" ],
    "id" : "191"
  }, {
    "range" : "57",
    "domain" : "194",
    "attributes" : [ "anonymous", "object" ],
    "id" : "193"
  }, {
    "range" : "186",
    "domain" : "196",
    "attributes" : [ "anonymous", "object" ],
    "id" : "195"
  }, {
    "range" : "57",
    "domain" : "153",
    "attributes" : [ "anonymous", "object" ],
    "id" : "197"
  }, {
    "range" : "186",
    "domain" : "47",
    "attributes" : [ "anonymous", "object" ],
    "id" : "198"
  }, {
    "range" : "57",
    "domain" : "113",
    "attributes" : [ "anonymous", "object" ],
    "id" : "199"
  }, {
    "range" : "186",
    "domain" : "201",
    "attributes" : [ "anonymous", "object" ],
    "id" : "200"
  }, {
    "range" : "57",
    "domain" : "119",
    "attributes" : [ "anonymous", "object" ],
    "id" : "202"
  }, {
    "range" : "186",
    "domain" : "204",
    "attributes" : [ "anonymous", "object" ],
    "id" : "203"
  }, {
    "range" : "57",
    "domain" : "206",
    "attributes" : [ "anonymous", "object" ],
    "id" : "205"
  }, {
    "range" : "209",
    "domain" : "208",
    "attributes" : [ "anonymous", "object" ],
    "id" : "207"
  }, {
    "range" : "57",
    "domain" : "212",
    "attributes" : [ "anonymous", "object" ],
    "id" : "211"
  }, {
    "range" : "209",
    "domain" : "214",
    "attributes" : [ "anonymous", "object" ],
    "id" : "213"
  }, {
    "range" : "57",
    "domain" : "216",
    "attributes" : [ "anonymous", "object" ],
    "id" : "215"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#includesULD",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "223",
    "label" : {
      "IRI-based" : "includesULD",
      "en" : "includes ULD"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Connects a shipment to the ULD in which it is consolidated."
    },
    "attributes" : [ "object" ],
    "id" : "222"
  }, {
    "range" : "226",
    "domain" : "225",
    "attributes" : [ "anonymous", "object" ],
    "id" : "224"
  }, {
    "range" : "201",
    "domain" : "210",
    "attributes" : [ "anonymous", "object" ],
    "id" : "227"
  }, {
    "range" : "117",
    "domain" : "229",
    "attributes" : [ "anonymous", "object" ],
    "id" : "228"
  }, {
    "range" : "201",
    "domain" : "231",
    "attributes" : [ "anonymous", "object" ],
    "id" : "230"
  }, {
    "range" : "117",
    "domain" : "233",
    "attributes" : [ "anonymous", "object" ],
    "id" : "232"
  }, {
    "range" : "70",
    "domain" : "69",
    "attributes" : [ "anonymous", "object" ],
    "id" : "234"
  }, {
    "range" : "117",
    "domain" : "166",
    "attributes" : [ "anonymous", "object" ],
    "id" : "235"
  }, {
    "range" : "118",
    "domain" : "31",
    "attributes" : [ "anonymous", "object" ],
    "id" : "236"
  }, {
    "range" : "113",
    "domain" : "239",
    "attributes" : [ "anonymous", "object" ],
    "id" : "238"
  }, {
    "range" : "121",
    "domain" : "219",
    "attributes" : [ "anonymous", "object" ],
    "id" : "243"
  }, {
    "range" : "113",
    "domain" : "245",
    "attributes" : [ "anonymous", "object" ],
    "id" : "244"
  }, {
    "range" : "121",
    "domain" : "248",
    "attributes" : [ "anonymous", "object" ],
    "id" : "247"
  }, {
    "range" : "117",
    "domain" : "250",
    "attributes" : [ "anonymous", "object" ],
    "id" : "249"
  }, {
    "range" : "252",
    "domain" : "60",
    "attributes" : [ "anonymous", "object" ],
    "id" : "251"
  }, {
    "range" : "117",
    "domain" : "254",
    "attributes" : [ "anonymous", "object" ],
    "id" : "253"
  }, {
    "range" : "252",
    "domain" : "257",
    "attributes" : [ "anonymous", "object" ],
    "id" : "256"
  }, {
    "range" : "117",
    "domain" : "259",
    "attributes" : [ "anonymous", "object" ],
    "id" : "258"
  }, {
    "range" : "201",
    "domain" : "262",
    "attributes" : [ "anonymous", "object" ],
    "id" : "261"
  }, {
    "range" : "117",
    "domain" : "264",
    "attributes" : [ "anonymous", "object" ],
    "id" : "263"
  }, {
    "range" : "201",
    "domain" : "266",
    "attributes" : [ "anonymous", "object" ],
    "id" : "265"
  }, {
    "range" : "117",
    "domain" : "124",
    "attributes" : [ "anonymous", "object" ],
    "id" : "267"
  }, {
    "range" : "269",
    "domain" : "70",
    "attributes" : [ "anonymous", "object" ],
    "id" : "268"
  }, {
    "range" : "272",
    "domain" : "271",
    "attributes" : [ "anonymous", "object" ],
    "id" : "270"
  }, {
    "range" : "269",
    "domain" : "274",
    "attributes" : [ "anonymous", "object" ],
    "id" : "273"
  }, {
    "range" : "272",
    "domain" : "276",
    "attributes" : [ "anonymous", "object" ],
    "id" : "275"
  }, {
    "range" : "269",
    "domain" : "278",
    "attributes" : [ "anonymous", "object" ],
    "id" : "277"
  }, {
    "range" : "272",
    "domain" : "280",
    "attributes" : [ "anonymous", "object" ],
    "id" : "279"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#consumesEnergy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "282",
    "label" : {
      "IRI-based" : "consumesEnergy",
      "en" : "consumes energy"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the quantity of energy it consumes."
    },
    "attributes" : [ "object" ],
    "id" : "281"
  }, {
    "range" : "121",
    "domain" : "285",
    "attributes" : [ "anonymous", "object" ],
    "id" : "284"
  }, {
    "range" : "272",
    "domain" : "287",
    "attributes" : [ "anonymous", "object" ],
    "id" : "286"
  }, {
    "range" : "121",
    "domain" : "290",
    "attributes" : [ "anonymous", "object" ],
    "id" : "289"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#clearedThroughCustomsWarehouse",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "70",
    "label" : {
      "IRI-based" : "clearedThroughCustomsWarehouse",
      "en" : "cleared through customs warehouse"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Links the cargo to the location where customs clearance is conducted."
    },
    "attributes" : [ "object" ],
    "id" : "292"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#departedFrom",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "departedFrom",
      "en" : "departed from"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the airport it departed from."
    },
    "attributes" : [ "functional", "object" ],
    "id" : "294"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#interlinkedWithRoad",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "298",
    "label" : {
      "IRI-based" : "interlinkedWithRoad",
      "en" : "interlinked with road"
    },
    "domain" : "297",
    "comment" : {
      "en" : "Relates an air network to an interlinked road network."
    },
    "attributes" : [ "object" ],
    "id" : "296"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#carriesCargo",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "38",
    "label" : {
      "IRI-based" : "carriesCargo",
      "en" : "carries cargo"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to cargo it carries."
    },
    "attributes" : [ "object" ],
    "id" : "299"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#handledByFreightForwarder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "216",
    "label" : {
      "IRI-based" : "handledByFreightForwarder",
      "en" : "handled by freight forwarder"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Indicates that a freight forwarder is managing the shipment."
    },
    "attributes" : [ "object" ],
    "id" : "300"
  }, {
    "range" : "49",
    "domain" : "303",
    "attributes" : [ "anonymous", "object" ],
    "id" : "302"
  }, {
    "range" : "218",
    "domain" : "305",
    "attributes" : [ "anonymous", "object" ],
    "id" : "304"
  }, {
    "range" : "49",
    "domain" : "307",
    "attributes" : [ "anonymous", "object" ],
    "id" : "306"
  }, {
    "range" : "218",
    "domain" : "217",
    "attributes" : [ "anonymous", "object" ],
    "id" : "309"
  }, {
    "range" : "49",
    "domain" : "65",
    "attributes" : [ "anonymous", "object" ],
    "id" : "310"
  }, {
    "range" : "218",
    "domain" : "316",
    "attributes" : [ "anonymous", "object" ],
    "id" : "315"
  }, {
    "range" : "49",
    "domain" : "318",
    "attributes" : [ "anonymous", "object" ],
    "id" : "317"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#operatedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "112",
    "label" : {
      "IRI-based" : "operatedBy",
      "en" : "operated by"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the airline that operates it."
    },
    "attributes" : [ "object" ],
    "id" : "319"
  }, {
    "range" : "218",
    "domain" : "293",
    "attributes" : [ "anonymous", "object" ],
    "id" : "320"
  }, {
    "range" : "272",
    "domain" : "209",
    "attributes" : [ "anonymous", "object" ],
    "id" : "321"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#leasedUnder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "323",
    "label" : {
      "IRI-based" : "leasedUnder",
      "en" : "leased under"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the lease agreement under which it is operated."
    },
    "attributes" : [ "object" ],
    "id" : "322"
  }, {
    "range" : "218",
    "domain" : "325",
    "attributes" : [ "anonymous", "object" ],
    "id" : "324"
  }, {
    "range" : "272",
    "domain" : "327",
    "attributes" : [ "anonymous", "object" ],
    "id" : "326"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#undergoesExplosiveInspection",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "329",
    "label" : {
      "IRI-based" : "undergoesExplosiveInspection",
      "en" : "undergoes explosive inspection"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Indicates that cargo has passed through an explosive security check."
    },
    "attributes" : [ "object" ],
    "id" : "328"
  }, {
    "range" : "37",
    "domain" : "331",
    "attributes" : [ "anonymous", "object" ],
    "id" : "330"
  }, {
    "range" : "49",
    "domain" : "333",
    "attributes" : [ "anonymous", "object" ],
    "id" : "332"
  }, {
    "range" : "163",
    "domain" : "335",
    "attributes" : [ "anonymous", "object" ],
    "id" : "334"
  }, {
    "range" : "49",
    "domain" : "167",
    "attributes" : [ "anonymous", "object" ],
    "id" : "336"
  }, {
    "range" : "163",
    "domain" : "338",
    "attributes" : [ "anonymous", "object" ],
    "id" : "337"
  }, {
    "range" : "49",
    "domain" : "340",
    "attributes" : [ "anonymous", "object" ],
    "id" : "339"
  }, {
    "range" : "163",
    "domain" : "162",
    "attributes" : [ "anonymous", "object" ],
    "id" : "341"
  }, {
    "range" : "49",
    "domain" : "343",
    "attributes" : [ "anonymous", "object" ],
    "id" : "342"
  }, {
    "range" : "218",
    "domain" : "282",
    "attributes" : [ "anonymous", "object" ],
    "id" : "344"
  }, {
    "range" : "49",
    "domain" : "346",
    "attributes" : [ "anonymous", "object" ],
    "id" : "345"
  }, {
    "range" : "218",
    "domain" : "348",
    "attributes" : [ "anonymous", "object" ],
    "id" : "347"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#managesCargo",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "38",
    "label" : {
      "IRI-based" : "managesCargo",
      "en" : "manages cargo"
    },
    "domain" : "274",
    "comment" : {
      "en" : "Relates an air warehouse to cargo it manages."
    },
    "attributes" : [ "object" ],
    "id" : "350"
  }, {
    "range" : "49",
    "domain" : "237",
    "attributes" : [ "anonymous", "object" ],
    "id" : "357"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#affectedByOperationalEvent",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "24",
    "label" : {
      "IRI-based" : "affectedByOperationalEvent",
      "en" : "affected by operational event"
    },
    "domain" : "237",
    "comment" : {
      "en" : "Relates airport operations to an operational event affecting them."
    },
    "attributes" : [ "object" ],
    "id" : "358"
  }, {
    "range" : "64",
    "domain" : "117",
    "attributes" : [ "anonymous", "object" ],
    "id" : "359"
  }, {
    "range" : "49",
    "domain" : "361",
    "attributes" : [ "anonymous", "object" ],
    "id" : "360"
  }, {
    "range" : "271",
    "domain" : "349",
    "attributes" : [ "anonymous", "object" ],
    "id" : "362"
  }, {
    "range" : "49",
    "domain" : "364",
    "attributes" : [ "anonymous", "object" ],
    "id" : "363"
  }, {
    "range" : "351",
    "domain" : "353",
    "attributes" : [ "anonymous", "object" ],
    "id" : "365"
  }, {
    "range" : "49",
    "domain" : "269",
    "attributes" : [ "anonymous", "object" ],
    "id" : "366"
  }, {
    "range" : "351",
    "domain" : "354",
    "attributes" : [ "anonymous", "object" ],
    "id" : "367"
  }, {
    "range" : "49",
    "domain" : "355",
    "attributes" : [ "anonymous", "object" ],
    "id" : "368"
  }, {
    "range" : "64",
    "domain" : "63",
    "attributes" : [ "anonymous", "object" ],
    "id" : "369"
  }, {
    "range" : "44",
    "domain" : "38",
    "attributes" : [ "anonymous", "object" ],
    "id" : "370"
  }, {
    "range" : "64",
    "domain" : "283",
    "attributes" : [ "anonymous", "object" ],
    "id" : "371"
  }, {
    "range" : "44",
    "domain" : "13",
    "attributes" : [ "anonymous", "object" ],
    "id" : "372"
  }, {
    "range" : "64",
    "domain" : "312",
    "attributes" : [ "anonymous", "object" ],
    "id" : "373"
  }, {
    "range" : "376",
    "domain" : "375",
    "attributes" : [ "anonymous", "object" ],
    "id" : "374"
  }, {
    "range" : "64",
    "domain" : "313",
    "attributes" : [ "anonymous", "object" ],
    "id" : "377"
  }, {
    "range" : "49",
    "domain" : "379",
    "attributes" : [ "anonymous", "object" ],
    "id" : "378"
  }, {
    "range" : "64",
    "domain" : "252",
    "attributes" : [ "anonymous", "object" ],
    "id" : "380"
  }, {
    "range" : "49",
    "domain" : "382",
    "attributes" : [ "anonymous", "object" ],
    "id" : "381"
  }, {
    "range" : "64",
    "domain" : "314",
    "attributes" : [ "anonymous", "object" ],
    "id" : "383"
  }, {
    "range" : "49",
    "domain" : "385",
    "attributes" : [ "anonymous", "object" ],
    "id" : "384"
  }, {
    "range" : "64",
    "domain" : "165",
    "attributes" : [ "anonymous", "object" ],
    "id" : "386"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#locatedAt",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "29",
    "label" : {
      "IRI-based" : "locatedAt",
      "en" : "located at"
    },
    "domain" : "44",
    "comment" : {
      "en" : "Relates a facility or item of equipment to the airport where it is located."
    },
    "attributes" : [ "object" ],
    "id" : "387"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#storedInStorageShed",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "278",
    "label" : {
      "IRI-based" : "storedInStorageShed",
      "en" : "stored in storage shed"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Shows where the cargo is held before or after aircraft loading."
    },
    "attributes" : [ "object" ],
    "id" : "388"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasName",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "391",
    "label" : {
      "IRI-based" : "hasName",
      "en" : "has name"
    },
    "domain" : "7",
    "comment" : {
      "en" : "The name of a person or organization."
    },
    "attributes" : [ "datatype" ],
    "id" : "390"
  }, {
    "range" : "44",
    "domain" : "169",
    "attributes" : [ "anonymous", "object" ],
    "id" : "392"
  }, {
    "range" : "47",
    "domain" : "246",
    "attributes" : [ "anonymous", "object" ],
    "id" : "393"
  }, {
    "range" : "44",
    "domain" : "186",
    "attributes" : [ "anonymous", "object" ],
    "id" : "394"
  }, {
    "range" : "64",
    "domain" : "311",
    "attributes" : [ "anonymous", "object" ],
    "id" : "395"
  }, {
    "range" : "44",
    "domain" : "397",
    "attributes" : [ "anonymous", "object" ],
    "id" : "396"
  }, {
    "range" : "64",
    "domain" : "172",
    "attributes" : [ "anonymous", "object" ],
    "id" : "398"
  }, {
    "range" : "44",
    "domain" : "115",
    "attributes" : [ "anonymous", "object" ],
    "id" : "399"
  }, {
    "range" : "82",
    "domain" : "129",
    "attributes" : [ "anonymous", "object" ],
    "id" : "400"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#flightOperatedBy",
    "inverse" : "402",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "112",
    "label" : {
      "IRI-based" : "flightOperatedBy",
      "en" : "flight operated by"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the airline that operates it (inverse of operatesFlight)."
    },
    "attributes" : [ "object" ],
    "id" : "401"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasConsignee",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "54",
    "label" : {
      "IRI-based" : "hasConsignee",
      "en" : "has consignee"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a consignment to its consignee."
    },
    "attributes" : [ "object" ],
    "id" : "403"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#requiresDeclaration",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "405",
    "label" : {
      "IRI-based" : "requiresDeclaration",
      "en" : "requires declaration"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Relates a consignment to a required customs declaration."
    },
    "attributes" : [ "object" ],
    "id" : "404"
  }, {
    "range" : "159",
    "domain" : "161",
    "attributes" : [ "anonymous", "object" ],
    "id" : "406"
  }, {
    "range" : "126",
    "domain" : "161",
    "attributes" : [ "anonymous", "object" ],
    "id" : "407"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "382",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "408"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasAirOperatorCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "410",
    "label" : {
      "IRI-based" : "hasAirOperatorCertificate",
      "en" : "has air operator certificate"
    },
    "domain" : "112",
    "comment" : {
      "en" : "Relates an airline to its air operator certificate."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "409"
  }, {
    "range" : "82",
    "domain" : "161",
    "attributes" : [ "anonymous", "object" ],
    "id" : "411"
  }, {
    "range" : "129",
    "domain" : "161",
    "attributes" : [ "anonymous", "object" ],
    "id" : "412"
  }, {
    "range" : "240",
    "domain" : "218",
    "attributes" : [ "anonymous", "object" ],
    "id" : "413"
  }, {
    "range" : "118",
    "domain" : "218",
    "attributes" : [ "anonymous", "object" ],
    "id" : "414"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasPart",
    "inverse" : "416",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "415",
    "label" : {
      "IRI-based" : "hasPart",
      "en" : "has part"
    },
    "domain" : "415",
    "subproperty" : [ "168" ],
    "comment" : {
      "en" : "Relates a whole to one of its parts. Transitive: a part of a part is a part of the whole."
    },
    "attributes" : [ "object", "transitive" ],
    "id" : "170"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "418",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "389",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "417"
  }, {
    "range" : "240",
    "domain" : "118",
    "attributes" : [ "anonymous", "object" ],
    "id" : "419"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#classifiedAs",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "287",
    "label" : {
      "IRI-based" : "classifiedAs",
      "en" : "classified as"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Relates cargo to its cargo type classification."
    },
    "attributes" : [ "object" ],
    "id" : "420"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasIATACodeValue",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "422",
    "label" : {
      "IRI-based" : "hasIATACodeValue",
      "en" : "has IATA code value"
    },
    "domain" : "257",
    "comment" : {
      "en" : "The literal 3-letter IATA code value."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "421"
  }, {
    "range" : "118",
    "domain" : "352",
    "attributes" : [ "anonymous", "object" ],
    "id" : "423"
  }, {
    "range" : "218",
    "domain" : "352",
    "attributes" : [ "anonymous", "object" ],
    "id" : "424"
  }, {
    "range" : "240",
    "domain" : "352",
    "attributes" : [ "anonymous", "object" ],
    "id" : "425"
  }, {
    "range" : "218",
    "domain" : "64",
    "attributes" : [ "anonymous", "object" ],
    "id" : "426"
  }, {
    "range" : "352",
    "domain" : "64",
    "attributes" : [ "anonymous", "object" ],
    "id" : "427"
  }, {
    "range" : "240",
    "domain" : "64",
    "attributes" : [ "anonymous", "object" ],
    "id" : "428"
  }, {
    "range" : "118",
    "domain" : "64",
    "attributes" : [ "anonymous", "object" ],
    "id" : "429"
  }, {
    "range" : "218",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "430"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#loadedIn",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "74",
    "label" : {
      "IRI-based" : "loadedIn",
      "en" : "loaded in"
    },
    "domain" : "397",
    "comment" : {
      "en" : "Relates baggage to the cargo hold it is loaded in."
    },
    "attributes" : [ "object" ],
    "id" : "431"
  }, {
    "range" : "240",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "432"
  }, {
    "range" : "118",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "433"
  }, {
    "range" : "338",
    "domain" : "335",
    "attributes" : [ "anonymous", "object" ],
    "id" : "434"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesAirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "10",
    "label" : {
      "IRI-based" : "usesAirwayBill",
      "en" : "uses airway bill"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Indicates that an airway bill is associated with the shipment."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "435"
  }, {
    "range" : "162",
    "domain" : "335",
    "attributes" : [ "anonymous", "object" ],
    "id" : "436"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesSustainableAviationFuel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "349",
    "label" : {
      "IRI-based" : "usesSustainableAviationFuel",
      "en" : "uses sustainable aviation fuel"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to sustainable aviation fuel used in its operation."
    },
    "attributes" : [ "object" ],
    "id" : "437"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCertificateOfAirworthiness",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "123",
    "label" : {
      "IRI-based" : "hasCertificateOfAirworthiness",
      "en" : "has certificate of airworthiness"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to its certificate of airworthiness."
    },
    "attributes" : [ "object" ],
    "id" : "438"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#regulatedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "165",
    "label" : {
      "IRI-based" : "regulatedBy",
      "en" : "regulated by"
    },
    "domain" : "440",
    "comment" : {
      "en" : "Relates an entity (e.g. a flight, operation or organisation) to a policy or regulation that applies to it."
    },
    "attributes" : [ "object" ],
    "id" : "439"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "307",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "192",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "441"
  }, {
    "range" : "240",
    "domain" : "44",
    "attributes" : [ "anonymous", "object" ],
    "id" : "442"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "444",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "174",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "443"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#contributesTo",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "237",
    "label" : {
      "IRI-based" : "contributesTo",
      "en" : "contributes to"
    },
    "domain" : "56",
    "comment" : {
      "en" : "Relates a stakeholder to the airport operations centre they contribute to."
    },
    "attributes" : [ "object" ],
    "id" : "445"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "385",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "364",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "446"
  }, {
    "range" : "44",
    "domain" : "352",
    "attributes" : [ "anonymous", "object" ],
    "id" : "447"
  }, {
    "range" : "44",
    "domain" : "64",
    "attributes" : [ "anonymous", "object" ],
    "id" : "448"
  }, {
    "range" : "118",
    "domain" : "44",
    "attributes" : [ "anonymous", "object" ],
    "id" : "449"
  }, {
    "range" : "44",
    "domain" : "218",
    "attributes" : [ "anonymous", "object" ],
    "id" : "450"
  }, {
    "range" : "44",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "451"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "13",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "74",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "452"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#insuredBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "194",
    "label" : {
      "IRI-based" : "insuredBy",
      "en" : "insured by"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the organization providing its insurance cover."
    },
    "attributes" : [ "object" ],
    "id" : "453"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCapacityValue",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "456",
    "label" : {
      "IRI-based" : "hasCapacityValue",
      "en" : "has capacity value"
    },
    "domain" : "348",
    "comment" : {
      "en" : "The numeric value of a capacity measurement."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "455"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasPackingCompany",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "212",
    "label" : {
      "IRI-based" : "hasPackingCompany",
      "en" : "has packing company"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Associates the cargo with the company responsible for packing."
    },
    "attributes" : [ "object" ],
    "id" : "457"
  }, {
    "range" : "175",
    "domain" : "225",
    "attributes" : [ "anonymous", "object" ],
    "id" : "459"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#receivesGroundHandlingService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "62",
    "label" : {
      "IRI-based" : "receivesGroundHandlingService",
      "en" : "receives ground handling service"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to a ground handling service it receives during turnaround."
    },
    "attributes" : [ "object" ],
    "id" : "460"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "385",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "346",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "461"
  }, {
    "range" : "159",
    "domain" : "126",
    "attributes" : [ "anonymous", "object" ],
    "id" : "462"
  }, {
    "range" : "285",
    "domain" : "219",
    "attributes" : [ "anonymous", "object" ],
    "id" : "463"
  }, {
    "range" : "465",
    "domain" : "220",
    "attributes" : [ "anonymous", "object" ],
    "id" : "464"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesAirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "10",
    "label" : {
      "IRI-based" : "usesAirwayBill",
      "en" : "uses airway bill"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Indicates that an airway bill is associated with the shipment."
    },
    "attributes" : [ "object" ],
    "id" : "466"
  }, {
    "range" : "159",
    "domain" : "129",
    "attributes" : [ "anonymous", "object" ],
    "id" : "467"
  }, {
    "range" : "126",
    "domain" : "129",
    "attributes" : [ "anonymous", "object" ],
    "id" : "468"
  }, {
    "range" : "159",
    "domain" : "82",
    "attributes" : [ "anonymous", "object" ],
    "id" : "469"
  }, {
    "range" : "126",
    "domain" : "82",
    "attributes" : [ "anonymous", "object" ],
    "id" : "470"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "333",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "471"
  }, {
    "range" : "242",
    "domain" : "473",
    "attributes" : [ "anonymous", "object" ],
    "id" : "472"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "318",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "474"
  }, {
    "range" : "242",
    "domain" : "241",
    "attributes" : [ "anonymous", "object" ],
    "id" : "475"
  }, {
    "range" : "124",
    "domain" : "418",
    "attributes" : [ "anonymous", "object" ],
    "id" : "477"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "385",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "478"
  }, {
    "range" : "124",
    "domain" : "480",
    "attributes" : [ "anonymous", "object" ],
    "id" : "479"
  }, {
    "range" : "124",
    "domain" : "482",
    "attributes" : [ "anonymous", "object" ],
    "id" : "481"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#updatesOperationsCentre",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "237",
    "label" : {
      "IRI-based" : "updatesOperationsCentre",
      "en" : "updates operations centre"
    },
    "domain" : "484",
    "comment" : {
      "en" : "Relates a performance service to the operations centre it updates."
    },
    "attributes" : [ "object" ],
    "id" : "483"
  }, {
    "range" : "124",
    "domain" : "486",
    "attributes" : [ "anonymous", "object" ],
    "id" : "485"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "444",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "488",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "487"
  }, {
    "range" : "124",
    "domain" : "410",
    "attributes" : [ "anonymous", "object" ],
    "id" : "489"
  }, {
    "range" : "124",
    "domain" : "123",
    "attributes" : [ "anonymous", "object" ],
    "id" : "490"
  }, {
    "range" : "226",
    "domain" : "175",
    "attributes" : [ "anonymous", "object" ],
    "id" : "491"
  }, {
    "range" : "226",
    "domain" : "291",
    "attributes" : [ "anonymous", "object" ],
    "id" : "492"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "418",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "55",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object" ],
    "id" : "493"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasScheduledDateTime",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "496",
    "label" : {
      "IRI-based" : "hasScheduledDateTime",
      "en" : "has scheduled date time"
    },
    "domain" : "21",
    "comment" : {
      "en" : "The scheduled date and time of a flight event."
    },
    "attributes" : [ "datatype" ],
    "id" : "495"
  }, {
    "range" : "55",
    "domain" : "57",
    "attributes" : [ "anonymous", "object" ],
    "id" : "497"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasOrigin",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "499",
    "label" : {
      "IRI-based" : "hasOrigin",
      "en" : "has origin"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Connects a shipment to its starting point."
    },
    "attributes" : [ "object" ],
    "id" : "498"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "418",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "501",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "500"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "21",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "83",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "502"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "418",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "175",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "503"
  }, {
    "range" : "17",
    "domain" : "9",
    "attributes" : [ "anonymous", "object" ],
    "id" : "504"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#providesAirNavigationService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "506",
    "label" : {
      "IRI-based" : "providesAirNavigationService",
      "en" : "provides air navigation service"
    },
    "domain" : "143",
    "comment" : {
      "en" : "Relates an ANSP to an air traffic service it provides."
    },
    "attributes" : [ "object" ],
    "id" : "505"
  }, {
    "range" : "40",
    "domain" : "12",
    "attributes" : [ "anonymous", "object" ],
    "id" : "507"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsLicense",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "444",
    "label" : {
      "IRI-based" : "holdsLicense",
      "en" : "holds license"
    },
    "domain" : "509",
    "comment" : {
      "en" : "Relates a person to a licence they hold."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "508"
  }, {
    "range" : "241",
    "domain" : "473",
    "attributes" : [ "anonymous", "object" ],
    "id" : "510"
  }, {
    "range" : "31",
    "domain" : "24",
    "attributes" : [ "anonymous", "object" ],
    "id" : "511"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasMedicalCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "482",
    "label" : {
      "IRI-based" : "hasMedicalCertificate",
      "en" : "has medical certificate"
    },
    "domain" : "175",
    "comment" : {
      "en" : "Relates a crew member to their medical certificate."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "512"
  }, {
    "range" : "31",
    "domain" : "514",
    "attributes" : [ "anonymous", "object" ],
    "id" : "513"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesAircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "13",
    "label" : {
      "IRI-based" : "usesAircraft",
      "en" : "uses aircraft"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the aircraft that performs it."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "515"
  }, {
    "range" : "185",
    "domain" : "223",
    "attributes" : [ "anonymous", "object" ],
    "id" : "516"
  }, {
    "range" : "352",
    "domain" : "298",
    "attributes" : [ "anonymous", "object" ],
    "id" : "517"
  }, {
    "range" : "352",
    "domain" : "494",
    "attributes" : [ "anonymous", "object" ],
    "id" : "519"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#providesGroundHandlingService",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "62",
    "label" : {
      "IRI-based" : "providesGroundHandlingService",
      "en" : "provides ground handling service"
    },
    "domain" : "206",
    "comment" : {
      "en" : "Relates a ground handling agent to a service it provides."
    },
    "attributes" : [ "object" ],
    "id" : "520"
  }, {
    "range" : "352",
    "domain" : "297",
    "attributes" : [ "anonymous", "object" ],
    "id" : "521"
  }, {
    "range" : "352",
    "domain" : "523",
    "attributes" : [ "anonymous", "object" ],
    "id" : "522"
  }, {
    "range" : "352",
    "domain" : "525",
    "attributes" : [ "anonymous", "object" ],
    "id" : "524"
  }, {
    "range" : "352",
    "domain" : "527",
    "attributes" : [ "anonymous", "object" ],
    "id" : "526"
  }, {
    "range" : "352",
    "domain" : "351",
    "attributes" : [ "anonymous", "object" ],
    "id" : "528"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#carriesPassenger",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "530",
    "label" : {
      "IRI-based" : "carriesPassenger",
      "en" : "carries passenger"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to a passenger it carries."
    },
    "attributes" : [ "object" ],
    "id" : "529"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasMedicalCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "482",
    "label" : {
      "IRI-based" : "hasMedicalCertificate",
      "en" : "has medical certificate"
    },
    "domain" : "226",
    "comment" : {
      "en" : "Relates a crew member to their medical certificate."
    },
    "attributes" : [ "object" ],
    "id" : "531"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#monitoredByCustomsAgency",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "131",
    "label" : {
      "IRI-based" : "monitoredByCustomsAgency",
      "en" : "monitored by customs agency"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Connects the cargo to the agency managing customs compliance."
    },
    "attributes" : [ "object" ],
    "id" : "532"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#manufacturedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "79",
    "label" : {
      "IRI-based" : "manufacturedBy",
      "en" : "manufactured by"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the manufacturer that produced it."
    },
    "attributes" : [ "object" ],
    "id" : "533"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#requiresPacking",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "535",
    "label" : {
      "IRI-based" : "requiresPacking",
      "en" : "requires packing"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Marks that the cargo needs packaging before transport."
    },
    "attributes" : [ "datatype" ],
    "id" : "534"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "385",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "379",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "537"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#issuesNOTAM",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "536",
    "label" : {
      "IRI-based" : "issuesNOTAM",
      "en" : "issues NOTAM"
    },
    "domain" : "143",
    "comment" : {
      "en" : "Relates an ANSP or authority to a NOTAM it issues."
    },
    "attributes" : [ "object" ],
    "id" : "538"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#requiresHazardLabel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "233",
    "label" : {
      "IRI-based" : "requiresHazardLabel",
      "en" : "requires hazard label"
    },
    "domain" : "42",
    "comment" : {
      "en" : "Indicates the need for a hazard label based on cargo classification."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "539"
  }, {
    "range" : "252",
    "domain" : "117",
    "attributes" : [ "anonymous", "object" ],
    "id" : "540"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasShipper",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "6",
    "label" : {
      "IRI-based" : "hasShipper",
      "en" : "has shipper"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a consignment to its shipper."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "541"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasConsignee",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "54",
    "label" : {
      "IRI-based" : "hasConsignee",
      "en" : "has consignee"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a consignment to its consignee."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "542"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "167",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "545"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#includesCargoItem",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "38",
    "label" : {
      "IRI-based" : "includesCargoItem",
      "en" : "includes cargo item"
    },
    "superproperty" : [ "170" ],
    "domain" : "169",
    "comment" : {
      "en" : "Associates a shipment with its individual cargo items."
    },
    "attributes" : [ "object", "someValues" ],
    "id" : "546"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasICAOCodeValue",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "548",
    "label" : {
      "IRI-based" : "hasICAOCodeValue",
      "en" : "has ICAO code value"
    },
    "domain" : "60",
    "comment" : {
      "en" : "The literal 4-character ICAO code value."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "547"
  }, {
    "range" : "30",
    "domain" : "34",
    "attributes" : [ "anonymous", "object" ],
    "id" : "549"
  }, {
    "range" : "30",
    "domain" : "33",
    "attributes" : [ "anonymous", "object" ],
    "id" : "550"
  }, {
    "range" : "7",
    "domain" : "6",
    "attributes" : [ "anonymous", "object" ],
    "id" : "551"
  }, {
    "range" : "30",
    "domain" : "35",
    "attributes" : [ "anonymous", "object" ],
    "id" : "552"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasAirOperatorCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "410",
    "label" : {
      "IRI-based" : "hasAirOperatorCertificate",
      "en" : "has air operator certificate"
    },
    "domain" : "112",
    "comment" : {
      "en" : "Relates an airline to its air operator certificate."
    },
    "attributes" : [ "object" ],
    "id" : "553"
  }, {
    "range" : "30",
    "domain" : "32",
    "attributes" : [ "anonymous", "object" ],
    "id" : "554"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#controlsFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "21",
    "label" : {
      "IRI-based" : "controlsFlight",
      "en" : "controls flight"
    },
    "domain" : "356",
    "comment" : {
      "en" : "Relates air traffic control to a flight it controls."
    },
    "attributes" : [ "object" ],
    "id" : "556"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#requiresCustomsClearance",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "242",
    "label" : {
      "IRI-based" : "requiresCustomsClearance",
      "en" : "requires customs clearance"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Marks that a shipment needs clearance for export or import."
    },
    "attributes" : [ "object" ],
    "id" : "558"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasDispatchSchedule",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "63",
    "label" : {
      "IRI-based" : "hasDispatchSchedule",
      "en" : "has dispatch schedule"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Associates a shipment with its planned dispatch date and time."
    },
    "attributes" : [ "object" ],
    "id" : "559"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasFlightNumber",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "564",
    "label" : {
      "IRI-based" : "hasFlightNumber",
      "en" : "has flight number"
    },
    "domain" : "21",
    "comment" : {
      "en" : "The designator/flight number assigned to a flight."
    },
    "attributes" : [ "datatype" ],
    "id" : "563"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#subjectToAirworthinessDirective",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "566",
    "label" : {
      "IRI-based" : "subjectToAirworthinessDirective",
      "en" : "subject to airworthiness directive"
    },
    "domain" : "280",
    "comment" : {
      "en" : "Relates an aircraft type to an airworthiness directive that applies to it."
    },
    "attributes" : [ "object" ],
    "id" : "565"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#assignedRoute",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "527",
    "label" : {
      "IRI-based" : "assignedRoute",
      "en" : "assigned route"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to its assigned route."
    },
    "attributes" : [ "object" ],
    "id" : "567"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#forecastBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "166",
    "label" : {
      "IRI-based" : "forecastBy",
      "en" : "forecast by"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to a terminal aerodrome forecast relevant to its conduct."
    },
    "attributes" : [ "object" ],
    "id" : "570"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasLabel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "233",
    "label" : {
      "IRI-based" : "hasLabel",
      "en" : "has label"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Connects cargo to a label containing flight and safety information."
    },
    "attributes" : [ "object" ],
    "id" : "571"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#listedInManifest",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "229",
    "label" : {
      "IRI-based" : "listedInManifest",
      "en" : "listed in manifest"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Relates cargo to the flight manifest it is listed in."
    },
    "attributes" : [ "object" ],
    "id" : "572"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasWarehouse",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "269",
    "label" : {
      "IRI-based" : "hasWarehouse",
      "en" : "has warehouse"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Indicates the warehouse where the cargo is stored."
    },
    "attributes" : [ "object" ],
    "id" : "574"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasChargingPoint",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "192",
    "label" : {
      "IRI-based" : "hasChargingPoint",
      "en" : "has charging point"
    },
    "domain" : "343",
    "comment" : {
      "en" : "Relates a depot to a charging point it hosts."
    },
    "attributes" : [ "object" ],
    "id" : "575"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#reportsSafetyIncident",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "148",
    "label" : {
      "IRI-based" : "reportsSafetyIncident",
      "en" : "reports safety incident"
    },
    "domain" : "226",
    "comment" : {
      "en" : "Relates a crew member to a safety incident they report."
    },
    "attributes" : [ "object" ],
    "id" : "576"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasInvoice",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "122",
    "label" : {
      "IRI-based" : "hasInvoice",
      "en" : "has invoice"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Connects a shipment to its invoice for value declaration."
    },
    "attributes" : [ "object" ],
    "id" : "577"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOfAirNetwork",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "297",
    "label" : {
      "IRI-based" : "partOfAirNetwork",
      "en" : "part of air network"
    },
    "domain" : "29",
    "comment" : {
      "en" : "Relates an airport to the air network it is part of."
    },
    "attributes" : [ "object" ],
    "id" : "578"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasIntermediateStop",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "hasIntermediateStop",
      "en" : "has intermediate stop"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to an aerodrome at which it stops between departure and final arrival."
    },
    "attributes" : [ "object" ],
    "id" : "580"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#arrivedAt",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "arrivedAt",
      "en" : "arrived at"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the airport it arrived at."
    },
    "attributes" : [ "functional", "object" ],
    "id" : "584"
  }, {
    "range" : "7",
    "domain" : "53",
    "attributes" : [ "anonymous", "object" ],
    "id" : "585"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#checkedInAt",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "364",
    "label" : {
      "IRI-based" : "checkedInAt",
      "en" : "checked in at"
    },
    "domain" : "530",
    "comment" : {
      "en" : "Relates a passenger to the check-in counter where they checked in."
    },
    "attributes" : [ "object" ],
    "id" : "586"
  }, {
    "range" : "7",
    "domain" : "52",
    "attributes" : [ "anonymous", "object" ],
    "id" : "587"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesRunway",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "318",
    "label" : {
      "IRI-based" : "usesRunway",
      "en" : "uses runway"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the runway it uses."
    },
    "attributes" : [ "object" ],
    "id" : "588"
  }, {
    "range" : "7",
    "domain" : "54",
    "attributes" : [ "anonymous", "object" ],
    "id" : "589"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#packedIntoULD",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "223",
    "label" : {
      "IRI-based" : "packedIntoULD",
      "en" : "packed into ULD"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Connects individual cargo units to the ULD they are consolidated into."
    },
    "attributes" : [ "object" ],
    "id" : "590"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasShipper",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "6",
    "label" : {
      "IRI-based" : "hasShipper",
      "en" : "has shipper"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a consignment to its shipper."
    },
    "attributes" : [ "object" ],
    "id" : "591"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasArrivalNotice",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "593",
    "label" : {
      "IRI-based" : "hasArrivalNotice",
      "en" : "has arrival notice"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Links the cargo to the document confirming its arrival."
    },
    "attributes" : [ "object" ],
    "id" : "592"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#poweredBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "271",
    "label" : {
      "IRI-based" : "poweredBy",
      "en" : "powered by"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the type of energy source that powers it."
    },
    "attributes" : [ "object" ],
    "id" : "594"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesKPI",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "293",
    "label" : {
      "IRI-based" : "usesKPI",
      "en" : "uses KPI"
    },
    "domain" : "237",
    "comment" : {
      "en" : "Relates an airport operations centre to a KPI it uses to measure performance."
    },
    "attributes" : [ "object" ],
    "id" : "595"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesIATACode",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "257",
    "label" : {
      "IRI-based" : "usesIATACode",
      "en" : "uses IATA code"
    },
    "domain" : "557",
    "comment" : {
      "en" : "Relates an airport or airline to its IATA code."
    },
    "attributes" : [ "object" ],
    "id" : "596"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#occursInAirspace",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "351",
    "label" : {
      "IRI-based" : "occursInAirspace",
      "en" : "occurs in airspace"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the airspace in which it takes place."
    },
    "attributes" : [ "object" ],
    "id" : "597"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasBoardingPass",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "555",
    "label" : {
      "IRI-based" : "hasBoardingPass",
      "en" : "has boarding pass"
    },
    "domain" : "530",
    "comment" : {
      "en" : "Relates a passenger to their boarding pass."
    },
    "attributes" : [ "object" ],
    "id" : "598"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasFlightSchedule",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "259",
    "label" : {
      "IRI-based" : "hasFlightSchedule",
      "en" : "has flight schedule"
    },
    "domain" : "112",
    "comment" : {
      "en" : "Relates an airline to its flight schedule."
    },
    "attributes" : [ "object" ],
    "id" : "599"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#operatesFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "21",
    "label" : {
      "IRI-based" : "operatesFlight",
      "en" : "operates flight"
    },
    "domain" : "112",
    "comment" : {
      "en" : "Relates an airline to a flight it operates."
    },
    "attributes" : [ "object" ],
    "id" : "402"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#travelsOn",
    "inverse" : "529",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "21",
    "label" : {
      "IRI-based" : "travelsOn",
      "en" : "travels on"
    },
    "domain" : "530",
    "comment" : {
      "en" : "Relates a passenger to the flight they travel on."
    },
    "attributes" : [ "object" ],
    "id" : "600"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#emitsCarbon",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "305",
    "label" : {
      "IRI-based" : "emitsCarbon",
      "en" : "emits carbon"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the carbon emissions it produces."
    },
    "attributes" : [ "object" ],
    "id" : "601"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasImporter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "52",
    "label" : {
      "IRI-based" : "hasImporter",
      "en" : "has importer"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a shipment to the importer receiving the goods."
    },
    "attributes" : [ "object" ],
    "id" : "602"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#documentedIn",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "604",
    "label" : {
      "IRI-based" : "documentedIn",
      "en" : "documented in"
    },
    "domain" : "148",
    "comment" : {
      "en" : "Relates a safety incident to the safety report documenting it."
    },
    "attributes" : [ "object" ],
    "id" : "603"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCutTimeValue",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "569",
    "label" : {
      "IRI-based" : "hasCutTimeValue",
      "en" : "has cut time value"
    },
    "domain" : "325",
    "comment" : {
      "en" : "The date and time of a cargo cut-off."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "605"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCrewMember",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "226",
    "label" : {
      "IRI-based" : "hasCrewMember",
      "en" : "has crew member"
    },
    "domain" : "21",
    "subproperty" : [ "607", "608" ],
    "comment" : {
      "en" : "Relates a flight to any member of its crew. Super-property of crewedBy (flight crew) and servedBy (cabin crew)."
    },
    "attributes" : [ "object" ],
    "id" : "606"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasWeightKg",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "561",
    "label" : {
      "IRI-based" : "hasWeightKg",
      "en" : "has weight kg"
    },
    "domain" : "38",
    "comment" : {
      "en" : "The weight of an item of cargo in kilograms."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "609"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCostGBP",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "568",
    "label" : {
      "IRI-based" : "hasCostGBP",
      "en" : "has cost GBP"
    },
    "domain" : "217",
    "comment" : {
      "en" : "A cost value expressed in GBP."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "610"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#employedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "57",
    "label" : {
      "IRI-based" : "employedBy",
      "en" : "employed by"
    },
    "domain" : "55",
    "comment" : {
      "en" : "Relates a person to the organization that employs them."
    },
    "attributes" : [ "object" ],
    "id" : "611"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#deliveredToImporter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "52",
    "label" : {
      "IRI-based" : "deliveredToImporter",
      "en" : "delivered to importer"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Indicates that cargo is transported to the importer's location."
    },
    "attributes" : [ "object" ],
    "id" : "612"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasParty",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "7",
    "label" : {
      "IRI-based" : "hasParty",
      "en" : "has party"
    },
    "domain" : "169",
    "subproperty" : [ "591", "300", "613", "614", "403", "602", "457" ],
    "comment" : {
      "en" : "Relates a consignment to any agent involved in it. Super-property of shipper, consignee, exporter, importer, forwarder, packer and carrier relations, so 'who is involved in this shipment?' is one query."
    },
    "attributes" : [ "object" ],
    "id" : "301"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#crewedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "175",
    "label" : {
      "IRI-based" : "crewedBy",
      "en" : "crewed by"
    },
    "superproperty" : [ "606" ],
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to its flight crew."
    },
    "attributes" : [ "object" ],
    "id" : "607"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasPackingList",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "295",
    "label" : {
      "IRI-based" : "hasPackingList",
      "en" : "has packing list"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Links a shipment to the packing list outlining its contents."
    },
    "attributes" : [ "object" ],
    "id" : "615"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasDestination",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "499",
    "label" : {
      "IRI-based" : "hasDestination",
      "en" : "has destination"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Connects a shipment to its delivery location."
    },
    "attributes" : [ "object" ],
    "id" : "616"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#declaredThroughEDI",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "313",
    "label" : {
      "IRI-based" : "declaredThroughEDI",
      "en" : "declared through EDI"
    },
    "domain" : "405",
    "comment" : {
      "en" : "Indicates the submission of shipment documents through an EDI system."
    },
    "attributes" : [ "object" ],
    "id" : "617"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#assignedToCargoHold",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "74",
    "label" : {
      "IRI-based" : "assignedToCargoHold",
      "en" : "assigned to cargo hold"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Relates cargo to the cargo hold it is assigned to."
    },
    "attributes" : [ "object" ],
    "id" : "618"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasTypeRating",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "486",
    "label" : {
      "IRI-based" : "hasTypeRating",
      "en" : "has type rating"
    },
    "domain" : "175",
    "comment" : {
      "en" : "Relates a pilot to a type rating they hold."
    },
    "attributes" : [ "object" ],
    "id" : "619"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#offsetUnderScheme",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "376",
    "label" : {
      "IRI-based" : "offsetUnderScheme",
      "en" : "offset under scheme"
    },
    "domain" : "305",
    "comment" : {
      "en" : "Relates carbon emissions to the offsetting scheme under which they are addressed."
    },
    "attributes" : [ "object" ],
    "id" : "620"
  }, {
    "range" : "240",
    "domain" : "288",
    "attributes" : [ "anonymous", "object" ],
    "id" : "621"
  }, {
    "range" : "240",
    "domain" : "581",
    "attributes" : [ "anonymous", "object" ],
    "id" : "622"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasCO2Kg",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "476",
    "label" : {
      "IRI-based" : "hasCO2Kg",
      "en" : "has CO2 kg"
    },
    "domain" : "305",
    "comment" : {
      "en" : "The mass of carbon dioxide emitted, in kilograms."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "623"
  }, {
    "range" : "240",
    "domain" : "582",
    "attributes" : [ "anonymous", "object" ],
    "id" : "624"
  }, {
    "range" : "240",
    "domain" : "28",
    "attributes" : [ "anonymous", "object" ],
    "id" : "625"
  }, {
    "range" : "240",
    "domain" : "484",
    "attributes" : [ "anonymous", "object" ],
    "id" : "626"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#occupiesPassengerClass",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "327",
    "label" : {
      "IRI-based" : "occupiesPassengerClass",
      "en" : "occupies passenger class"
    },
    "domain" : "530",
    "comment" : {
      "en" : "Relates a passenger to the class of service they occupy."
    },
    "attributes" : [ "object" ],
    "id" : "627"
  }, {
    "range" : "240",
    "domain" : "260",
    "attributes" : [ "anonymous", "object" ],
    "id" : "628"
  }, {
    "range" : "15",
    "domain" : "14",
    "attributes" : [ "anonymous", "object" ],
    "id" : "629"
  }, {
    "range" : "15",
    "domain" : "308",
    "attributes" : [ "anonymous", "object" ],
    "id" : "630"
  }, {
    "range" : "418",
    "domain" : "444",
    "attributes" : [ "anonymous", "object" ],
    "id" : "631"
  }, {
    "range" : "57",
    "domain" : "79",
    "attributes" : [ "anonymous", "object" ],
    "id" : "632"
  }, {
    "range" : "240",
    "domain" : "506",
    "attributes" : [ "anonymous", "object" ],
    "id" : "633"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#arrivesAtGate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "346",
    "label" : {
      "IRI-based" : "arrivesAtGate",
      "en" : "arrives at gate"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the arrival gate it uses."
    },
    "attributes" : [ "object" ],
    "id" : "634"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#servedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "225",
    "label" : {
      "IRI-based" : "servedBy",
      "en" : "served by"
    },
    "superproperty" : [ "606" ],
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to its cabin crew."
    },
    "attributes" : [ "object" ],
    "id" : "608"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#departsFromGate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "379",
    "label" : {
      "IRI-based" : "departsFromGate",
      "en" : "departs from gate"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the departure gate it uses."
    },
    "attributes" : [ "object" ],
    "id" : "636"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#managesAirport",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "29",
    "label" : {
      "IRI-based" : "managesAirport",
      "en" : "manages airport"
    },
    "domain" : "139",
    "comment" : {
      "en" : "Relates an airport operator to the airport it manages."
    },
    "attributes" : [ "object" ],
    "id" : "637"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#declaredByFreightForwarder",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "216",
    "label" : {
      "IRI-based" : "declaredByFreightForwarder",
      "en" : "declared by freight forwarder"
    },
    "domain" : "405",
    "comment" : {
      "en" : "Indicates the freight forwarder submitted the customs documentation."
    },
    "attributes" : [ "object" ],
    "id" : "638"
  }, {
    "range" : "221",
    "domain" : "220",
    "attributes" : [ "anonymous", "object" ],
    "id" : "639"
  }, {
    "range" : "221",
    "domain" : "329",
    "attributes" : [ "anonymous", "object" ],
    "id" : "640"
  }, {
    "range" : "221",
    "domain" : "573",
    "attributes" : [ "anonymous", "object" ],
    "id" : "641"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#constrainedByCapacity",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "348",
    "label" : {
      "IRI-based" : "constrainedByCapacity",
      "en" : "constrained by capacity"
    },
    "domain" : "237",
    "comment" : {
      "en" : "Relates airport operations to a capacity constraint that affects them."
    },
    "attributes" : [ "object" ],
    "id" : "642"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesAirline",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "112",
    "label" : {
      "IRI-based" : "usesAirline",
      "en" : "uses airline"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Links a shipment to the airline responsible for its transport."
    },
    "attributes" : [ "object" ],
    "id" : "613"
  }, {
    "range" : "221",
    "domain" : "465",
    "attributes" : [ "anonymous", "object" ],
    "id" : "643"
  }, {
    "range" : "165",
    "domain" : "458",
    "attributes" : [ "anonymous", "object" ],
    "id" : "644"
  }, {
    "range" : "165",
    "domain" : "579",
    "attributes" : [ "anonymous", "object" ],
    "id" : "645"
  }, {
    "range" : "165",
    "domain" : "164",
    "attributes" : [ "anonymous", "object" ],
    "id" : "646"
  }, {
    "range" : "165",
    "domain" : "376",
    "attributes" : [ "anonymous", "object" ],
    "id" : "647"
  }, {
    "range" : "165",
    "domain" : "566",
    "attributes" : [ "anonymous", "object" ],
    "id" : "648"
  }, {
    "range" : "55",
    "domain" : "389",
    "attributes" : [ "anonymous", "object" ],
    "id" : "649"
  }, {
    "range" : "31",
    "domain" : "148",
    "attributes" : [ "anonymous", "object" ],
    "id" : "650"
  }, {
    "range" : "55",
    "domain" : "501",
    "attributes" : [ "anonymous", "object" ],
    "id" : "651"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#splitByBreakBulkProcess",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "86",
    "label" : {
      "IRI-based" : "splitByBreakBulkProcess",
      "en" : "split by break bulk process"
    },
    "domain" : "223",
    "comment" : {
      "en" : "Links a ULD to the break-bulk process that decomposes it."
    },
    "attributes" : [ "object" ],
    "id" : "652"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#scheduledBeforeCutTime",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "325",
    "label" : {
      "IRI-based" : "scheduledBeforeCutTime",
      "en" : "scheduled before cut time"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Ensures cargo is processed before the airline's cut-off time."
    },
    "attributes" : [ "object" ],
    "id" : "653"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasShippingInstruction",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "518",
    "label" : {
      "IRI-based" : "hasShippingInstruction",
      "en" : "has shipping instruction"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Connects the export request to the shipping instructions."
    },
    "attributes" : [ "object" ],
    "id" : "654"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasScheduledDepartureTime",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "562",
    "label" : {
      "IRI-based" : "hasScheduledDepartureTime",
      "en" : "has scheduled departure time"
    },
    "domain" : "21",
    "comment" : {
      "en" : "The scheduled off-block/departure date and time of a flight."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "655"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasTypeCertificate",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "480",
    "label" : {
      "IRI-based" : "hasTypeCertificate",
      "en" : "has type certificate"
    },
    "domain" : "280",
    "comment" : {
      "en" : "Relates an aircraft type to its type certificate."
    },
    "attributes" : [ "object" ],
    "id" : "656"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#affectedByWeather",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "454",
    "label" : {
      "IRI-based" : "affectedByWeather",
      "en" : "affected by weather"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to a weather observation relevant to its conduct."
    },
    "attributes" : [ "object" ],
    "id" : "657"
  }, {
    "range" : "117",
    "domain" : "659",
    "attributes" : [ "anonymous", "object" ],
    "id" : "658"
  }, {
    "range" : "118",
    "domain" : "68",
    "attributes" : [ "anonymous", "object" ],
    "id" : "660"
  }, {
    "range" : "117",
    "domain" : "604",
    "attributes" : [ "anonymous", "object" ],
    "id" : "661"
  }, {
    "range" : "118",
    "domain" : "62",
    "attributes" : [ "anonymous", "object" ],
    "id" : "662"
  }, {
    "range" : "117",
    "domain" : "583",
    "attributes" : [ "anonymous", "object" ],
    "id" : "663"
  }, {
    "range" : "175",
    "domain" : "509",
    "attributes" : [ "anonymous", "object" ],
    "id" : "664"
  }, {
    "range" : "117",
    "domain" : "405",
    "attributes" : [ "anonymous", "object" ],
    "id" : "665"
  }, {
    "range" : "175",
    "domain" : "174",
    "attributes" : [ "anonymous", "object" ],
    "id" : "666"
  }, {
    "range" : "117",
    "domain" : "295",
    "attributes" : [ "anonymous", "object" ],
    "id" : "667"
  }, {
    "range" : "175",
    "domain" : "488",
    "attributes" : [ "anonymous", "object" ],
    "id" : "668"
  }, {
    "range" : "117",
    "domain" : "122",
    "attributes" : [ "anonymous", "object" ],
    "id" : "669"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#issuesAirwayBill",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "10",
    "label" : {
      "IRI-based" : "issuesAirwayBill",
      "en" : "issues airway bill"
    },
    "domain" : "216",
    "comment" : {
      "en" : "Relates a freight forwarder to an airway bill it issues."
    },
    "attributes" : [ "object" ],
    "id" : "670"
  }, {
    "range" : "55",
    "domain" : "2",
    "attributes" : [ "anonymous", "object" ],
    "id" : "672"
  }, {
    "range" : "117",
    "domain" : "593",
    "attributes" : [ "anonymous", "object" ],
    "id" : "673"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#ofAircraftType",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "280",
    "label" : {
      "IRI-based" : "ofAircraftType",
      "en" : "of aircraft type"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an individual aircraft to its certificated aircraft type."
    },
    "attributes" : [ "functional", "object" ],
    "id" : "674"
  }, {
    "range" : "55",
    "domain" : "226",
    "attributes" : [ "anonymous", "object" ],
    "id" : "675"
  }, {
    "range" : "117",
    "domain" : "536",
    "attributes" : [ "anonymous", "object" ],
    "id" : "676"
  }, {
    "range" : "55",
    "domain" : "530",
    "attributes" : [ "anonymous", "object" ],
    "id" : "677"
  }, {
    "range" : "31",
    "domain" : "30",
    "attributes" : [ "anonymous", "object" ],
    "id" : "678"
  }, {
    "range" : "118",
    "domain" : "163",
    "attributes" : [ "anonymous", "object" ],
    "id" : "679"
  }, {
    "range" : "117",
    "domain" : "454",
    "attributes" : [ "anonymous", "object" ],
    "id" : "680"
  }, {
    "range" : "118",
    "domain" : "356",
    "attributes" : [ "anonymous", "object" ],
    "id" : "681"
  }, {
    "range" : "117",
    "domain" : "116",
    "attributes" : [ "anonymous", "object" ],
    "id" : "682"
  }, {
    "range" : "118",
    "domain" : "544",
    "attributes" : [ "anonymous", "object" ],
    "id" : "683"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#requiresHazardLabel",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "233",
    "label" : {
      "IRI-based" : "requiresHazardLabel",
      "en" : "requires hazard label"
    },
    "domain" : "42",
    "comment" : {
      "en" : "Indicates the need for a hazard label based on cargo classification."
    },
    "attributes" : [ "object" ],
    "id" : "684"
  }, {
    "range" : "117",
    "domain" : "10",
    "attributes" : [ "anonymous", "object" ],
    "id" : "685"
  }, {
    "range" : "118",
    "domain" : "242",
    "attributes" : [ "anonymous", "object" ],
    "id" : "686"
  }, {
    "range" : "117",
    "domain" : "173",
    "attributes" : [ "anonymous", "object" ],
    "id" : "687"
  }, {
    "range" : "118",
    "domain" : "83",
    "attributes" : [ "anonymous", "object" ],
    "id" : "688"
  }, {
    "range" : "117",
    "domain" : "555",
    "attributes" : [ "anonymous", "object" ],
    "id" : "689"
  }, {
    "range" : "118",
    "domain" : "121",
    "attributes" : [ "anonymous", "object" ],
    "id" : "690"
  }, {
    "range" : "117",
    "domain" : "176",
    "attributes" : [ "anonymous", "object" ],
    "id" : "691"
  }, {
    "range" : "118",
    "domain" : "221",
    "attributes" : [ "anonymous", "object" ],
    "id" : "692"
  }, {
    "range" : "117",
    "domain" : "323",
    "attributes" : [ "anonymous", "object" ],
    "id" : "693"
  }, {
    "range" : "118",
    "domain" : "543",
    "attributes" : [ "anonymous", "object" ],
    "id" : "694"
  }, {
    "range" : "117",
    "domain" : "671",
    "attributes" : [ "anonymous", "object" ],
    "id" : "695"
  }, {
    "range" : "118",
    "domain" : "21",
    "attributes" : [ "anonymous", "object" ],
    "id" : "696"
  }, {
    "range" : "117",
    "domain" : "518",
    "attributes" : [ "anonymous", "object" ],
    "id" : "697"
  }, {
    "range" : "118",
    "domain" : "151",
    "attributes" : [ "anonymous", "object" ],
    "id" : "698"
  }, {
    "range" : "117",
    "domain" : "635",
    "attributes" : [ "anonymous", "object" ],
    "id" : "699"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#containsOperationalData",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "283",
    "label" : {
      "IRI-based" : "containsOperationalData",
      "en" : "contains operational data"
    },
    "domain" : "237",
    "comment" : {
      "en" : "Relates an airport operations centre to the operational data it holds."
    },
    "attributes" : [ "object" ],
    "id" : "700"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#arrivesViaTransitFlight",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "106",
    "label" : {
      "IRI-based" : "arrivesViaTransitFlight",
      "en" : "arrives via transit flight"
    },
    "domain" : "169",
    "comment" : {
      "en" : "Shows that the shipment travels via a flight with layovers."
    },
    "attributes" : [ "object" ],
    "id" : "701"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#usesAircraft",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "13",
    "label" : {
      "IRI-based" : "usesAircraft",
      "en" : "uses aircraft"
    },
    "domain" : "21",
    "comment" : {
      "en" : "Relates a flight to the aircraft that performs it."
    },
    "attributes" : [ "object" ],
    "id" : "702"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#regulatedByAuthority",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "113",
    "label" : {
      "IRI-based" : "regulatedByAuthority",
      "en" : "regulated by authority"
    },
    "domain" : "29",
    "comment" : {
      "en" : "Relates an airport to the regulatory authority overseeing it."
    },
    "attributes" : [ "object" ],
    "id" : "703"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasExporter",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "53",
    "label" : {
      "IRI-based" : "hasExporter",
      "en" : "has exporter"
    },
    "superproperty" : [ "301" ],
    "domain" : "169",
    "comment" : {
      "en" : "Relates a shipment to the exporter responsible for dispatching it."
    },
    "attributes" : [ "object" ],
    "id" : "614"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#hasScheduledArrivalTime",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "560",
    "label" : {
      "IRI-based" : "hasScheduledArrivalTime",
      "en" : "has scheduled arrival time"
    },
    "domain" : "21",
    "comment" : {
      "en" : "The scheduled on-block/arrival date and time of a flight."
    },
    "attributes" : [ "datatype", "functional" ],
    "id" : "704"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#loadedOnFlight",
    "inverse" : "299",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "21",
    "label" : {
      "IRI-based" : "loadedOnFlight",
      "en" : "loaded on flight"
    },
    "domain" : "38",
    "comment" : {
      "en" : "Indicates the specific flight carrying the cargo."
    },
    "attributes" : [ "object" ],
    "id" : "705"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#holdsRoleOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "56",
    "label" : {
      "IRI-based" : "holdsRoleOf",
      "en" : "holds role of"
    },
    "domain" : "55",
    "comment" : {
      "en" : "Relates a person to a stakeholder role they hold in an operation."
    },
    "attributes" : [ "object" ],
    "id" : "706"
  }, {
    "range" : "272",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "707"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#maintainedBy",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "119",
    "label" : {
      "IRI-based" : "maintainedBy",
      "en" : "maintained by"
    },
    "domain" : "13",
    "comment" : {
      "en" : "Relates an aircraft to the organization that maintains it."
    },
    "attributes" : [ "object" ],
    "id" : "708"
  }, {
    "range" : "64",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "709"
  }, {
    "range" : "352",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "710"
  }, {
    "range" : "218",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "711"
  }, {
    "range" : "118",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "712"
  }, {
    "range" : "240",
    "domain" : "7",
    "attributes" : [ "anonymous", "object" ],
    "id" : "713"
  }, {
    "range" : "64",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "714"
  }, {
    "range" : "352",
    "domain" : "272",
    "attributes" : [ "anonymous", "object" ],
    "id" : "715"
  }, {
    "range" : "157",
    "domain" : "147",
    "attributes" : [ "anonymous", "object" ],
    "id" : "716"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#partOf",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "65",
    "label" : {
      "IRI-based" : "partOf",
      "en" : "part of"
    },
    "domain" : "361",
    "comment" : {
      "en" : "Relates a part to the whole it belongs to (e.g. runway to aerodrome, flight phase to flight, cargo hold to aircraft)."
    },
    "attributes" : [ "object", "someValues", "transitive" ],
    "id" : "717"
  }, {
    "iri" : "http://www.cranfield.ac.uk/ontology/air-domain#goesThroughScreening",
    "baseIri" : "http://www.cranfield.ac.uk/ontology/air-domain",
    "range" : "221",
    "label" : {
      "IRI-based" : "goesThroughScreening",
      "en" : "goes through screening"
    },
    "domain" : "530",
    "comment" : {
      "en" : "Relates a passenger to a security screening they go through."
    },
    "attributes" : [ "object" ],
    "id" : "718"
  } ]
};
