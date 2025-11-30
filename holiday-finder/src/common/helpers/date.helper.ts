export function monthToDate(monthString) {
  const date = new Date(`${monthString} 15, ${new Date().getFullYear()}`);
  return date.toISOString().split('T')[0];
}

export function addDays(dateString: string, days: number): string {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}
