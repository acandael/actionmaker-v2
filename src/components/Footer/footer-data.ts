interface FooterLink {
  id: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: 'indoor',
    links: [
      { id: 'indoor-lasershooting', url: '/teambuildings/indoor-lasershooting' },
      { id: 'pistoolschieten', url: '/teambuildings/pistoolschieten' },
      { id: 'virtual-reality', url: '/teambuildings/virtual-reality' },
    ],
  },
  {
    title: 'outdoor',
    links: [
      { id: 'kruisboogschieten', url: '/teambuildings/kruisboogschieten' },
      { id: 'laserkleiduifschieten', url: '/teambuildings/laserkleiduifschieten' },
      { id: 'roofvogelworkshop', url: '/teambuildings/roofvogelworkshop' },
    ],
  },
  {
    title: 'workshops',
    links: [
      { id: 'chocoladeworkshop', url: '/teambuildings/chocoladeworkshop' },
      { id: 'djembe', url: '/teambuildings/djembe' },
      { id: 'kunstsmeden', url: '/teambuildings/kunstsmeden' },
    ],
  },
  {
    title: 'city-games',
    links: [
      { id: 'brugse-metten-tocht', url: '/teambuildings/brugse-metten-tocht' },
      { id: 'stroppentocht', url: '/teambuildings/stroppentocht' },
      { id: 'stadsspel', url: '/teambuildings/stadsspel' },
    ],
  },
];
