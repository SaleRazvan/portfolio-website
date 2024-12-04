import { Avatar, Box, Flex, Text, Card } from "@radix-ui/themes";

export default function PersonalCard() {
  return (
    <Card variant="classic">
      <Flex gap="3" align="center">
        <Avatar size="3" src="/razvan.jpg" radius="full" fallback="Avatar" />
        <Box>
          <Text as="div" size="2" weight="bold">
            Sale Razvan
          </Text>
          <Text as="div" size="2" color="gray">
            Software Engineer
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
