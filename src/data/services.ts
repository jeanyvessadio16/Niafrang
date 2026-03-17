export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Visite guidée du village",
    description:
      "Découvrez l'histoire et la culture du village de Niafrang avec un guide local passionné.",
    icon: "MapPin",
  },
  {
    id: 2,
    name: "Hébergement traditionnel",
    description:
      "Logez dans des maisons traditionnelles authentiques pour une immersion complète dans la vie locale.",
    icon: "Home",
  },
  {
    id: 3,
    name: "Cuisine locale",
    description:
      "Savourez des plats traditionnels préparés avec des ingrédients frais et locaux.",
    icon: "Utensils",
  },
];
