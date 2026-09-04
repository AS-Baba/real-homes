export type PropertyStatus = "available" | "reserved" | "sold";

export type PropertyType =
  | "Apartment"
  | "Duplex"
  | "Terrace"
  | "Villa"
  | "Bungalow";

export interface Property {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;

  location: {
    city: string;
    area: string;
  };

  price: number;

  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  area: number;

  status: PropertyStatus;

  description: string;

  images: string[];

  features: string[];

  project?: string;
}