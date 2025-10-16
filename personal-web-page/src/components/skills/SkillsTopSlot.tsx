import { Button, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import PersonalCard from "../personal-card/PersonalCard";
import { MixIcon } from "@radix-ui/react-icons";

export default function SkillsTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("skills.title")}
      </Heading>

      <Text size="2" align="center">
        {t("skills.shortDesc")}
      </Text>

      <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
        <MixIcon style={{ width: "50%", height: "auto" }} />
      </IconButton>

      <PersonalCard
        pfpHref="/razvan.jpg"
        name="Sale Razvan"
        title="Software Engineer"
      />

      <AlertLinkModal
        action="dialog.linkedin"
        href="https://www.linkedin.com/in/razvan-sale-059647216/"
      >
        <Button size="3">{t("skills.linkedin")}</Button>
      </AlertLinkModal>
    </Flex>
  );
}
