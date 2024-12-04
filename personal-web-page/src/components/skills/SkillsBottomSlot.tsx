import { Callout, Flex, Heading } from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import SkillProgress from "./SkillProgress";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function SkillsBottomSlot() {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" justify="center" gap="6">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("skills.list")}
      </Heading>

      <Callout.Root>
        <Callout.Icon>
          <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text weight="medium">{t("skills.warning")}</Callout.Text>
      </Callout.Root>

      <Flex align="center" justify="between" gap="9">
        <Flex direction="column" gap="5">
          <SkillProgress skill="FrontEnd Development" value={90} isPrimary />
          <SkillProgress skill="Frameworks" value={90} isSecondary />
          <SkillProgress skill="React" value={90} />
          <SkillProgress skill="Vue" value={75} />
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
          <SkillProgress skill="BackEnd Development" value={70} isPrimary />
          <SkillProgress
            skill="NodeJS and elements of server-side logic"
            value={70}
            isSecondary
          />
          <SkillProgress
            skill="RESTful API design and maintenance"
            value={70}
          />
          <SkillProgress skill="Frameworks" value={70} isSecondary />
          <SkillProgress skill="NestJS" value={80} />
          <SkillProgress skill="Express" value={50} />
          <SkillProgress skill="Database manipulation" value={60} isSecondary />
          <SkillProgress
            skill="Schema design, query handling, ORMs, integrations"
            value={60}
          />
        </Flex>

        <Flex direction="column" gap="5">
          <SkillProgress skill="Associated" value={80} isPrimary />
          <SkillProgress skill="Unit/e2e testing" value={85} isSecondary />
          <SkillProgress skill="Cypress and Jest" value={85} />
          <SkillProgress
            skill="Agile/UI-UX collaboration"
            value={90}
            isSecondary
          />
          <SkillProgress skill="Tools (Jira, Figma, MiroBoard)" value={90} />
          <SkillProgress skill="Server-Side rendering" value={40} isSecondary />
          <SkillProgress skill="NextJS" value={40} />
          <SkillProgress
            skill="Git and CI/CD integrations (GitHub Actions, Jenkins)"
            value={90}
            isSecondary
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
