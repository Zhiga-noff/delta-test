export interface TableData {
  indicator: string;
  today: number;
  yesterday: {
    value: number;
    growth: number;
  };
  week: number;
}
