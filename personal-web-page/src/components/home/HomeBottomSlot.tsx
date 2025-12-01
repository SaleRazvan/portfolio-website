import {
  Badge,
  Button,
  Callout,
  DataList,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import styles from "./HomeBottomSlot.module.scss";
import { getWorkExp } from "../../utils/get-work-exp";
import i18n from "../../../i18n";
import { QuoteIcon } from "@radix-ui/react-icons";

export default function HomeBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);
  const currentLanguage = i18n.resolvedLanguage ?? "en";

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading as="h1" size="6" mb="5" color={dynamicColor}>
        {t("home.about")}
      </Heading>

      <Callout.Root mb="5">
        <Callout.Icon>
          <QuoteIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">
          Good code is like a joke: if you have to explain it, it's not working.
        </Callout.Text>
      </Callout.Root>

      <Flex
        direction={{
          initial: "column",
          md: "row",
        }}
        justify="center"
        align="center"
        gap="8"
      >
        <img className={styles.img} src="/razvan.webp" />
        <Flex
          direction="column"
          gap="4"
          maxWidth={{
            initial: "100%",
            md: "35%",
          }}
        >
          <Heading as="h3" size="3">
            {t("home.subtitle")}
          </Heading>
          <Heading as="h3" size="3" color={dynamicColor}>
            {t("home.developer")}
          </Heading>
          <Text size="2">{t("home.longDesc")}</Text>
          <DataList.Root
            size="1"
            orientation={{
              initial: "vertical",
              md: "horizontal",
            }}
          >
            <DataList.Item>
              <DataList.Label>{t("home.birthday")}</DataList.Label>
              <DataList.Value>March 29, 1999</DataList.Value>
            </DataList.Item>
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
                <>
                  <Badge color="indigo" variant="soft">
                    {t("home.highschool")}
                  </Badge>
                  <Badge color="plum" variant="soft">
                    {t("home.university")}
                  </Badge>
                </>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>{t("home.languages")}</DataList.Label>
              <DataList.Value>
                <>
                  <Badge color="indigo" variant="soft">
                    {t("home.romanian")}
                  </Badge>
                  <Badge color="plum" variant="soft">
                    {t("home.english")}
                  </Badge>
                  <Badge color="orange" variant="soft">
                    {t("home.german")}
                  </Badge>
                </>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>{t("home.hobbies")}</DataList.Label>
              <DataList.Value>
                <>
                  <Badge color="indigo" variant="soft">
                    {t("home.history")}
                  </Badge>
                  <Badge color="plum" variant="soft">
                    {t("home.art")}
                  </Badge>
                  <Badge color="orange" variant="soft">
                    {t("home.sports")}
                  </Badge>
                </>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
          <AlertLinkModal action="home.cv" href="/SALE RAZVAN.pdf">
            <Button size="3">{t("home.cv")}</Button>
          </AlertLinkModal>
        </Flex>
      </Flex>
    </Flex>
  );
}
