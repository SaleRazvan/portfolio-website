import { monthsMap } from "../common/constants";

export function getDaysInMonth(month?: string, year?: string): number {
  if (!month || !year) return 31;

  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();

  return new Date(Number(year), monthIndex + 1, 0).getDate();
}

export function formatDate(year: string, month: string, day: string): string {
  const monthNumber = monthsMap[month];
  const paddedDay = day.padStart(2, "0");

  return `${year}-${monthNumber}-${paddedDay}`;
}
