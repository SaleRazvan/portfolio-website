import {
  AlertDialog,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import PersonalCard from "../personal-card/PersonalCard";
import { ImageIcon } from "@radix-ui/react-icons";

type JourneysTopSlotProps = {
  onKeySubmission: () => void;
};

export default function JourneysTopSlot({
  onKeySubmission,
}: JourneysTopSlotProps) {
  const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading as="h1" size="6" color={dynamicColor}>
        {t("journeys.title")}
      </Heading>

      <Text size="2" align="center">
        {t("journeys.shortDesc")}
      </Text>

      <Flex align="center" justify="center" gap={{ initial: "3", md: "6" }}>
        <PersonalCard
          pfpHref="/razvan.jpg"
          name="Razvan"
          title="Software Engineer"
        />

        <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
          <ImageIcon style={{ width: "50%", height: "auto" }} />
        </IconButton>

        <PersonalCard pfpHref="/roxana.jpg" name="Roxana" title="QA Engineer" />
      </Flex>

      <AlertDialog.Root>
        <AlertDialog.Trigger style={{ cursor: "pointer" }}>
          <Button size="3" onClick={onKeySubmission}>
            {t("journeys.toggle")}
          </Button>
        </AlertDialog.Trigger>
      </AlertDialog.Root>
    </Flex>
  );
}
