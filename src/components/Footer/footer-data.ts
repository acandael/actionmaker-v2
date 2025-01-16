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
      { id: 'moord-mystery', url: '/teambuildings/moord-mystery' },
      { id: 'bomkoffer', url: '/teambuildings/bomkoffer' },
      { id: 'laserschermen', url: '/teambuildings/laserschermen' },
      { id: 'mobiele-escaperoom', url: '/teambuildings/mobiele-escaperoom' },
      { id: 'office-games', url: '/teambuildings/office-games' },
      { id: 'space-games', url: '/teambuildings/space-games' },
      { id: 'sumoworstelen', url: '/teambuildings/sumoworstelen' },
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
      { id: 'arrowtag', url: '/teambuildings/arrowtag' },
      { id: 'blaaspijpschieten', url: '/teambuildings/blaaspijpschieten' },
      { id: 'dronevliegen', url: '/teambuildings/dronevliegen' },
      { id: 'excalibur', url: '/teambuildings/excalibur' },
      { id: 'fort-boyard', url: '/teambuildings/fort-boyard' },
      { id: 'funny-olympic-games', url: '/teambuildings/funny-olympic-games' },
      { id: 'gelblaster', url: '/teambuildings/gelblaster' },
      { id: 'highland-games', url: '/teambuildings/highland-games' },
      { id: 'infrarood-biatlon', url: '/teambuildings/infrarood-biatlon' },
      { id: 'middeleeuwse-dag', url: '/teambuildings/middeleeuwse-dag' },
      { id: 'pistoolkruisboogschieten', url: '/teambuildings/pistoolkruisboogschieten' },
      { id: 'schapendrijven', url: '/teambuildings/schapendrijven' },
      { id: 'teambooster', url: '/teambuildings/teambooster' },
      { id: 'volksspelen', url: '/teambuildings/volksspelen' },
      { id: 'vuurlopen', url: '/teambuildings/vuurlopen' },
      { id: 'zweedse-games', url: '/teambuildings/zweedse-games' },
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
      { id: 'chain-reaction', url: '/teambuildings/chain-reaction' },
      { id: 'groupo-universalis', url: '/teambuildings/groupo-universalis' },
      { id: 'innovation-games', url: '/teambuildings/innovation-games' },
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
      { id: 'antwerpse-straffe-handjes', url: '/teambuildings/antwerpse-straffe-handjes' },
      { id: 'de-anderen', url: '/teambuildings/de-anderen' },
      { id: 'expeditie-robinson', url: '/teambuildings/expeditie-robinson' },
      { id: 'james-bond', url: '/teambuildings/james-bond' },
      { id: 'kermis', url: '/teambuildings/kermis' },
      { id: 'mollenjacht', url: '/teambuildings/mollenjacht' },
      { id: 'voetbalmanie', url: '/teambuildings/voetbalmanie' },
    ],
  },
];
