import { Button, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";
import PersonalCard from "../personal-card/PersonalCard";
import { LayersIcon } from "@radix-ui/react-icons";

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

      <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
        <LayersIcon style={{ width: "50%", height: "auto" }} />
      </IconButton>

      <PersonalCard
        pfpHref="/razvan.jpg"
        name="Sale Razvan"
        title="Software Engineer"
      />

      <AlertLinkModal
        action="dialog.github"
        href="https://github.com/SaleRazvan"
      >
        <Button size="3">{t("services.github")}</Button>
      </AlertLinkModal>
    </Flex>
  );
}
