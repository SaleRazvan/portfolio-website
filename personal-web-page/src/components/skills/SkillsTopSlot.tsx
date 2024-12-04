import { Button, Callout, Flex, Heading, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import PersonalCard from "../personal-card/PersonalCard";

export default function SkillsTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("skills.title")}
      </Heading>

      <Text size="2">{t("skills.shortDesc")}</Text>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("services.warning")}</Callout.Text>
      </Callout.Root>

      <PersonalCard />

      <AlertLinkModal
        action="dialog.linkedin"
        href="https://www.linkedin.com/in/razvan-sale-059647216/"
      >
        <Button variant="solid" size="3" style={{ maxWidth: "30%" }}>
          {t("skills.linkedin")}
        </Button>
      </AlertLinkModal>
    </Flex>
  );
}
