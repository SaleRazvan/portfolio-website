import { Callout, Flex, Grid, Heading } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import ServicesCard from "../services-card/ServicesCard";
import {
  BarChartIcon,
  CrumpledPaperIcon,
  DesktopIcon,
  GearIcon,
  GlobeIcon,
  InfoCircledIcon,
  LinkBreak2Icon,
} from "@radix-ui/react-icons";

export default function ServicesBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" justify="center" gap="5">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("services.list")}
      </Heading>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("services.warning")}</Callout.Text>
      </Callout.Root>

      <Grid
        columns={{ initial: "2", md: "3" }}
        gap="3"
        rows={{ initial: "3", md: "2" }}
        maxWidth={{ initial: "100%", md: "50%" }}
      >
        <ServicesCard
          icon={<GearIcon style={{ height: "50%", width: "auto" }} />}
          title="services.techconsult.title"
          desc="services.techconsult.desc"
        />
        <ServicesCard
          icon={<CrumpledPaperIcon style={{ height: "50%", width: "auto" }} />}
          title="services.uiuxdesign.title"
          desc="services.uiuxdesign.desc"
        />
        <ServicesCard
          icon={<GlobeIcon style={{ height: "50%", width: "auto" }} />}
          title="services.webdev.title"
          desc="services.webdev.desc"
        />
        <ServicesCard
          icon={<LinkBreak2Icon style={{ height: "50%", width: "auto" }} />}
          title="services.apidev.title"
          desc="services.apidev.desc"
        />
        <ServicesCard
          icon={<DesktopIcon style={{ height: "50%", width: "auto" }} />}
          title="services.serverside.title"
          desc="services.serverside.desc"
        />
        <ServicesCard
          icon={<BarChartIcon style={{ height: "50%", width: "auto" }} />}
          title="services.database.title"
          desc="services.database.desc"
        />
      </Grid>
    </Flex>
  );
}
