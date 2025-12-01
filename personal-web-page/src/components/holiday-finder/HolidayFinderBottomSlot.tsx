import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import { Button, Card, Flex, Inset, Separator } from "@radix-ui/themes";
import HolidayFinderForm from "./HolidayFinderForm";
import { months } from "../../common/constants";
import HolidayFinderResults from "./HolidayFinderResults";
import Toast from "../toast/Toast";
import { formatDate } from "../../utils/get-days-for-months";
import { TravelSuggestionsResponse } from "../../common/types";
import { useTranslation } from "react-i18next";

export default function HolidayFinderBottomSlot() {
  const DEFAULT_FILTERS = {
    preferences: "",
    weatherPreferences: "",
    selectedYear: new Date().getFullYear().toString(),
    selectedMonth: months[0],
    selectedDay: "1",
  };

  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();
  const [filters, setFilters] = useState<{
    preferences?: string;
    weatherPreferences?: string;
    selectedYear?: string;
    selectedMonth?: string;
    selectedDay?: string;
  }>(DEFAULT_FILTERS);
  const [hasError, setHasError] = useState({
    preferences: false,
    weatherPreferences: false,
    reqFailed: false,
  });
  const [isProcessingRequest, setIsProcessingRequest] = useState(false);
  const [generatedTrips, setGeneratedTrips] = useState<
    TravelSuggestionsResponse | undefined
  >(undefined);
  const timerRef = useRef(0);
  const toastMessage = hasError.reqFailed
    ? t("holiday.reqErr")
    : t("holiday.inputErr");

  const handleGenerateTrips = async () => {
    const {
      preferences,
      weatherPreferences,
      selectedDay,
      selectedMonth,
      selectedYear,
    } = filters;

    if (generatedTrips) {
      setFilters(DEFAULT_FILTERS);
      setGeneratedTrips(undefined);
    } else {
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

        try {
          setIsProcessingRequest(true);

          const response = await fetch(
            "https://hf.razvansale.dev/travel-suggestions",
            // "http://localhost:3000/travel-suggestions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": import.meta.env.VITE_API_KEY,
              },
              body: JSON.stringify(formattedBody),
            }
          );

          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

          const parsedResponse: TravelSuggestionsResponse =
            await response.json();

          setGeneratedTrips(parsedResponse);
          setIsProcessingRequest(false);
        } catch (err) {
          setHasError((prev) => ({ ...prev, reqFailed: true }));
          setIsProcessingRequest(false);

          window.clearTimeout(timerRef.current);

          timerRef.current = window.setTimeout(() => {
            setHasError({
              preferences: false,
              weatherPreferences: false,
              reqFailed: false,
            });
          }, 2000);

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
            reqFailed: false,
          });
        }, 2000);
      }
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
            {generatedTrips
              ? t("holiday.generateSecond")
              : t("holiday.generateFirst")}
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
        <Toast
          open={
            hasError.preferences ||
            hasError.weatherPreferences ||
            hasError.reqFailed
          }
          message={toastMessage}
          right="-30px"
          top="250px"
        />
      </Flex>

      <Separator
        size="4"
        color={dynamicColor}
        decorative
        style={{ flex: "1" }}
      />

      <HolidayFinderResults
        generatedTrips={generatedTrips}
        isProcessingRequest={isProcessingRequest}
      />
    </Flex>
  );
}
