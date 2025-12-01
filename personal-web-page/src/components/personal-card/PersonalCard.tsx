import { Avatar, Box, Flex, Text, Card } from "@radix-ui/themes";

type PersonalCardProps = {
  pfpHref: string;
  name: string;
  title: string;
  maxMobileWidth: string;
};

export default function PersonalCard({
  pfpHref,
  name,
  title,
  maxMobileWidth,
}: PersonalCardProps) {
  return (
    <Card>
      <Flex align="center" width={{ initial: maxMobileWidth, md: "150px" }}>
        <Avatar
          size={{ initial: "2", md: "3" }}
          src={pfpHref}
          radius="full"
          fallback="Avatar"
        />
        <Box width="100%">
          <Text
            as="p"
            align="center"
            size={{ initial: "1", md: "2" }}
            weight="bold"
          >
            {name}
          </Text>
          <Text
            as="p"
            align="center"
            size={{ initial: "1", md: "2" }}
            color="gray"
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
