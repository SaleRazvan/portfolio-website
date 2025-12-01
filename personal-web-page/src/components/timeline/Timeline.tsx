import { AppContext } from "../../AppContext";
import { useContext, useEffect } from "react";
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
  imagePosition: string;
  techStack: string;
  insetDir: "left" | "right";
};

export default function Timeline({
  role,
  company,
  years,
  achievements,
  imageSrc,
  imagePosition,
  techStack,
  insetDir,
}: TimelineProps) {
  const { dynamicColor, screenWidth } = useContext(AppContext);

  // Ugly workaround to enable scroll on hover-card elements, as Radix-ui doesn't facilitate direct access to this component
  useEffect(() => {
    if (screenWidth > 1024) {
      const hoverCardTimeout = setTimeout(() => {
        const hoverCardElems = document.querySelectorAll<HTMLElement>(
          "[data-radix-popper-content-wrapper]"
        );

        hoverCardElems.forEach((hoverCard) => {
          hoverCard.style.pointerEvents = "none";
        });
      }, 500);

      return () => {
        clearTimeout(hoverCardTimeout);
      };
    }
  }, [screenWidth]);

  return (
    <HoverCard.Root open={true}>
      <HoverCard.Trigger>
        <Box maxWidth={{ initial: "100%", xs: "60%", md: "30%" }}>
          <Card size={{ initial: "3", md: "5" }}>
            <Flex direction="column" align="center" gap="2">
              <Heading as="h3" size="3" color={dynamicColor}>
                {role.toUpperCase()}
              </Heading>

              <Flex gap="2" align="center">
                <Heading as="h4" size="2" color={dynamicColor}>
                  {company}
                </Heading>
                <Heading as="h4" size="2" color={dynamicColor}>
                  {`(${years})`}
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

            {screenWidth > 1024 && (
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
            )}
          </Card>

          {screenWidth < 1024 && (
            <Card size="3" mt="4">
              <Inset side="top" pb="current">
                <img
                  src={imageSrc}
                  alt="Relevant company image"
                  style={{
                    objectFit: "cover",
                    objectPosition: imagePosition,
                    width: "100%",
                    height: 150,
                  }}
                />
              </Inset>
              <Text size="1" as="p" m="auto" align="center">
                {techStack}
              </Text>
            </Card>
          )}
        </Box>
      </HoverCard.Trigger>
    </HoverCard.Root>
  );
}
