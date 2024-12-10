import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppContext } from "./AppContext";
import React, { useEffect, useState } from "react";
import { navigationScreens } from "./common/constants";
import NotAvailable from "./components/not-available/NotAvailable";
import { EuCountry } from "./common/types";
import SmallScreen from "./components/small-screen/SmallScreen";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [euCountriesData, setEuCountriesData] = useState<EuCountry[]>([]);
  const dynamicColor = theme === "dark" ? "amber" : "indigo";
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
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
      }}
    >
      <Theme
        appearance={theme}
        accentColor={theme === "dark" ? "amber" : "indigo"}
        grayColor="sand"
        radius="large"
      >
        <BrowserRouter>
          {innerWidth > 1000 ? (
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
          ) : (
            <SmallScreen />
          )}
        </BrowserRouter>
      </Theme>
    </AppContext.Provider>
  );
}
