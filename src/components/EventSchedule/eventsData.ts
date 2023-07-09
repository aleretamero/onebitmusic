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
          image: '/images/artists/Avatar-6.png',
          name: 'Null',
          booth: '3F15',
        },
        {
          image: '/images/artists/Avatar-15.png',
          name: 'Undefined',
          booth: '3F15',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '3:00 PM to 4:00 PM',
      description:
        '"Spaceship e 404 Not Found" - A dupla mais explosiva da galáxia musical! Spaceship, o guitarrista intergaláctico com solos destruidores, se une a 404 Not Found, o baterista perdido em seu próprio ritmo cósmico.',
      artists: [
        {
          image: '/images/artists/Avatar-7.png',
          name: '404 Not Found',
          booth: '4F18',
        },
        {
          image: '/images/artists/Avatar-8.jpeg',
          name: 'Spaceship',
          booth: '9FEC',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '5:00 PM to 6:00 PM',
      description:
        '"Ziri Piri e Infinite Loop" - A dupla mais improvável da música algoritmicamente estranha! Ziri Piri, o mestre das letras sem sentido, une forças com Infinite Loop, o produtor de batidas frenéticas e loops intermináveis.',
      artists: [
        {
          image: '/images/artists/Avatar-9.jpeg',
          name: 'Infinite Loop',
          booth: '5F21',
        },
        {
          image: '/images/artists/Avatar-10.jpg',
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
        'Prepare-se para uma experiência musical futurística com a banda "Cyberwave Coders". Utilizando sintetizadores e sons inspirados no universo da programação, eles criarão paisagens sonoras imersivas e melodias eletrônicas cativantes.',
      artists: [
        {
          image: '/images/artists/Avatar-11.jpeg',
          name: 'Cyberwave',
          booth: '6F09',
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
          image: '/images/artists/Avatar-12.jpeg',
          name: 'Syntax',
          booth: '7E10',
        },
        {
          image: '/images/artists/Avatar-13.jpeg',
          name: 'Error',
          booth: '7E10',
        },
      ],
      status: 'coming-soon',
    },
    {
      time: '5:00 PM to 6:00 PM',
      description:
        'Apresentando a banda "The Bug Hunters" e sua abordagem inovadora da música eletrônica. Eles combinam batidas pulsantes com sons de bugs de programação e samples de código para criar uma experiência sonora única e envolvente.',
      artists: [
        {
          image: '/images/artists/Avatar-14.png',
          name: 'The Bug Hunters',
          booth: '4D21',
        },
      ],
      status: 'coming-soon',
    },
  ],
};
