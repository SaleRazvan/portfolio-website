import MainLayout from "../layouts/main-layout/MainLayout";
import SkillsBottomSlot from "./SkillsBottomSlot";
import SkillsTopSlot from "./SkillsTopSlot";

export default function Skills() {
  return (
    <MainLayout topSlot={<SkillsTopSlot />} bottomSlot={<SkillsBottomSlot />} />
  );
}
