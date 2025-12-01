import {
  Card,
  Flex,
  Heading,
  Inset,
  Select,
  Separator,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { months } from "../../common/constants";
import { AppContext } from "../../AppContext";
import { Dispatch, SetStateAction, useContext } from "react";
import { getDaysInMonth } from "../../utils/get-days-for-months";
import { useTranslation } from "react-i18next";

type HolidayFinderFormProps = {
  filters: {
    preferences?: string;
    weatherPreferences?: string;
    selectedYear?: string;
    selectedMonth?: string;
    selectedDay?: string;
  };
  setFilters: Dispatch<
    SetStateAction<{
      preferences?: string;
      weatherPreferences?: string;
      selectedYear?: string;
      selectedMonth?: string;
      selectedDay?: string;
    }>
  >;
  hasError: {
    preferences: boolean;
    weatherPreferences: boolean;
  };
};

export default function HolidayFinderForm({
  filters,
  setFilters,
  hasError,
}: HolidayFinderFormProps) {
  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();
  const {
    preferences,
    weatherPreferences,
    selectedDay,
    selectedMonth,
    selectedYear,
  } = filters;

  return (
    <Flex direction="column" align="stretch" gap="6" minWidth="25%">
      {/* PREFERENCES */}
      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/preferences.png"
            alt={t("holiday.preferencesAlt")}
            style={{
              objectFit: "cover",
              objectPosition: "50% 80%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading
          as="h4"
          size="2"
          color={hasError.preferences ? "red" : dynamicColor}
          mb="4"
          align="center"
        >
          {t("holiday.preferences")}
        </Heading>
        <TextArea
          variant="soft"
          placeholder={t("holiday.preferencesPlaceholder")}
          size="3"
          radius="large"
          color={hasError.preferences ? "red" : dynamicColor}
          value={preferences}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              preferences: e.currentTarget.value,
            }))
          }
        />
      </Card>

      {/* TEMP */}
      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/beach.png"
            alt={t("holiday.weatherAlt")}
            style={{
              objectFit: "cover",
              objectPosition: "50% 30%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading
          as="h4"
          size="2"
          color={hasError.weatherPreferences ? "red" : dynamicColor}
          mb="4"
          align="center"
        >
          {t("holiday.weather")}
        </Heading>
        <TextArea
          variant="soft"
          placeholder={t("holiday.weatherPlaceholder")}
          size="3"
          radius="large"
          color={hasError.weatherPreferences ? "red" : dynamicColor}
          value={weatherPreferences}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              weatherPreferences: e.currentTarget.value,
            }))
          }
        />
      </Card>

      {/* DATE */}
      <Card size="3">
        <Inset side="top" pb="current">
          <img
            src="/clock.png"
            alt={t("holiday.dateAlt")}
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
              width: "100%",
              height: 150,
            }}
          />
        </Inset>

        <Heading as="h4" size="2" color={dynamicColor} mb="4" align="center">
          {t("holiday.date")}
        </Heading>

        <Flex gap="2" direction="column" align="center" justify="center">
          {/* YEAR */}
          <Flex align="center" gap="2">
            <Text as="label" size="2">
              {t("holiday.year")}
            </Text>
            <Separator
              size="3"
              color={dynamicColor}
              decorative
              style={{ flexGrow: "1" }}
            />
            <Select.Root
              defaultValue={new Date().getFullYear().toString()}
              value={selectedYear}
              onValueChange={(selectedYear) =>
                setFilters((prev) => ({
                  ...prev,
                  selectedDay: "1",
                  selectedYear,
                }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {Array.from({ length: 4 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <Select.Item key={year} value={year.toString()}>
                        {year}
                      </Select.Item>
                    );
                  })}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>

          {/* MONTH */}
          <Flex align="center" gap="2">
            <Text as="label" size="2">
              {t("holiday.month")}
            </Text>
            <Separator
              size="3"
              color={dynamicColor}
              decorative
              style={{ flexGrow: "1" }}
            />
            <Select.Root
              defaultValue={months[0]}
              value={selectedMonth}
              onValueChange={(selectedMonth) =>
                setFilters((prev) => ({
                  ...prev,
                  selectedDay: "1",
                  selectedMonth,
                }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {months.map((month, index) => (
                    <Select.Item key={index} value={month}>
                      {t(`holiday.${month.toLowerCase()}`)}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>

          {/* DAY */}
          <Flex align="center" gap="2">
            <Text as="label" size="2">
              {t("holiday.day")}
            </Text>
            <Separator
              size="3"
              color={dynamicColor}
              decorative
              style={{ flexGrow: "1" }}
            />
            <Select.Root
              defaultValue={"1"}
              value={selectedDay}
              onValueChange={(selectedDay) =>
                setFilters((prev) => ({
                  ...prev,
                  selectedDay,
                }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  {Array.from(
                    {
                      length: getDaysInMonth(selectedMonth, selectedYear),
                    },
                    (_, index) => {
                      const day = index + 1;
                      return (
                        <Select.Item key={day} value={String(day)}>
                          {day}
                        </Select.Item>
                      );
                    }
                  )}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
