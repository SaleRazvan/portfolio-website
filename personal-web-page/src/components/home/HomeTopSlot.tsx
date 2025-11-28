import {
  Badge,
  DataList,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function HomeTopSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex align="center" justify="center" direction="column" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("home.title")}
      </Heading>
      <Text size="2" align="center">
        {t("home.shortDesc")}
      </Text>

      <Flex gap="5">
        <AlertLinkModal
          action="dialog.github"
          href="https://github.com/SaleRazvan"
        >
          <IconButton variant="surface">
            <GitHubLogoIcon />
          </IconButton>
        </AlertLinkModal>
        <AlertLinkModal
          action="dialog.linkedin"
          href="https://www.linkedin.com/in/razvan-sale-059647216/"
        >
          <IconButton variant="surface">
            <LinkedInLogoIcon />
          </IconButton>
        </AlertLinkModal>
        <AlertLinkModal
          action="dialog.email"
          href="mailto:salerazvan@gmail.com"
        >
          <IconButton variant="surface">
            <EnvelopeClosedIcon />
          </IconButton>
        </AlertLinkModal>
      </Flex>

      <DataList.Root mt="4">
        <DataList.Item>
          <DataList.Label>{t("home.workStatus")}</DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft">
              {t("home.available")}
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>{t("home.phone")}</DataList.Label>
          <DataList.Value>0755-829-303</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Email</DataList.Label>
          <DataList.Value>
            <AlertLinkModal
              action="dialog.email"
              href="mailto:salerazvan@gmail.com"
            >
              <Text size="2" color={dynamicColor}>
                salerazvan@gmail.com
              </Text>
            </AlertLinkModal>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>{t("home.company")}</DataList.Label>
          <DataList.Value>
            <AlertLinkModal
              action="dialog.bmw"
              href="https://bmwtechworks.ro/en"
            >
              <Text size="2" color={dynamicColor}>
                BMW TechWorks Romania
              </Text>
            </AlertLinkModal>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Flex>
  );
}
