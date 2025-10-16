import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppContext } from "./AppContext";
import React, { useEffect, useState } from "react";
import { navigationScreens } from "./common/constants";
import NotAvailable from "./components/not-available/NotAvailable";
import { EuCountry } from "./common/types";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [euCountriesData, setEuCountriesData] = useState<EuCountry[]>([]);
  const dynamicColor = theme === "dark" ? "amber" : "indigo";
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        dynamicColor,
        euCountriesData,
        setEuCountriesData,
        screenWidth,
        setScreenWidth,
      }}
    >
      <Theme
        appearance={theme}
        accentColor={theme === "dark" ? "amber" : "indigo"}
        grayColor="sand"
        radius="large"
      >
        <BrowserRouter>
          <Routes>
            {navigationScreens.map((screen) =>
              [`/${screen.label}/ro`, `/${screen.label}/en`].map((path) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={React.createElement(screen.component)}
                  />
                );
              })
            )}
            <Route path="*" element={<NotAvailable />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </AppContext.Provider>
  );
}
