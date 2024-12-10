import { useTranslations } from '@/i18n/utils';

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
    title: 'footer.sections.indoor',
    links: [
      { id: 'indoor-lasershooting', url: '/teambuildings/indoor-lasershooting' },
      { id: 'pistoolschieten', url: '/teambuildings/pistoolschieten' },
      { id: 'virtual-reality', url: '/teambuildings/virtual-reality' },
      { id: 'smaaktest', url: '/teambuildings/smaaktest' },
      { id: 'moorddiner', url: '/teambuildings/moorddiner' },
    ],
  },
  {
    title: 'footer.sections.outdoor',
    links: [
      { id: 'kruisboogschieten', url: '/teambuildings/kruisboogschieten' },
      { id: 'laserkleiduifschieten', url: '/teambuildings/laserkleiduifschieten' },
      { id: 'roofvogelworkshop', url: '/teambuildings/roofvogelworkshop' },
      { id: 'bijlwerpen', url: '/teambuildings/bijlwerpen' },
      { id: 'alpacaworkshop', url: '/teambuildings/alpacaworkshop' },
      { id: 'boogschieten', url: '/teambuildings/boogschieten' },
    ],
  },
  {
    title: 'footer.sections.workshops',
    links: [
      { id: 'chocoladeworkshop', url: '/teambuildings/chocoladeworkshop' },
      { id: 'djembe', url: '/teambuildings/djembe' },
      { id: 'kunstsmeden', url: '/teambuildings/kunstsmeden' },
      { id: 'kookworkshop', url: '/teambuildings/kookworkshop' },
      { id: 'cocktailworkshop', url: '/teambuildings/cocktailworkshop' },
    ],
  },
  {
    title: 'footer.sections.citygames',
    links: [
      { id: 'brugse-metten-tocht', url: '/teambuildings/brugse-metten-tocht' },
      { id: 'stroppentocht', url: '/teambuildings/stroppentocht' },
      { id: 'stadsspel', url: '/teambuildings/stadsspel' },
      { id: 'citygame-brugge', url: '/teambuildings/citygame-brugge' },
      { id: 'citygame-gent', url: '/teambuildings/citygame-gent' },
    ],
  },
];
