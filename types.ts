
export interface ServiceItem {
  id: string;
  label: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
}

export interface WhyChoosePoint {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ProjectType = 'architecture' | 'home' | 'office' | 'retail' | 'turnkey';
export type FinishLevel = 'economy' | 'premium' | 'luxury';
export type TimelinePreference = 'standard' | 'fast';

export interface CalculatorState {
  step: number;
  projectType: ProjectType;
  propertyType: string;
  location: string;
  area: number;
  scope: {
    kitchen: boolean;
    bedrooms: number;
    livingDining: boolean;
    wardrobes: number;
    falseCeiling: boolean;
    flooringUpgrade: boolean;
    workstations: number; // For office
    displayUnits: boolean; // For retail
  };
  finishLevel: FinishLevel;
  timeline: TimelinePreference;
  leadInfo: {
    name: string;
    mobile: string;
    email: string;
    city: string;
  };
}
