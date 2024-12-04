import { Card, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

type ServicesCardProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

export default function ServicesCard({ icon, title, desc }: ServicesCardProps) {
  const { t } = useTranslation();

  return (
    <Card size="4">
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        gap="3"
      >
        <IconButton size="4" variant="surface" radius="full">
          {icon}
        </IconButton>
        <Heading as="h4" size="2" align="center">
          {t(title)}
        </Heading>
        <Text size="1" align="center">
          {t(desc)}
        </Text>
      </Flex>
    </Card>
  );
}
