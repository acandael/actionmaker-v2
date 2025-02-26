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
      { id: 'indoor-scherminitiatie', url: '/teambuildings/indoor-scherminitiatie' },
      { id: 'indoor-mobiele-escape-room', url: '/teambuildings/indoor-mobiele-escape-room' },
      { id: 'dronevliegen', url: '/teambuildings/dronevliegen' },
      { id: 'virtual-reality', url: '/teambuildings/virtual-reality' },
      { id: 'laser-biatlon', url: '/teambuildings/laser-biatlon' },
      { id: 'indoor-laserschermen', url: '/teambuildings/indoor-laserschermen' },
      { id: 'indoor-arrow-tag', url: '/teambuildings/indoor-arrow-tag' },
      { id: 'smaaktest', url: '/teambuildings/smaaktest' },
      { id: 'chocoladeworkshop', url: '/teambuildings/chocoladeworkshop' },
      { id: 'indoor-sumoworstelen', url: '/teambuildings/indoor-sumoworstelen' },
      { id: 'indoor-blaaspijpschieten', url: '/teambuildings/indoor-blaaspijpschieten' },
      { id: 'indoor-laser-karabijn', url: '/teambuildings/indoor-laser-karabijn' },
      { id: 'volksspelen', url: '/teambuildings/volksspelen' },
      { id: 'indoor-djembe', url: '/teambuildings/indoor-djembe' },
      { id: 'indoor-lasershooting', url: '/teambuildings/indoor-lasershooting' },
      { id: 'indoor-mollenjacht', url: '/teambuildings/indoor-mollenjacht' },
      { id: 'moorddiner', url: '/teambuildings/moorddiner' },
      { id: 'chain-reaction', url: '/teambuildings/chain-reaction' },
      { id: 'groupo-universalis', url: '/teambuildings/groupo-universalis' },
      { id: 'indoor-moord-mystery', url: '/teambuildings/indoor-moord-mystery' },
      { id: 'innovation-games', url: '/teambuildings/innovation-games' },
      { id: 'indoor-de-anderen', url: '/teambuildings/indoor-de-anderen' },
      { id: 'office-games', url: '/teambuildings/office-games' },
      { id: 'space-games', url: '/teambuildings/space-games' },
      { id: 'indoor-james-bond', url: '/teambuildings/indoor-james-bond' },
      { id: 'teambooster', url: '/teambuildings/teambooster' },
      { id: 'indoor-voetbalmanie', url: '/teambuildings/indoor-voetbalmanie' },
    ],
  },
  {
    title: 'footer.sections.outdoor',
    links: [
      { id: 'outdoor-scherminitiatie', url: '/teambuildings/outdoor-scherminitiatie' },
      { id: 'outdoor-mobiele-escape-room', url: '/teambuildings/outdoor-mobiele-escape-room' },
      { id: 'laser-kleiduifschieten', url: '/teambuildings/laser-kleiduifschieten' },
      { id: 'dronevliegen', url: '/teambuildings/dronevliegen' },
      { id: 'bijlwerpen', url: '/teambuildings/bijlwerpen' },
      { id: 'outdoor-laser-karabijn', url: '/teambuildings/outdoor-laser-karabijn' },
      { id: 'kunstsmeden', url: '/teambuildings/kunstsmeden' },
      { id: 'outdoor-laserschermen', url: '/teambuildings/outdoor-laserschermen' },
      { id: 'outdoor-arrowtag', url: '/teambuildings/outdoor-arrow-tag' },
      { id: 'gelblaster', url: '/teambuildings/gelblaster' },
      { id: 'roofvogelworkshop', url: '/teambuildings/roofvogelworkshop' },
      { id: 'outdoor-sumoworstelen', url: '/teambuildings/outdoor-sumoworstelen' },
      { id: 'boogschieten', url: '/teambuildings/boogschieten' },
      { id: 'outdoor-blaaspijpschieten', url: '/teambuildings/outdoor-blaaspijpschieten' },
      { id: 'volksspelen', url: '/teambuildings/volksspelen' },
      { id: 'outdoor-djembe', url: '/teambuildings/outdoor-djembe' },
      { id: 'luchtdruk-pistoolschieten', url: '/teambuildings/luchtdruk-pistoolschieten' },
      { id: 'vuurlopen', url: '/teambuildings/vuurlopen' },
      { id: 'alpacaworkshop', url: '/teambuildings/alpacaworkshop' },
      { id: 'outdoor-mollenjacht', url: '/teambuildings/outdoor-mollenjacht' },
      { id: 'highland-games', url: '/teambuildings/highland-games' },
      { id: 'expeditie-robinson', url: '/teambuildings/expeditie-robinson' },
      { id: 'groupo-universalis', url: '/teambuildings/groupo-universalis' },
      { id: 'outdoor-moord-mystery', url: '/teambuildings/outdoor-moord-mystery' },
      { id: 'teambooster', url: '/teambuildings/teambooster' },
      { id: 'excalibur', url: '/teambuildings/excalibur' },
      { id: 'funny-olympic-games', url: '/teambuildings/funny-olympic-games' },
      { id: 'outdoor-de-anderen', url: '/teambuildings/outdoor-de-anderen' },
      { id: 'middeleeuws-dag', url: '/teambuildings/middeleeuws-dag' },
      { id: 'outdoor-james-bond', url: '/teambuildings/outdoor-james-bond' },
      { id: 'zweedse-games', url: '/teambuildings/zweedse-games' },
      { id: 'outdoor-voetbalmanie', url: '/teambuildings/outdoor-voetbalmanie' },
    ],
  },
  {
    title: 'footer.sections.actief',
    links: [
      { id: 'scherminitiatie', url: '/teambuildings/scherminitiatie' },
      { id: 'laser-schermen', url: '/teambuildings/laser-schermen' },
      { id: 'kunstsmeden', url: '/teambuildings/kunstsmeden' },
      { id: 'arrowtag', url: '/teambuildings/arrowtag' },
      { id: 'gelblaster', url: '/teambuildings/gelblaster' },
      { id: 'outdoor-sumoworstelen', url: '/teambuildings/outdoor-sumoworstelen' },
      { id: 'indoor-sumoworstelen', url: '/teambuildings/indoor-sumoworstelen' },
      { id: 'highland-games', url: '/teambuildings/highland-games' },
      { id: 'funny-olympic-games', url: '/teambuildings/funny-olympic-games' },
      { id: 'expeditie-robinson', url: '/teambuildings/expeditie-robinson' },
      { id: 'fort-boyard', url: '/teambuildings/fort-boyard' },
      { id: 'excalibur', url: '/teambuildings/excalibur' },
      { id: 'zweedse-games', url: '/teambuildings/zweedse-games' },
      { id: 'middeleeuws-dag', url: '/teambuildings/middeleeuws-dag' },
    ],
  },
  {
    title: 'footer.sections.innovaction',
    links: [
      { id: 'laser-schermen', url: '/teambuildings/laser-schermen' },
      { id: 'dronevliegen', url: '/teambuildings/dronevliegen' },
      { id: 'laser-kleiduifschieten', url: '/teambuildings/laser-kleiduifschieten' },
      { id: 'virtual-reality', url: '/teambuildings/virtual-reality' },
      { id: 'laser-biatlon', url: '/teambuildings/laser-biatlon' },
      { id: 'mobiele-escape-room', url: '/teambuildings/mobiele-escape-room' },
      { id: 'gelblaster', url: '/teambuildings/gelblaster' },
      { id: 'indoor-lasershooting', url: '/teambuildings/indoor-lasershooting' },
      { id: 'innovation-games', url: '/teambuildings/innovation-games' },
      { id: 'space-games', url: '/teambuildings/space-games' },
      { id: 'spy-academy', url: '/teambuildings/spy-academy' },
    ],
  },
  {
    title: 'footer.sections.city-games',
    links: [
      { id: 'brugse-metten-tocht', url: '/teambuildings/brugse-metten-tocht' },
      { id: 'antwerpse-straffe-handjes', url: '/teambuildings/antwerpse-straffe-handjes' },
      { id: 'gentse-stroppentocht', url: '/teambuildings/gentse-stroppentocht' },
      { id: 'gents-stadsspel', url: '/teambuildings/gents-stadsspel' },
    ],
  },
  {
    title: 'footer.sections.workshops',
    links: [
      { id: 'smaaktest', url: '/teambuildings/smaaktest' },
      { id: 'chocoladeworkshop', url: '/teambuildings/chocoladeworkshop' },
      { id: 'kunstsmeden', url: '/teambuildings/kunstsmeden' },
      { id: 'vuurlopen', url: '/teambuildings/vuurlopen' },
      { id: 'roofvogelworkshop', url: '/teambuildings/roofvogelworkshop' },
      { id: 'djembe', url: '/teambuildings/djembe' },
      { id: 'alpacaworkshop', url: '/teambuildings/alpacaworkshop' },
    ],
  },
];
