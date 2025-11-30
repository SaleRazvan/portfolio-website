import {
  Button,
  Callout,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../AppContext";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function ApiForm() {
  const { t } = useTranslation();
  const { euCountriesData } = useContext(AppContext);
  const [countryInput, setCountryInput] = useState<string>("Albania");
  const [factInput, setFactInput] = useState<string>("");
  const [error, setError] = useState({ country: false, fact: true });
  const [responseMessage, setResponseMessage] = useState<string | undefined>(
    undefined
  );

  const handleCountryInputChange = (value: string) => {
    setCountryInput(value);

    if (!euCountries.includes(value))
      setError((oldError) => ({ ...oldError, country: true }));
    else if (error.country)
      setError((oldError) => ({ ...oldError, country: false }));
  };

  const handleFactInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFactInput(event.target.value);

    if (event.target.value.length === 0 || event.target.value.length > 100)
      setError((oldError) => ({ ...oldError, fact: true }));
    else if (error.fact) setError((oldError) => ({ ...oldError, fact: false }));
  };

  const handleCountryAddition = async () => {
    try {
      if (error.country || error.fact) return;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const request = await fetch(
        "https://portfolio-website-9jb0.onrender.com/fun-facts/",
        {
          method: "POST",
          body: JSON.stringify({ country: countryInput, fact: factInput }),
          headers: myHeaders,
        }
      );

      const response = await request.json();

      if (request.ok) {
        setResponseMessage(t("api.success"));
        setFactInput("");
      } else {
        setResponseMessage(response.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const euCountries = euCountriesData.map((countryData) => countryData.country);

  return (
    <Flex
      direction={{ initial: "column", md: "row" }}
      width="100%"
      align="center"
      justify="center"
      gap="4"
    >
      <Text as="label" size="2">
        {t("api.country")}
      </Text>
      <Select.Root
        defaultValue="Albania"
        value={countryInput}
        onValueChange={handleCountryInputChange}
      >
        <Select.Trigger />
        <Select.Content>
          {euCountries.map((country) => (
            <Select.Item key={country} value={country}>
              {country}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Text size="2">{t("api.fact")}</Text>
      <TextField.Root
        placeholder={t("api.fact")}
        onChange={handleFactInputChange}
        value={factInput}
      ></TextField.Root>
      <Button
        onClick={handleCountryAddition}
        style={{
          cursor: `${
            error.fact || euCountries.length === 0 ? "not-allowed" : "pointer"
          }`,
        }}
        disabled={Boolean(error.fact || euCountries.length === 0)}
      >
        {t("api.button")}
      </Button>
      {responseMessage && (
        <Callout.Root>
          <Callout.Icon>
            {responseMessage === t("api.success") ? (
              <CheckIcon />
            ) : (
              <Cross2Icon />
            )}
          </Callout.Icon>
          <Callout.Text weight="medium">{responseMessage}</Callout.Text>
        </Callout.Root>
      )}
    </Flex>
  );
}
