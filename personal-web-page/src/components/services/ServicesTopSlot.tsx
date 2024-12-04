import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, Flex, Heading, Text } from "@radix-ui/themes";
import PersonalCard from "../personal-card/PersonalCard";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";

export default function ServicesTopSlot() {
  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <Flex direction="column" align="center" justify="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("services.title")}
      </Heading>

      <Text size="2" align="center" style={{ maxWidth: "60%" }}>
        {t("services.shortDesc")}
      </Text>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("services.warning")}</Callout.Text>
      </Callout.Root>

      <PersonalCard />

      <AlertLinkModal
        action="dialog.github"
        href="https://github.com/SaleRazvan"
      >
        <Button variant="solid" size="3" style={{ maxWidth: "30%" }}>
          {t("services.github")}
        </Button>
      </AlertLinkModal>
    </Flex>
  );
}
