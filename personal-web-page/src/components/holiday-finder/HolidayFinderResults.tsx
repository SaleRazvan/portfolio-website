import {
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Progress,
  Text,
} from "@radix-ui/themes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { TravelSuggestionsResponse } from "../../common/types";
import AlertLinkModal from "../alert-link-modal/AlertLinkModal";
import { useTranslation } from "react-i18next";

type HolidayFinderResultsProps = {
  generatedTrips?: TravelSuggestionsResponse;
  isProcessingRequest: boolean;
};

export default function HolidayFinderResults({
  generatedTrips,
  isProcessingRequest,
}: HolidayFinderResultsProps) {
  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();
  const formattedTrips =
    generatedTrips &&
    generatedTrips.map((trip) => ({
      title: `${trip.city}, ${trip.country}`,
      image: trip.image,
      shortDesc: trip.reason,
      url: trip.bookingUrl,
      flight:
        typeof trip.flight === "string"
          ? trip.flight
          : t("flight.cheapestFound", {
              flightName: trip.flight.flightName,
              stops: trip.flight.stops,
              cabinType: trip.flight.cabinType,
              price: trip.flight.price,
            }),
    }));
  const fallbackCards = [
    {
      title: t("holiday.fallbackTitle1"),
      image: "/search1.png",
      shortDesc: t("holiday.fallbackDesc"),
      url: "",
      flight: "",
    },
    {
      title: t("holiday.fallbackTitle2"),
      image: "/search2.png",
      shortDesc: t("holiday.fallbackDesc"),
      url: "",
      flight: "",
    },
    {
      title: t("holiday.fallbackTitle3"),
      image: "/search3.png",
      shortDesc: t("holiday.fallbackDesc"),
      url: "",
      flight: "",
    },
  ];

  const displayedCards = generatedTrips ? formattedTrips : fallbackCards;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isProcessingRequest) return;

    let COUNT = 0;
    const DURATION = 10000;
    const STEP = 100;
    const INCREMENT = (100 * STEP) / DURATION;

    const timer = setInterval(() => {
      if (formattedTrips) {
        setProgress(100);
        clearInterval(timer);
      } else if (COUNT >= 100) {
        COUNT = 0;
        setProgress(0);
      } else {
        COUNT += INCREMENT;
        setProgress(COUNT);
      }
    }, STEP);

    return () => clearInterval(timer);
  }, [formattedTrips, isProcessingRequest]);

  return (
    <Flex direction="column" align="stretch" gap="6" minWidth="25%">
      {displayedCards?.map((trip) => (
        <Card size="3" key={trip.title}>
          <Inset side="top" pb="current">
            <img
              src={trip.image}
              alt={t("holiday.suggestedImgAlt")}
              style={{
                objectFit: "cover",
                objectPosition: "50% 55%",
                width: "100%",
                height: 150,
              }}
            />
          </Inset>

          <Flex direction="column" gap="2">
            <Heading as="h4" size="2" color={dynamicColor} align="center">
              {trip.title}
            </Heading>

            <Text as="p" size="2" align="center">
              {trip.shortDesc}
            </Text>

            {trip.flight && (
              <Text as="p" size="2" align="center">
                {trip.flight}
              </Text>
            )}

            {trip.url && (
              <AlertLinkModal action="dialog.booking" href={trip.url}>
                <Button size="3" variant="surface" style={{ width: "100%" }}>
                  {t("holiday.booking")}
                </Button>
              </AlertLinkModal>
            )}
            {isProcessingRequest && (
              <Progress size="1" color={dynamicColor} value={progress} />
            )}
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}
