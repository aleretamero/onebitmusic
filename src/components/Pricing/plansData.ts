type TypeDataPlan = {
  type: string;
  plan: string;
  price: string;
  benefits: string[];
  button: 'light' | 'dark' | 'red' | 'lightOutlineRed' | 'lightOutlineDark';
};

export const plans: TypeDataPlan[] = [
  {
    type: 'normal',
    plan: 'Basico',
    price: '100',
    benefits: [
      'Acesso aos shows digitais',
      'Experiência musical imersiva',
      'Preço acessível',
    ],
    button: 'lightOutlineDark',
  },
  {
    type: 'normal',
    plan: 'Padrao',
    price: '150',
    benefits: [
      'Acesso aos shows digitais',
      'Benefícios extras',
      'Possibilidade de interagir com os artistas',
    ],
    button: 'dark',
  },
  {
    type: 'vip',
    plan: 'VIP',
    price: '200',
    benefits: [
      'Acesso aos shows digitais',
      'Vantagens adicionais',
      'Experiência VIP',
    ],
    button: 'lightOutlineRed',
  },
];
