export interface Image {
    id: number;
    name: string;
    description: string;
    src: string;
}

export const images: Image[] = [
    {
        id: 1,
        name: "Plages de Niafrang",
        description:
            "Découvrez les plages préservées et cristallines de Niafrang où le sable blanc rencontre les eaux turquoise.",
        src: "/images/plage.jpg",
    },
    {
        id: 2,
        name: "Forêts de Mangroves",
        description:
            "Explorez les mystérieuses mangroves de la Casamance, un écosystème riche et vital pour la région.",
        src: "/images/mangrove.jpg",
    },
    {
        id: 3,
        name: "Arbre Sacré du Fromager",
        description:
            "Visitez le majestueux fromager, symbole spirituel et historique au cœur de Niafrang.",
        src: "/images/fromager.jpg",
    },
];