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
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function ApiForm() {
  const { t } = useTranslation();
  const { euCountriesData } = useContext(AppContext);
  const [countryInput, setCountryInput] = useState<string>("Albania");
  const [factInput, setFactInput] = useState<string>("");
  const [error, setError] = useState({ country: false, fact: true });
  const [reqSent, setReqSent] = useState(false);

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

    if (event.target.value.length === 0 || event.target.value.length > 40)
      setError((oldError) => ({ ...oldError, fact: true }));
    else if (error.fact) setError((oldError) => ({ ...oldError, fact: false }));
  };

  const handleCountryAddition = async () => {
    try {
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

      if (request.ok) setReqSent(true);
      else alert(response.error);
    } catch (err) {
      console.error(err);
    }
  };

  const euCountries = euCountriesData.map((countryData) => countryData.country);

  return (
    <Flex width="100%" align="center" justify="center" gap="4">
      <Text size="2">{t("api.country")}</Text>
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
        style={{ cursor: "pointer" }}
        disabled={Boolean(error.fact)}
      >
        {t("api.button")}
      </Button>
      {reqSent && (
        <Callout.Root>
          <Callout.Icon>
            <CheckCircledIcon />
          </Callout.Icon>
          <Callout.Text weight="medium">{t("api.success")}</Callout.Text>
        </Callout.Root>
      )}
    </Flex>
  );
}
