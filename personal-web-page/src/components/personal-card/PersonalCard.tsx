import { Avatar, Box, Flex, Text, Card } from "@radix-ui/themes";

type PersonalCardProps = {
  pfpHref?: string;
  name?: string;
  title?: string;
};

export default function PersonalCard({
  pfpHref,
  name,
  title,
}: PersonalCardProps) {
  return (
    <Card variant="classic">
      <Flex gap="3" align="center">
        <Avatar size="3" src={pfpHref} radius="full" fallback="Avatar" />
        <Box>
          <Text as="div" size={{ initial: "1", md: "2" }} weight="bold">
            {name}
          </Text>
          <Text as="div" size={{ initial: "1", md: "2" }} color="gray">
            {title}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
