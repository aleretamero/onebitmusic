type TypeDay = {
  time: string;
  description: string;
  artists: {
    image: string;
    name: string;
    booth: string;
  }[];
  status: 'previa' | 'online' | 'coming-soon';
};

type TypeEvents = {
  day1: TypeDay[];
  day2: TypeDay[];
  day3: TypeDay[];
};

export const events: TypeEvents = {
  day1: [
    {
      time: '11:00 AM to 12:00 PM',
      description:
        'Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes.',
      artists: [
        {
          image: '/images/artists/Avatar-2.svg',
          name: 'Yui Ronald',
          booth: '2F12',
        },
      ],
      status: 'previa',
    },
    {
      time: '12:00 PM to 03:00 PM',
      description:
        'O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.',
      artists: [
        {
          image: '/images/artists/Avatar-1.svg',
          name: 'Bob John',
          booth: '3G12',
        },
        {
          image: '/images/artists/Avatar-2.svg',
          name: 'Yui Ronald',
          booth: '2F12',
        },
        {
          image: '/images/artists/Avatar-3.svg',
          name: 'Emma Satoshi',
          booth: '2A35',
        },
      ],
      status: 'online',
    },
    {
      time: '03:00 PM to 04:00 PM',
      description:
        'A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.',
      artists: [
        {
          image: '/images/artists/Avatar-4.svg',
          name: 'Sasha Jackson',
          booth: '2F18',
        },
        {
          image: '/images/artists/Avatar-5.svg',
          name: 'Diana Brock',
          booth: '2F24',
        },
      ],
      status: 'coming-soon',
    },
  ],
  day2: [
    {
      time: '1:00 PM to 2:00 PM',
      description:
        "Venha se divertir com a banda 'Null and the Undefined', conhecida por seus hits animados e letras divertidas. Prepare-se para dançar e cantar junto com eles!",
      artists: [
        {
          image: '',
          name: 'Null',
          booth: '3F15',
        },
        {
          image: '',
          name: 'Undefined',
          booth: '3F15',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '3:00 PM to 4:00 PM',
      description:
        '"Spaceship Destroyer e 404 Not Found" - A dupla mais explosiva da galáxia musical! Spaceship Destroyer, o guitarrista intergaláctico com solos destruidores, se une a 404 Not Found, o baterista perdido em seu próprio ritmo cósmico.',
      artists: [
        {
          image: '',
          name: '404 Not Found',
          booth: '4F18',
        },
        {
          image: '',
          name: 'Spaceship Destroyer',
          booth: '9FEC',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '5:00 PM to 6:00 PM',
      description:
        '"Ziri Piri e Infinit Loop" - A dupla mais improvável da música algoritmicamente estranha! Ziri Piri, o mestre das letras sem sentido, une forças com Infinit Loop, o produtor de batidas frenéticas e loops intermináveis.',
      artists: [
        {
          image: '',
          name: 'Infinite Loop',
          booth: '5F21',
        },
        {
          image: '',
          name: 'Ziri Piri',
          booth: '8C95',
        },
      ],
      status: 'coming-soon',
    },
  ],
  day3: [
    {
      time: '1:00 PM to 2:00 PM',
      description:
        "Venha se divertir com a banda 'Error 404' e sua música peculiarmente engraçada. Com letras que vão fazer você rir e melodias cativantes, prepare-se para uma tarde de diversão e boas risadas.",
      artists: [
        {
          image: '',
          name: 'Error 404',
          booth: '6D23',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '3:00 PM to 4:00 PM',
      description:
        '"Syntax Error" - A banda que vai desafiar seus ouvidos e seu senso de realidade com suas composições musicais totalmente fora do padrão. Prepare-se para uma experiência sonora caótica e intrigante.',
      artists: [
        {
          image: '',
          name: 'Syntax',
          booth: '7E10',
        },
        {
          image: '',
          name: 'Error',
          booth: '7E10',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '5:00 PM to 6:00 PM',
      description:
        'Prepare-se para um encontro musical de outro mundo com a dupla "Byte Brothers". Esses músicos virtuosos vão levar você a uma viagem sonora através do universo digital, combinando sons eletrônicos e melodias viciantes.',
      artists: [
        {
          image: '',
          name: 'Byte Brothers',
          booth: '2B37',
        },
      ],
      status: 'coming-soon',
    },
  ],
};
