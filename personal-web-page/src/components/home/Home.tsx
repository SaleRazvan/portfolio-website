import HomeTopSlot from "./HomeTopSlot";
import HomeBottomSlot from "./HomeBottomSlot";
import MainLayout from "../layouts/main-layout/MainLayout";

export default function Home() {
  return (
    <MainLayout topSlot={<HomeTopSlot />} bottomSlot={<HomeBottomSlot />} />
  );
}
