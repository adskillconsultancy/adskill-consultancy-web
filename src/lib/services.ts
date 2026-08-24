import data from "../../context/services.json";

export interface QuickFacts {
  [key: string]: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  short_description: string;
  benefits: ServiceItem[];
  eligibility: ServiceItem[];
  process: ProcessStep[];
  quick_facts: QuickFacts;
  link: string;
}

export const services: Service[] = data as unknown as Service[];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
