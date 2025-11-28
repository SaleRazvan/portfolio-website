import MainLayout from "../layouts/main-layout/MainLayout";
import CareerBottomSlot from "./CareerBottomSlot";
import CareerTopSlot from "./CareerTopSlot";

export default function Career() {
  return (
    <MainLayout topSlot={<CareerTopSlot />} bottomSlot={<CareerBottomSlot />} />
  );
}
