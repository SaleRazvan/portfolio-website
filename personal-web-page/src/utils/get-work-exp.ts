export function getWorkExp(lang: string) {
  if (!["en", "ro"].includes(lang))
    return "Could not compute for current language";

  const startDate = new Date("2021-10-01");

  const currentDate = new Date();

  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - startDate.getMonth();

  const totalMonths = yearsDifference * 12 + monthsDifference;

  // Calculate years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return lang === "en"
    ? `${years} years and ${months} ${months === 1 ? "month" : "months"}`
    : `${years} ani si ${months} ${months === 1 ? "luna" : "luni"}`;
}
