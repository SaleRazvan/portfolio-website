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

      <Text size="2">{t("journeys.shortDesc")}</Text>

      <Flex align="center" justify="center" gap="6">
        <PersonalCard
          pfpHref="/razvan.jpg"
          name="Sale Razvan"
          title="Software Engineer"
        />

        <IconButton variant="surface" style={{ height: "60px", width: "60px" }}>
          <ImageIcon style={{ width: "50%", height: "auto" }} />
        </IconButton>

        <PersonalCard
          pfpHref="/roxana.jpg"
          name="Rus Roxana"
          title="QA Engineer"
        />
      </Flex>

      <AlertDialog.Root>
        <AlertDialog.Trigger style={{ cursor: "pointer" }}>
          <Button
            size="3"
            style={{ maxWidth: "30%" }}
            onClick={onKeySubmission}
          >
            {t("journeys.toggle")}
          </Button>
        </AlertDialog.Trigger>

        {/* <AlertDialog.Content maxWidth="384px">
          <AlertDialog.Title size="3">{t("journeys.unlock")}</AlertDialog.Title>
          <AlertDialog.Description size="2" mb="4">
            {t("journeys.unlockDesc")}
          </AlertDialog.Description>

           <TextField.Root
            placeholder={t("journeys.secretKey")}
            size="3"
            color={dynamicColor}
            variant="soft"
            ref={inputRef}
          /> 

           <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Action>
              <Button color={dynamicColor} size="3">
                {t("journeys.submit")}
              </Button>
            </AlertDialog.Action>

            <AlertDialog.Cancel>
              <Button variant="surface" color={dynamicColor} size="3">
                {t("journeys.cancel")}
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content> */}
      </AlertDialog.Root>
    </Flex>
  );
}
