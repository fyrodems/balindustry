export const categories = [
  {
    name: 'O firmie',
    link: '/about',
  },
  {
    name: 'Robotyzacja i automatyzacja',
    subcategories: [
      {
        name: 'Stanowisko zrobotyzowane',
        items: [
          {
            name: 'Stanowisko Single',
            image: '/navbarProducts/single.svg',
            link: '/product/single',
          },
          {
            name: 'Stanowisko Dual',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/dual',
          },
          {
            name: 'Stanowisko Twin One-axis',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/twin-one-axis',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Automatyzacja maszyn i urządzeń',
            image: '/navbarProducts/automatyzacja.svg',
            link: '/automation',
          },
        ],
      },
    ],
  },
  {
    name: 'Park maszynowy',
    subcategories: [
      {
        name: 'Dział obróbki metalowej',
        items: [
          { name: 'Waterjet', link: '/product/waterjet' },
          { name: 'TruPunch 5000 | TRUMPF', link: '/product/trupunch-5000' },
          {
            name: 'TrueLaser Tube 7000 fiber',
            link: '/product/truelaser-7000',
          },
          {
            name: 'TrueLaser 3030 fiber | TRUMPF',
            link: '/product/truelaser-3030',
          },
          { name: 'Stanowisko gięcia', link: '/product/bending-station' },
          { name: 'ARC D600', link: '/product/arc-d600' },
          { name: 'ARC B250', link: '/product/arc-b250' },
          { name: 'ARC Trackmotion 2t', link: '/product/arc-trackmotion-2t' },
        ],
      },
      {
        name: 'Dział obróbki CNC',
        items: [
          { name: 'CLX 350', link: '/product/clx-350' },
          { name: 'DMU 75 monoBLOCK', link: '/product/dmu-75-monoblock' },
          { name: 'DMU 210 P', link: '/product/dmu-210-p' },
          { name: 'SPRINT 32I5', link: '/product/sprint-32I5' },
          { name: 'M1', link: '/product/m1' },
          { name: 'Waterjet', link: '/product/waterjet' },
          { name: 'LH', link: '/product/lh' },
          { name: '5 osiowe CNC', link: '/product/5-axis-cnc' },
          { name: 'NLX 2500', link: '/product/nlx-2500' },
        ],
      },
      /* {
        name: 'Lakiernie',
        items: [
          { name: 'Lakiernie mokre i proszkowe', link: '/product(usługi)/paintshops' },
        ],
      }, */
    ],
  },
  {
    name: 'Produkty',
    subcategories: [
      {
        name: '',
        items: [
          {
            name: 'Obróbka powierzchni',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/surface-treatment',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Magazyn pionowy blach',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/vertical-warehouse',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Piece komorowe',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/furnace',
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Lakiernie',
            image: '/navbarProducts/placeholder.svg',
            link: '/product/paintshops-installation',
          },
        ],
      },
      {
        name: 'Spawalnictwo',
        items: [
          { name: 'ALW-1200', link: '/product/alw-1200' },
          { name: 'Flex Cobot Esab', link: '/product/flex-esab' },
          { name: 'Flex Cobot Fronius', link: '/product/flex-fronius' },
        ],
      },
    ],
  },
  {
    name: 'Usługi',
    subcategories: [
      {
        name: '',
        items: [
          {
            name: 'Wycena cięcia',
            image: '',
            link: '', // !!! do uzupełnienia
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Malowanie proszkowe i na mokro',
            image: '',
            link: '', // !!! do uzupełnienia
          },
        ],
      },
      {
        name: '',
        items: [
          {
            name: 'Formularz ofertowy',
            image: '',
            link: '', // !!! do uzupełnienia
          },
        ],
      },
    ],
  },
  {
    name: 'Kontakt',
    link: '/contact',
  },
]
