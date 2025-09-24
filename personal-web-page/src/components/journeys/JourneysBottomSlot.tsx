import { Callout, Flex, Heading, IconButton } from "@radix-ui/themes";
import { useContext, useState } from "react";
import { journeys } from "../../common/constants";
import {
  DrawingPinFilledIcon,
  PinLeftIcon,
  PinRightIcon,
} from "@radix-ui/react-icons";
import styles from "./JourneysBottomSlot.module.scss";
import { AppContext } from "../../AppContext";

export default function JourneysBottomSlot() {
  const { dynamicColor } = useContext(AppContext);
  const [currentTripIdx, setCurrentTripIdx] = useState(0);

  const changeCurrentTripIdx = (direction: "left" | "right") => {
    if (direction === "left" && currentTripIdx - 1 >= 0)
      setCurrentTripIdx((oldcurrentTripIdx) => oldcurrentTripIdx - 1);
    else if (direction === "right" && currentTripIdx + 1 < journeys.length)
      setCurrentTripIdx((oldcurrentTripIdx) => oldcurrentTripIdx + 1);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap="4">
      <>
        <Heading as="h1" size="6" color={dynamicColor}>
          {journeys[currentTripIdx].place}
        </Heading>

        <Callout.Root>
          <Callout.Icon>
            <DrawingPinFilledIcon />
          </Callout.Icon>
          <Callout.Text weight="medium">
            {journeys[currentTripIdx].desc}
          </Callout.Text>
        </Callout.Root>

        <Flex
          justify="center"
          align="center"
          gap="6"
          className={styles.carouselContainer}
          key={currentTripIdx.toString()}
        >
          <IconButton
            variant="surface"
            style={{ height: "60px", width: "60px", cursor: "pointer" }}
            onClick={() => changeCurrentTripIdx("left")}
          >
            <PinLeftIcon style={{ width: "50%", height: "auto" }} />
          </IconButton>

          {journeys[currentTripIdx].imgSrcs.map((imgSrc) => (
            <img src={imgSrc} key={imgSrc} className={styles.tripImg} />
          ))}

          <IconButton
            variant="surface"
            style={{ height: "60px", width: "60px", cursor: "pointer" }}
            onClick={() => changeCurrentTripIdx("right")}
          >
            <PinRightIcon style={{ width: "50%", height: "auto" }} />
          </IconButton>
        </Flex>
      </>
    </Flex>
  );
}
