import { ExclamationTriangleIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";

export default function HolidayFinderTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("holiday.title")}
      </Heading>

      <Text size="2" align="center">
        {t("holiday.shortDesc")}
      </Text>

      <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
        <GlobeIcon style={{ width: "50%", height: "auto" }} />
      </IconButton>

      <Callout.Root>
        <Callout.Icon>
          <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("holiday.warning")}</Callout.Text>
      </Callout.Root>
    </Flex>
  );
}
