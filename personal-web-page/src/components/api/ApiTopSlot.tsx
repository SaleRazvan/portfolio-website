import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { Callout, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { InfoCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export default function ApiTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("api.title")}
      </Heading>

      <Text size="2" align="center">
        {t("api.shortDesc")}
      </Text>

      <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
        <LightningBoltIcon style={{ width: "50%", height: "auto" }} />
      </IconButton>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("api.warning2")}</Callout.Text>
      </Callout.Root>
    </Flex>
  );
}
