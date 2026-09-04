import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "luxury-four-bedroom-duplex-guzape",
    title: "Prototype — Four Bedroom Duplex",
    type: "Duplex",

    location: {
      city: "Abuja",
      area: "Guzape",
    },

    price: 95000000,

    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 2,
    area: 600,

    status: "available",

    description:
      "A spacious contemporary residence designed for comfortable family living, featuring generous interiors, modern finishes and dedicated outdoor space.",

    images: [
      "/properties/14.jpeg",
      "/properties/16.jpeg",
      "/properties/17.jpeg",
    ],

    features: [
      "Modern kitchen",
      "Fitted wardrobes",
      "Private parking",
      "Estate security",
      "Serviced infrastructure",
      "Staff quarters",
    ],

    project: "Guzape Residences",
  },

  {
    id: "prop-002",
    slug: "contemporary-five-bedroom-home-katampe",
    title: "Prototype — Five Bedroom Villa",
    type: "Villa",

    location: {
      city: "Abuja",
      area: "Katampe",
    },

    price: 125000000,

    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 3,
    area: 720,

    status: "reserved",

    description:
      "A premium residential property concept combining contemporary architecture, generous living spaces and modern estate amenities.",

    images: [
      "/properties/17.jpeg",
      "/properties/15.jpeg",
    ],

    features: [
      "Contemporary architecture",
      "Modern kitchen",
      "Private compound",
      "Estate security",
      "Ample parking",
      "Staff quarters",
    ],

    project: "Katampe Residences",
  },

  {
    id: "prop-003",
    slug: "modern-four-bedroom-terrace-mabushi",
    title: "Prototype — Four Bedroom Terrace",
    type: "Terrace",

    location: {
      city: "Abuja",
      area: "Mabushi",
    },

    price: 75000000,

    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    area: 480,

    status: "sold",

    description:
      "A modern terrace residence designed around practical urban living with contemporary finishes and well-planned spaces.",

    images: [
      "/properties/16.jpeg",
      "/properties/14.jpeg",
    ],

    features: [
      "Contemporary interiors",
      "Modern kitchen",
      "Dedicated parking",
      "Estate security",
      "Reliable infrastructure",
    ],

    project: "Mabushi Residences",
  },
];
