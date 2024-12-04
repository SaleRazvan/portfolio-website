import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppContext } from "./AppContext";
import React, { useState } from "react";
import { navigationScreens } from "./common/constants";
import NotAvailable from "./components/not-available/NotAvailable";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const dynamicColor = theme === "dark" ? "amber" : "indigo";

  return (
    <AppContext.Provider value={{ theme, setTheme, dynamicColor }}>
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
