import { createContext, Dispatch, SetStateAction } from "react";
import { EuCountry } from "./common/types";

type AppContextType = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
  dynamicColor: "amber" | "indigo";
  euCountriesData: EuCountry[];
  setEuCountriesData: Dispatch<SetStateAction<EuCountry[]>>;
};

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  dynamicColor: "amber",
  euCountriesData: [],
  setEuCountriesData: () => {},
});
