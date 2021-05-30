export interface TableData {
  id: string;
  name: string;
  minValue: number;
  maxValue: number;
  available: boolean;
  dateIntroduced?: string; // YYYY-MM-DD
}
