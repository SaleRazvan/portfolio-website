import { Box, Flex, Progress, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

type SkillProgressProps = {
  skill: string;
  value: number;
  isPrimary?: boolean;
  isSecondary?: boolean;
};

export default function SkillProgress({
  skill,
  value,
  isPrimary,
  isSecondary,
}: SkillProgressProps) {
  const { dynamicColor } = useContext(AppContext);
  const localColor = isPrimary ? "ruby" : isSecondary ? "jade" : dynamicColor;

  return (
    <Box width="300px">
      <Flex justify="between">
        <Text size="1" color={localColor}>
          {skill}
        </Text>
        <Text size="1" color={localColor}>{`${value}%`}</Text>
      </Flex>
      <Progress value={value} mt="1" color={localColor} />
    </Box>
  );
}
