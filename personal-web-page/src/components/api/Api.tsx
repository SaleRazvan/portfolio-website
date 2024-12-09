import MainLayout from "../layouts/main-layout/MainLayout";
import ApiBottomSlot from "./ApiBottomSlot";
import ApiTopSlot from "./ApiTopSlot";

export default function Api() {
  return <MainLayout topSlot={<ApiTopSlot />} bottomSlot={<ApiBottomSlot />} />;
}
