// import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import {
  Box,
  Card,
  Flex,
  Heading,
  HoverCard,
  Inset,
  Reset,
  Text,
} from "@radix-ui/themes";
import styles from "./Timeline.module.scss";

type TimelineProps = {
  role: string;
  company: string;
  years: string;
  achievements: string[];
  imageSrc: string;
  techStack: string;
  insetDir: "left" | "right";
};

export default function Timeline({
  role,
  company,
  years,
  achievements,
  imageSrc,
  techStack,
  insetDir,
}: TimelineProps) {
  //   const { t } = useTranslation();
  const { dynamicColor } = useContext(AppContext);

  return (
    <HoverCard.Root open={true}>
      <HoverCard.Trigger>
        <Box maxWidth={{ initial: "100%", md: "30%" }}>
          <Card size={{ initial: "3", md: "5" }}>
            <Flex direction="column" align="center" gap="2">
              <Heading as="h3" size="3" color={dynamicColor}>
                {role.toUpperCase()}
              </Heading>

              <Flex gap="2" align="center">
                <Heading as="h4" size="2" color={dynamicColor}>
                  {company}
                </Heading>
                <Text size="1">-</Text>
                <Heading as="h4" size="2" color={dynamicColor}>
                  {years}
                </Heading>
              </Flex>

              <Reset>
                <ul>
                  {achievements.map((achievement) => (
                    <li
                      key={achievement}
                      style={{ fontSize: "12px", margin: "12px 0" }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Reset>
            </Flex>

            <HoverCard.Content
              side={insetDir}
              align="center"
              avoidCollisions={false}
              sideOffset={33}
              className={styles.content}
            >
              <Flex>
                <Box asChild flexShrink="0">
                  <Inset side="left" pr="current">
                    <img
                      src={imageSrc}
                      alt="Relevant company image"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        maxWidth: "150px",
                      }}
                    />
                  </Inset>
                </Box>

                <Text size="1" as="p" m="auto" align="center">
                  {techStack}
                </Text>
              </Flex>
            </HoverCard.Content>
          </Card>
        </Box>
      </HoverCard.Trigger>
    </HoverCard.Root>
  );
}
