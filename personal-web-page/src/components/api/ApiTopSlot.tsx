import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { Button, Callout, Flex, Heading, Text } from "@radix-ui/themes";
import PersonalCard from "../personal-card/PersonalCard";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function ApiTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("api.title")}
      </Heading>

      <Text size="2">{t("api.shortDesc")}</Text>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("api.warning2")}</Callout.Text>
      </Callout.Root>

      <PersonalCard />

      <AlertLinkModal
        action="dialog.github"
        href="https://github.com/SaleRazvan/portfolio-website"
      >
        <Button size="3" style={{ maxWidth: "30%" }}>
          {t("api.github")}
        </Button>
      </AlertLinkModal>
    </Flex>
  );
}
