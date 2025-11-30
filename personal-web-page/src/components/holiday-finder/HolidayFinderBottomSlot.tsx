import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import { Button, Card, Flex, Inset, Separator } from "@radix-ui/themes";
import HolidayFinderForm from "./HolidayFinderForm";
import { months } from "../../common/constants";
import HolidayFinderResults from "./HolidayFinderResults";
import Toast from "../toast/Toast";
import { formatDate } from "../../utils/get-days-for-months";

type FlightResponse =
  | {
      id: string;
      flightName: string;
      stops: string;
      cabinType: string;
      price: number;
    }
  | string;

type TravelSuggestionsResponse = Array<{
  city: string;
  country: string;
  reason: string;
  mainAirportIATACode: string;
  image: string;
  flight: FlightResponse;
  bookingUrl: string;
}>;

export default function HolidayFinderBottomSlot() {
  const { dynamicColor } = useContext(AppContext);
  const [filters, setFilters] = useState<{
    preferences?: string;
    weatherPreferences?: string;
    selectedYear?: string;
    selectedMonth?: string;
    selectedDay?: string;
  }>({
    preferences: undefined,
    weatherPreferences: undefined,
    selectedYear: new Date().getFullYear().toString(),
    selectedMonth: months[0],
    selectedDay: "1",
  });
  const [hasError, setHasError] = useState({
    preferences: false,
    weatherPreferences: false,
  });
  const timerRef = useRef(0);

  const handleGenerateTrips = async () => {
    const {
      preferences,
      weatherPreferences,
      selectedDay,
      selectedMonth,
      selectedYear,
    } = filters;

    if (
      preferences &&
      weatherPreferences &&
      selectedYear &&
      selectedMonth &&
      selectedDay
    ) {
      const formattedBody = {
        preferences,
        temperature: weatherPreferences,
        checkinDate: formatDate(selectedYear, selectedMonth, selectedDay),
        days: 7,
      };

      console.log("formattedBody", JSON.stringify(formattedBody));

      try {
        const response = await fetch(
          "https://hf.razvansale.dev/travel-suggestions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.VITE_API_KEY,
            },
            body: JSON.stringify(formattedBody),
          }
        );

        const parsedResponse: TravelSuggestionsResponse = await response.json();

        console.log("parsedResponse", parsedResponse);
      } catch (err) {
        console.log("Something went wrong", err);
      }
    } else {
      if (!preferences) {
        setHasError((prev) => ({ ...prev, preferences: true }));
      }
      if (!weatherPreferences) {
        setHasError((prev) => ({ ...prev, weatherPreferences: true }));
      }

      window.clearTimeout(timerRef.current);

      timerRef.current = window.setTimeout(() => {
        setHasError({
          preferences: false,
          weatherPreferences: false,
        });
      }, 2000);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Flex align="center" justify="center" gap="9">
      <HolidayFinderForm
        filters={filters}
        setFilters={setFilters}
        hasError={hasError}
      />

      <Separator
        size="4"
        color={dynamicColor}
        decorative
        style={{ flex: "1" }}
      />

      <Flex direction="column" position="relative">
        <Card size="3">
          <Button
            size="3"
            style={{ cursor: "pointer" }}
            onClick={handleGenerateTrips}
          >
            Generate trips
          </Button>
          <Inset side="bottom" pt="current">
            <img
              src="/search.png"
              alt="Relevant company image"
              style={{
                objectFit: "cover",
                objectPosition: "50% 65%",
                width: "100%",
                height: 150,
              }}
            />
          </Inset>
        </Card>
        <Toast open={hasError.preferences || hasError.weatherPreferences} />
      </Flex>

      <Separator
        size="4"
        color={dynamicColor}
        decorative
        style={{ flex: "1" }}
      />
      <HolidayFinderResults />
    </Flex>
  );
}
