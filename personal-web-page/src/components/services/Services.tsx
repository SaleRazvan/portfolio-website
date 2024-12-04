import MainLayout from "../layouts/main-layout/MainLayout";
import ServicesBottomSlot from "./ServicesBottomSlot";
import ServicesTopSlot from "./ServicesTopSlot";

export default function Services() {
  return (
    <MainLayout
      topSlot={<ServicesTopSlot />}
      bottomSlot={<ServicesBottomSlot />}
    />
  );
}
