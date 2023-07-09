type TypeDay = {
  id: 'day1' | 'day2' | 'day3';
  label: string;
  labelExtended: string;
};

export const listDays: TypeDay[] = [
  { id: 'day1', label: 'Dia 1', labelExtended: '23 Setembro' },
  { id: 'day2', label: 'Dia 2', labelExtended: '24 Setembro' },
  { id: 'day3', label: 'Dia 3', labelExtended: '25 Setembro' },
];
