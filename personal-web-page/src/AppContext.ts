import { createContext, Dispatch, SetStateAction } from "react";
import { EuCountry } from "./common/types";

type AppContextType = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
  dynamicColor: "amber" | "indigo";
  euCountriesData: EuCountry[];
  setEuCountriesData: Dispatch<SetStateAction<EuCountry[]>>;
  screenWidth: number;
  setScreenWidth: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  dynamicColor: "amber",
  euCountriesData: [],
  setEuCountriesData: () => {},
  screenWidth: 520,
  setScreenWidth: () => {},
});
