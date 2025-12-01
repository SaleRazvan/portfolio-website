import {
  Badge,
  Button,
  Callout,
  Card,
  DataList,
  Flex,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
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
        <Card size="2" style={{ maxWidth: "300px" }}>
          <Flex direction="column" gap="2">
            <Inset side="top" pb="current">
              <img
                src="/razvanMain.webp"
                alt="Razvan"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 30%",
                  width: "100%",
                  height: 250,
                }}
              />
            </Inset>
            <Heading as="h3" size="3" color={dynamicColor} align="center">
              {t("home.developer")}
            </Heading>
            <Text size="1" as="p" align="center">
              {t("home.longDesc")}
            </Text>
          </Flex>
        </Card>

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
            Tech stack: JS/TS (ES6+), React/Vue, Next/Nuxt, Express/NestJS
          </Heading>
          <Text size="1" as="p">
            {t("home.rightDesc")}
          </Text>
          <DataList.Root
            size="1"
            orientation={{
              initial: "vertical",
              md: "horizontal",
            }}
          >
            <DataList.Item>
              <DataList.Label>{t("home.birthday")}</DataList.Label>
              <DataList.Value>{t("home.birthDate")}</DataList.Value>
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
