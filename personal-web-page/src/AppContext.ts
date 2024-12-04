import { createContext, Dispatch, SetStateAction } from "react";

type AppContextType = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
  dynamicColor: "amber" | "indigo";
};

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  setTheme: () => {},
  dynamicColor: "amber",
});
