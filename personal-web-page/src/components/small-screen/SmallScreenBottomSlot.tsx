import {
  Badge,
  Button,
  Callout,
  DataList,
  Flex,
  Heading,
} from "@radix-ui/themes";
import styles from "./SmallScreenBottomSlot.module.scss";
import { QuoteIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import { getWorkExp } from "../../utils/get-work-exp";
import i18n from "../../../i18n";

export default function SmallScreenBottomSlot() {
  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? "en";

  return (
    <Flex direction="column" justify="center" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("home.about")}
      </Heading>
      <Callout.Root>
        <Callout.Icon>
          <QuoteIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">
          Good code is like a joke: if you have to explain it, it's not working.
        </Callout.Text>
      </Callout.Root>
      <img className={styles.img} src="/razvan.webp" />
      <Heading as="h3" size="3">
        {t("home.subtitle")}
      </Heading>
      <Heading as="h3" size="3" color={dynamicColor}>
        {t("home.developer")}
      </Heading>
      <DataList.Root size="1">
        <DataList.Item>
          <DataList.Label>{t("home.from")}</DataList.Label>
          <DataList.Value>Cluj, Romania</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>{t("home.workexp")}</DataList.Label>
          <DataList.Value>{getWorkExp(currentLanguage)}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>{t("home.education")}</DataList.Label>
          <DataList.Value>
            <Badge color="plum" variant="soft">
              {t("home.university")}
            </Badge>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <AlertLinkModal action="home.cv" href="/SALE RAZVAN.pdf">
        <Button size="3">{t("home.cv")}</Button>
      </AlertLinkModal>
    </Flex>
  );
}
