import { Callout, Flex, Heading } from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import MainLayout from "../layouts/main-layout/MainLayout";
import SmallScreenBottomSlot from "./SmallScreenBottomSlot";

export default function SmallScreen() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <MainLayout
      headerless
      topSlot={
        <Flex direction="column" gap="6" align="center">
          <Heading as="h1" size="6" color={dynamicColor} align="center">
            {t("smallScreen.title")}
          </Heading>

          <Callout.Root>
            <Callout.Icon>
              <CrossCircledIcon />
            </Callout.Icon>
            <Callout.Text weight="medium">
              {t("smallScreen.warning")}
            </Callout.Text>
          </Callout.Root>
        </Flex>
      }
      bottomSlot={<SmallScreenBottomSlot />}
    />
  );
}
