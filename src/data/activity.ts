export interface Activity {
  id: number;
  name: string;
  description: string;
  icon: string;
  duration?: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    name: "Pêche Traditionnelle",
    description:
      "Accompagnez les pêcheurs locaux lors d'une sortie en mer et apprenez les techniques ancestrales de pêche pratiquées dans les eaux poissonneuses de la région.",
    icon: "Fish",
  },
  {
    id: 2,
    name: "Balade en Pirogue dans la Mangrove",
    description:
      "Explorez les bolongs (canaux) de la mangrove en pirogue à la découverte d'un écosystème unique, peuplé d'oiseaux marins et d'huîtres sauvages.",
    icon: "Waves",
  },
  {
    id: 3,
    name: "Initiation aux Percussions et Danses Diolas",
    description:
      "Participez à une soirée d'immersion culturelle. Apprenez les rythmes envoûtants du djembé et les pas de danse traditionnels au cœur du village.",
    icon: "Music",
  },
  {
    id: 4,
    name: "Riziculture Traditionnelle",
    description:
      "Plongez dans le quotidien des habitants en découvrant les techniques de riziculture diola. Participez aux travaux dans les bolongs et comprenez l'importance de cette culture pour le village.",
    icon: "Sprout",
  },
  {
    id: 5,
    name: "Ostréiculture et Récolte",
    description:
      "Accompagnez les femmes du village dans la récolte traditionnelle des huîtres sur les racines de mangrove. Dégustation d'huîtres fraîches ou cuites au feu de bois incluse.",
    icon: "Shell",
  },
  {
    id: 6,
    name: "Maraîchage Communautaire",
    description:
      "Visitez les jardins maraîchers où les femmes cultivent légumes et herbes aromatiques. Une activité riche en échanges pour comprendre l'agriculture locale durable.",
    icon: "Leaf",
  },
];
