import { Callout, Flex, Grid, Heading } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import SkillProgress from "./SkillProgress";
import {
  BarChartIcon,
  CrumpledPaperIcon,
  DesktopIcon,
  GearIcon,
  GlobeIcon,
  InfoCircledIcon,
  LinkBreak2Icon,
} from "@radix-ui/react-icons";
import ServicesCard from "../services-card/ServicesCard";

export default function SkillsBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" justify="center" gap="5">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("skills.list")}
      </Heading>

      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("services.warning")}</Callout.Text>
      </Callout.Root>

      <Flex
        direction={{ initial: "column", md: "row" }}
        align="center"
        justify="between"
        gap="9"
      >
        <Flex direction="column" gap="5">
          <SkillProgress skill="FrontEnd Development" value={90} isPrimary />
          <SkillProgress skill="UI Frameworks" value={90} isSecondary />
          <SkillProgress skill="React" value={90} />
          <SkillProgress skill="Vue" value={90} />
          <SkillProgress skill="Frontend engineering" value={85} isSecondary />
          <SkillProgress
            skill="Component architecture, optimizations, module bundlers"
            value={85}
          />
          <SkillProgress
            skill="Global state management, routing, accesibility"
            value={85}
          />
          <SkillProgress
            skill="CSS, preprocessors and component libraries"
            value={90}
            isSecondary
          />
        </Flex>

        <Flex direction="column" gap="5">
          <SkillProgress skill="BackEnd Development" value={60} isPrimary />
          <SkillProgress
            skill="NodeJS and elements of server-side logic"
            value={60}
            isSecondary
          />
          <SkillProgress
            skill="RESTful API design and maintenance"
            value={70}
          />
          <SkillProgress
            skill="Server-side Frameworks"
            value={70}
            isSecondary
          />
          <SkillProgress skill="NestJS" value={70} />
          <SkillProgress skill="Express" value={50} />
          <SkillProgress skill="Database manipulation" value={50} isSecondary />
          <SkillProgress
            skill="Schema design, query handling, ORMs, integrations"
            value={50}
          />
        </Flex>

        <Flex direction="column" gap="5">
          <SkillProgress skill="Other related tools" value={80} isPrimary />
          <SkillProgress skill="Unit/e2e testing" value={85} isSecondary />
          <SkillProgress skill="Cypress and Jest" value={85} />
          <SkillProgress
            skill="Agile/UI-UX collaboration"
            value={90}
            isSecondary
          />
          <SkillProgress skill="Tools (Jira, Figma, MiroBoard)" value={90} />
          <SkillProgress skill="Server-Side rendering" value={60} isSecondary />
          <SkillProgress skill="Next/Nuxt JS" value={60} />
          <SkillProgress
            skill="Git and CI/CD integrations (GitHub Actions, Jenkins)"
            value={90}
            isSecondary
          />
        </Flex>
      </Flex>

      <Heading as="h1" size="6" color={dynamicColor} mt="8">
        {t("services.list")}
      </Heading>

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
