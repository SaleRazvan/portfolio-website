import { Callout, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { BellIcon, ReaderIcon } from "@radix-ui/react-icons";

export default function CareerTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("career.title")}
      </Heading>

      <Text size="2" align="center">
        {t("career.shortDesc")}
      </Text>

      <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
        <ReaderIcon style={{ width: "50%", height: "auto" }} />
      </IconButton>

      <Callout.Root>
        <Callout.Icon>
          <BellIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("career.info")}</Callout.Text>
      </Callout.Root>
    </Flex>
  );
}
