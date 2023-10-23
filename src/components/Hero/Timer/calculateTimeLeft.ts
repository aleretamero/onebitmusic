export type TypeTimeLeft = [
  { type: 'day'; value: number },
  { type: 'hours'; value: number },
  { type: 'minutes'; value: number },
  { type: 'seconds'; value: number }
];

export const calculateTimeLeft = () => {
  const nextMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );

  const difference = Number(new Date(+nextMonth - 1)) - Number(new Date());

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
