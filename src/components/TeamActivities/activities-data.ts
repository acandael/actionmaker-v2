import {
  Users,
  Building2,
  TreePine,
  MapPin,
  Brush,
  Utensils,
} from "lucide-react";

export interface TeamActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categories?: string[];
  iconName?: string;
  fullDescription?: string;
  duration?: string;
  groupSize?: string;
  price?: string;
  availability?: string;
  features?: string[];
  gallery?: string[];
}

// Map categories to icons
const categoryIcons: Record<string, string> = {
  actief: "Users",
  indoor: "Building2",
  outdoor: "TreePine",
  workshop: "MapPin",
  cultureel: "Brush",
  culinair: "Utensils",
};

export const activities: TeamActivity[] = [
  {
    id: "scherminitiatie",
    title: "Scherminitiatie",
    description:
      'De initiatie schermen laat u kennis maken met deze "ridderlijke" sport die toch voor de meeste mensen nog vrij onbekend is.',
    image: "/schermen-1.jpg",
    category: "actief",
    categories: ["actief", "indoor"],
    iconName: "Users",
    duration: "2 - 3 uur",
    groupSize: "8 - 20 personen",
    price: "Vanaf €45 p.p.",
    availability: "Het hele jaar door",
    features: [
      "Professionele instructeurs",
      "Alle materiaal inbegrepen",
      "Veiligheidsuitrusting aanwezig",
      "Geschikt voor beginners",
    ],
    gallery: [
      "/schermen-2.jpg",
      "/schermen-3.jpg",
      "/schermen-4.jpg",
      "/schermen-5.jpg",
      "/schermen-6.jpg",
      "/schermen-7.jpg",
    ],
  },
  {
    id: "boogschieten",
    title: "Boogschieten",
    description:
      "Het duel zal uitgevochten worden met de recurve boog. Eerst schieten de deelnemers een aantal oefenpijlen.",
    image: "/boogschieten-1.jpg",
    category: "outdoor",
    categories: ["outdoor", "actief"],
    iconName: "TreePine",
    duration: "2 - 3 uur",
    groupSize: "10 - 30 personen",
    price: "Vanaf €40 p.p.",
    availability: "Maart t/m Oktober",
    gallery: [
      "/boogschieten-2.jpg",
      "/boogschieten-3.jpg",
      "/boogschieten-4.jpg",
      "/boogschieten-5.jpg",
      "/boogschieten-6.jpg",
      "/boogschieten-7.jpg",
    ],
  },
  {
    id: "laserkleischieten",
    title: "Laserkleischieten",
    description:
      'Laserkleischieten is sensationeel en veilig. Voor kinderen in de richting van "Starfox".',
    image: "/laserkleiduifschieten-1.jpg",
    category: "actief",
    categories: ["actief", "outdoor"],
    iconName: "Users",
    gallery: [
      "/laserkleiduifschieten-2.jpg",
      "/laserkleiduifschieten-3.jpg",
      "/laserkleiduifschieten-4.jpg",
      "/laserkleiduifschieten-5.jpg",
      "/laserkleiduifschieten-6.jpg",
      "/laserkleiduifschieten-7.jpg",
    ],
  },
  {
    id: "sumoworstelen",
    title: "Sumoworstelen",
    description:
      "Sumoworstelen is dansen en trekken in een dik opgespannen vinyl pak. Met 2 personen bestrijdt u de mat en staat u met de bekende Japanse sport.",
    image: "/sumoworstelen-1.jpg",
    category: "actief",
    categories: ["actief", "indoor"],
    iconName: "Users",
    gallery: [
      "/sumoworstelen-2.jpg",
      "/sumoworstelen-3.jpg",
      "/sumoworstelen-4.jpg",
      "/sumoworstelen-5.jpg",
      "/sumoworstelen-6.jpg",
      "/sumoworstelen-7.jpg",
    ],
  },
  {
    id: "blaaspijpschieten",
    title: "Blaaspijpschieten",
    description:
      "Blaaspijpschieten is een spannende en intrigerende activiteit voor alle leeftijden. Leer de geschiedenis van het blaaspijpschieten kennen.",
    image: "/blaaspijpschieten-1.jpg",
    category: "outdoor",
    categories: ["outdoor", "actief"],
    iconName: "TreePine",
    gallery: [
      "/blaaspijpschieten-2.jpg",
      "/blaaspijpschieten-3.jpg",
      "/blaaspijpschieten-4.jpg",
      "/blaaspijpschieten-5.jpg",
      "/blaaspijpschieten-6.jpg",
      "/blaaspijpschieten-7.jpg",
    ],
  },
  {
    id: "pistoolkruisboogschieten",
    title: "Pistoolkruisboogschieten",
    description:
      "Na een uitleg door een ervaren schutter beginnen we met een initiatie pistoolkruisboogschieten.",
    image: "/pistoolkruisboogschieten-1.jpg",
    category: "indoor",
    categories: ["indoor", "actief"],
    iconName: "Building2",
    gallery: [
      "/pistoolkruisboogschieten-2.jpg",
      "/pistoolkruisboogschieten-3.jpg",
      "/pistoolkruisboogschieten-4.jpg",
      "/pistoolkruisboogschieten-5.jpg",
      "/pistoolkruisboogschieten-6.jpg",
      "/pistoolkruisboogschieten-7.jpg",
    ],
  },
  {
    id: "pistoolschieten",
    title: "Pistoolschieten",
    description:
      "Wie heeft een vaste hand om met luchtdruk pistoolschieten doel de roos te treffen. Wij schieten met een kaliber .177.",
    image: "/pistoolschieten-1.jpg",
    category: "indoor",
    categories: ["indoor", "actief"],
    iconName: "Building2",
    gallery: [
      "/pistoolschieten-2.jpg",
      "/pistoolschieten-3.jpg",
      "/pistoolschieten-4.jpg",
      "/pistoolschieten-5.jpg",
      "/pistoolschieten-6.jpg",
      "/pistoolschieten-7.jpg",
    ],
  },
  {
    id: "kruisboogschieten",
    title: "Kruisboogschieten",
    description:
      "De kruisboog is een eeuwenoud mechanisch wapen. Na een uitleg door een ervaren schutter beginnen we met een initiatie kruisboogschieten.",
    image: "/kruisboogschieten-1.jpg",
    category: "outdoor",
    categories: ["outdoor", "actief"],
    iconName: "TreePine",
    gallery: [
      "/kruisboogschieten-2.jpg",
      "/kruisboogschieten-3.jpg",
      "/kruisboogschieten-4.jpg",
      "/kruisboogschieten-5.jpg",
      "/kruisboogschieten-6.jpg",
      "/kruisboogschieten-7.jpg",
    ],
  },
  {
    id: "chocoladeworkshop",
    title: "Chocoladeworkshop",
    description:
      "Een chocoladeworkshop onder leiding van een professionele chocolatier.",
    image: "/chocoladeworkshop-1.jpg",
    category: "culinair",
    categories: ["culinair", "workshop"],
    iconName: "Utensils",
    gallery: [
      "/chocoladeworkshop-2.jpg",
      "/chocoladeworkshop-3.jpg",
      "/chocoladeworkshop-4.jpg",
      "/chocoladeworkshop-5.jpg",
      "/chocoladeworkshop-6.jpg",
      "/chocoladeworkshop-7.jpg",
    ],
  },
  {
    id: "stadsspel",
    title: "Stadsspel",
    description:
      "Het spel bestaat een legende rond 3 verdwenen bakkers van Keizer Karel.",
    image: "/stadsspel-1.jpg",
    category: "cultureel",
    categories: ["cultureel", "outdoor"],
    iconName: "Brush",
    gallery: [
      "/stadsspel-2.jpg",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "indoor-lasershooting",
    title: "Indoor Lasershooting",
    description:
      "Alternatief in het geval van heel slecht weer met veel wind voor het laserkleischieten of een leuke indooractiviteit.",
    image: "/indoorlasershooting-1.jpg",
    category: "indoor",
    categories: ["indoor", "actief"],
    iconName: "Building2",
    gallery: [
      "/indoorlasershooting-2.jpg",
      "/indoorlasershooting-3.jpg",
      "/indoorlasershooting-4.jpg",
      "/indoorlasershooting-5.jpg",
      "/indoorlasershooting-6.jpg",
      "/indoorlasershooting-7.jpg",
    ],
  },
].map((activity) => ({
  ...activity,
  iconName: activity.iconName || categoryIcons[activity.category] || "Users",
}));
