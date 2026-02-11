import { TableData } from '@/shared/libs/types';

export const tableTemplate: TableData[] = [
  {
    indicator: 'Выручка, руб',
    today: 500_521,
    yesterday: {
      value: 480_521,
      growth: 4,
    },
    week: 4_805_121,
  },
  {
    indicator: 'Наличные',
    today: 300_00,
    yesterday: {
      value: 300_000,
      growth: 0,
    },
    week: 300_000,
  },
  {
    indicator: 'Безналичный расчет',
    today: 100_000,
    yesterday: {
      value: 100_000,
      growth: 0,
    },
    week: 100_000,
  },
  {
    indicator: 'Кредитные карты',
    today: 100_521,
    yesterday: {
      value: 100_521,
      growth: 0,
    },
    week: 100_521,
  },
  {
    indicator: 'Средний чек, руб',
    today: 1300,
    yesterday: {
      value: 900,
      growth: 44,
    },
    week: 900,
  },
  {
    indicator: 'Средний гость, руб',
    today: 1200,
    yesterday: {
      value: 800,
      growth: 50,
    },
    week: 800,
  },
  {
    indicator: 'Удержания из чека (после оплаты), руб',
    today: 1000,
    yesterday: {
      value: 1100,
      growth: -9,
    },
    week: 900,
  },
  {
    indicator: 'Удаления из чека (до оплаты), руб',
    today: 1300,
    yesterday: {
      value: 1300,
      growth: 0,
    },
    week: 900,
  },
  {
    indicator: 'Количество чеков',
    today: 34,
    yesterday: {
      value: 36,
      growth: -6,
    },
    week: 34,
  },
  {
    indicator: 'Количество гостей',
    today: 34,
    yesterday: {
      value: 36,
      growth: -6,
    },
    week: 32,
  },
];
