
import React from 'react';
import { 
  ChefHat, LayoutPanelLeft, Box, Monitor, BookOpen, 
  CloudRain, Zap, Image, Paintbrush, Bath, 
  Home, DoorOpen, Sofa, Baby, Star, ShieldCheck, 
  Clock, Award, Users, MapPin, Search 
} from 'lucide-react';
import { ServiceItem, WhyChoosePoint, Testimonial, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  { id: '1', label: 'Modular Kitchen', iconName: 'ChefHat' },
  { id: '2', label: 'Storage & Wardrobe', iconName: 'Box' },
  { id: '3', label: 'Crockery Units', iconName: 'LayoutPanelLeft' },
  { id: '4', label: 'Space-Saving Furniture', iconName: 'LayoutPanelLeft' },
  { id: '5', label: 'TV Units', iconName: 'Monitor' },
  { id: '6', label: 'Study Tables', iconName: 'BookOpen' },
  { id: '7', label: 'False Ceiling', iconName: 'CloudRain' },
  { id: '8', label: 'Lights', iconName: 'Zap' },
  { id: '9', label: 'Wallpaper', iconName: 'Image' },
  { id: '10', label: 'Wall Paint', iconName: 'Paintbrush' },
  { id: '11', label: 'Bathroom', iconName: 'Bath' },
  { id: '12', label: 'Pooja Unit', iconName: 'Home' },
  { id: '13', label: 'Foyer Designs', iconName: 'DoorOpen' },
  { id: '14', label: 'Movable Furniture', iconName: 'Sofa' },
  { id: '15', label: 'Kids Bedroom', iconName: 'Baby' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rahul Sharma", city: "Gurgaon, Sector 56", rating: 5, text: "Veer Architects transformed my 3BHK into a dream home. The 100% transparency in pricing was a breath of fresh air compared to other local designers." },
  { id: 2, name: "Priya Verma", city: "Gurgaon, DLF Phase 3", rating: 5, text: "Professionalism at its best. They delivered my modular kitchen 2 days before the promised timeline. Highly recommended for interior solutions in Gurgaon!" },
  { id: 3, name: "Amit Goel", city: "Gurgaon, MG Road", rating: 4, text: "The space-saving furniture solutions they provided for my studio apartment are incredible. Every inch of the foyer and living room is optimized." },
];

export const WHY_CHOOSE: WhyChoosePoint[] = [
  { id: 1, title: '100% Transparency', description: 'No hidden costs. Detailed itemized quotation before we start.', icon: 'ShieldCheck' },
  { id: 2, title: 'Project Management', description: 'Single point of contact from concept to execution.', icon: 'Award' },
  { id: 3, title: 'On-Time Delivery', description: '45-day move-in guarantee or we pay you rent.', icon: 'Clock' },
  { id: 4, title: 'Premium Materials', description: 'We only use ISO-certified, moisture-resistant materials.', icon: 'Box' },
  { id: 5, title: 'Expert Architects', description: 'Design-led approach by top Gurgaon-based architects.', icon: 'Users' },
  { id: 6, title: 'Local Expertise', description: 'Deep understanding of Gurgaon apartments and builders.', icon: 'MapPin' },
];

export const FAQS: FAQItem[] = [
  { question: "What is the typical cost of interior design in Gurgaon?", answer: "Interior design costs vary by scope, but at Veer Architects, basic 2BHK interiors start from ₹4 Lakhs, while premium end-to-end solutions can range from ₹8 Lakhs upwards." },
  { question: "How long does a project take to complete?", answer: "Our standard delivery timeline is 45 working days for modular solutions and 60-75 days for full home renovations." },
  { question: "Do you offer services outside of Gurgaon?", answer: "While Gurgaon is our primary hub, we serve clients across All India with a focused team for remote project management." },
  { question: "Why choose Veer Architects over HomeLane or Livspace?", answer: "We offer more customization, lower overhead costs, and direct access to senior architects, ensuring your home isn't just a 'kit-of-parts' but a bespoke masterpiece." },
];

export const getIcon = (name: string, className?: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    ChefHat: <ChefHat className={className} />,
    Box: <Box className={className} />,
    LayoutPanelLeft: <LayoutPanelLeft className={className} />,
    Monitor: <Monitor className={className} />,
    BookOpen: <BookOpen className={className} />,
    CloudRain: <CloudRain className={className} />,
    Zap: <Zap className={className} />,
    Image: <Image className={className} />,
    Paintbrush: <Paintbrush className={className} />,
    Bath: <Bath className={className} />,
    Home: <Home className={className} />,
    DoorOpen: <DoorOpen className={className} />,
    Sofa: <Sofa className={className} />,
    Baby: <Baby className={className} />,
    Star: <Star className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
    Clock: <Clock className={className} />,
    Award: <Award className={className} />,
    Users: <Users className={className} />,
    MapPin: <MapPin className={className} />,
    Search: <Search className={className} />,
  };
  return icons[name] || <Home className={className} />;
};
