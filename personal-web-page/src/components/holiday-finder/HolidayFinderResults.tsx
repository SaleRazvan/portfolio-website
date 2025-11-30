import { Card, Flex, Heading, Inset } from "@radix-ui/themes";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function HolidayFinderResults() {
  const { dynamicColor } = useContext(AppContext);

  return (
    <Flex direction="column" align="stretch" gap="6" minWidth="25%">
      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/search1.png"
            alt="General preferances image"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading as="h4" size="2" color={dynamicColor} mb="4" align="center">
          General preferences
        </Heading>
      </Card>

      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/search2.png"
            alt="General preferances image"
            style={{
              objectFit: "cover",
              objectPosition: "50% 27.5%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading as="h4" size="2" color={dynamicColor} mb="4" align="center">
          General preferences
        </Heading>
      </Card>

      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/search3.png"
            alt="General preferances image"
            style={{
              objectFit: "cover",
              objectPosition: "50% 55%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading as="h4" size="2" color={dynamicColor} mb="4" align="center">
          General preferences
        </Heading>
      </Card>
    </Flex>
  );
}
