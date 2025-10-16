import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { Callout, Flex, Heading } from "@radix-ui/themes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import MapChart from "./MapChart";
import ApiForm from "./ApiForm";

export default function ApiBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" justify="center" gap="5">
      <Heading as="h1" size="6" color={dynamicColor} align="center">
        {t("api.map")}
      </Heading>

      <Callout.Root>
        <Callout.Icon>
          <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("api.warning")}</Callout.Text>
      </Callout.Root>

      <MapChart />

      <ApiForm />
    </Flex>
  );
}
