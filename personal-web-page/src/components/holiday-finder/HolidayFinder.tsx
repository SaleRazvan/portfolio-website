import MainLayout from "../layouts/main-layout/MainLayout";
import HolidayFinderBottomSlot from "./HolidayFinderBottomSlot";
import HolidayFinderTopSlot from "./HolidayFinderTopSlot";

export default function HolidayFinder() {
  return (
    <MainLayout
      topSlot={<HolidayFinderTopSlot />}
      bottomSlot={<HolidayFinderBottomSlot />}
    />
  );
}
