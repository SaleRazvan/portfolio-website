import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { Callout, Flex, Heading } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import MapChart from "./MapChart";

export default function ApiBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" justify="center" gap="6">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("api.map")}
      </Heading>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("api.warning2")}</Callout.Text>
      </Callout.Root>

      <MapChart />
    </Flex>
  );
}
