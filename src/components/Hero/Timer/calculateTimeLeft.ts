export type TypeTimeLeft = [
  { type: 'day'; value: number },
  { type: 'hours'; value: number },
  { type: 'minutes'; value: number },
  { type: 'seconds'; value: number }
];

export const calculateTimeLeft = () => {
  const difference =
    Number(new Date('2023-07-11T23:59:00')) - Number(new Date());

  if (difference > 0) {
    const timer: TypeTimeLeft = [
      { type: 'day', value: Math.floor(difference / (1000 * 60 * 60 * 24)) },
      {
        type: 'hours',
        value: Math.floor((difference / (1000 * 60 * 60)) % 24),
      },
      { type: 'minutes', value: Math.floor((difference / 1000 / 60) % 60) },
      { type: 'seconds', value: Math.floor((difference / 1000) % 60) },
    ];
    
    return timer;
  }

  const timer: TypeTimeLeft = [
    { type: 'day', value: 0 },
    { type: 'hours', value: 0 },
    { type: 'minutes', value: 0 },
    { type: 'seconds', value: 0 },
  ];

  return timer;
};
