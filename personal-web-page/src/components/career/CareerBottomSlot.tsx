import { Flex, Heading, Separator } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import Timeline from "../timeline/Timeline";

export default function CareerBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);
  const achievements = {
    bmw: [
      t("career.bmwAchievement1"),
      t("career.bmwAchievement2"),
      t("career.bmwAchievement3"),
    ],
    ot: [t("career.otAchievement1"), t("career.otAchievement2")],
    endava: [
      t("career.endavaAchievement1"),
      t("career.endavaAchievement2"),
      t("career.endavaAchievement3"),
    ],
  };
  const techStack = {
    bmw: t("career.bmwTechstack"),
    ot: t("career.otTechstack"),
    endava: t("career.endavaTechstack"),
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="5"
      position="relative"
    >
      <Heading as="h1" size="6" color={dynamicColor} align="center">
        {t("career.work")}
      </Heading>

      <Timeline
        role="UI Lead"
        company="BMW TechWorks Romania"
        years="2025 - 2026"
        achievements={achievements.bmw}
        imageSrc="/bmw.png"
        techStack={techStack.bmw}
        insetDir="right"
      />

      <Separator
        orientation="vertical"
        size="2"
        decorative
        color={dynamicColor}
      />

      <Timeline
        role="Frontend Developer"
        company="OpenText"
        years="2025"
        achievements={achievements.ot}
        imageSrc="/ot.png"
        techStack={techStack.ot}
        insetDir="left"
      />

      <Separator
        orientation="vertical"
        size="2"
        decorative
        color={dynamicColor}
      />

      <Timeline
        role="Javascript Developer"
        company="Endava"
        years="2021 - 2025"
        achievements={achievements.endava}
        imageSrc="/endava.png"
        techStack={techStack.endava}
        insetDir="right"
      />
    </Flex>
  );
}
