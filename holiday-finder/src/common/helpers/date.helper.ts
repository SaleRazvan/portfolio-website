export default function monthToDate(monthString) {
  const date = new Date(`${monthString} 15, ${new Date().getFullYear()}`);
  return date.toISOString().split('T')[0];
}
