import { Callout, Flex, Heading, IconButton } from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";
import { CrossCircledIcon, RocketIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router";
import i18n from "../../../i18n";
import MainLayout from "../layouts/main-layout/MainLayout";

export default function NotAvailable() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);
  const currentLanguage = i18n.resolvedLanguage;
  const navigate = useNavigate();

  return (
    <MainLayout
      topSlot={
        <Flex direction="column" gap="6" align="center">
          <Heading as="h1" size="6" color={dynamicColor}>
            {t("notAvailable.title")}
          </Heading>

          <Callout.Root>
            <Callout.Icon>
              <CrossCircledIcon />
            </Callout.Icon>
            <Callout.Text weight="medium">
              {t("notAvailable.warning")}
            </Callout.Text>
          </Callout.Root>

          <Flex direction="column" align="center" gap="2">
            <Heading as="h3" size="3">
              {t("notAvailable.navigate")}
            </Heading>
            <IconButton
              size="4"
              variant="surface"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/home/${currentLanguage}`)}
            >
              <RocketIcon />
            </IconButton>
          </Flex>
        </Flex>
      }
      bottomSlot={<></>}
    />
  );
}
