import { Button, Flex, IconButton, Link, TabNav } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation, useNavigate } from "react-router";
import i18n, { languages } from "../../../i18n";
import { generateLocalizedPath } from "../../utils/generate-localized-path";
import styles from "./Header.module.scss";
import "./Header.module.scss";
import {
  EyeClosedIcon,
  EyeOpenIcon,
  HomeIcon,
  PinLeftIcon,
  PinRightIcon,
} from "@radix-ui/react-icons";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { navigationScreens } from "../../common/constants";

export function Header() {
  const { theme, setTheme, screenWidth } = useContext(AppContext);
  const pathName = useLocation().pathname;
  const { t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const navigate = useNavigate();
  const location = useLocation();

  const currentScreenIdx = navigationScreens.findIndex(
    (screen) => screen.label === location.pathname.split("/").filter(Boolean)[0]
  );

  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const navigateInDirection = (direction: "left" | "right") => {
    if (currentScreenIdx === 0 && direction === "left") return;
    else if (
      currentScreenIdx === navigationScreens.length - 1 &&
      direction === "right"
    )
      return;
    else {
      const newScreenIdx =
        direction === "left" ? currentScreenIdx - 1 : currentScreenIdx + 1;

      navigate(`/${navigationScreens[newScreenIdx].label}/${currentLanguage}`);
    }
  };

  const desktopHeader = (
    <Flex
      align="center"
      px="4"
      py="3"
      className={`${styles.header} ${styles[theme]}`}
    >
      <Flex gap="4">
        <IconButton
          variant="surface"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/home/${currentLanguage}`)}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          variant="surface"
          style={{ cursor: "pointer" }}
          onClick={changeTheme}
        >
          {theme === "dark" ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </IconButton>
      </Flex>

      <Flex width="100%" justify="center">
        <TabNav.Root>
          {navigationScreens.map((screen) => (
            <TabNav.Link
              key={screen.label}
              asChild
              active={pathName === `/${screen.label}/${currentLanguage}`}
            >
              <NavLink to={`/${screen.label}/${currentLanguage}`}>
                {t(`header.${screen.label}`)}
              </NavLink>
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </Flex>

      <Flex gap="4">
        {Object.keys(languages).map((language) => (
          <Button variant="surface" asChild key={language}>
            <Link asChild onClick={() => i18n.changeLanguage(language)}>
              <NavLink to={generateLocalizedPath(pathName, language)}>
                {languages[language].shortName}
              </NavLink>
            </Link>
          </Button>
        ))}
      </Flex>
    </Flex>
  );

  const mobileHeader = (
    <Flex
      align="center"
      justify="between"
      px="4"
      py="3"
      gap="1"
      className={`${styles.header} ${styles[theme]}`}
    >
      <IconButton
        variant="surface"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/home/${currentLanguage}`)}
      >
        <HomeIcon />
      </IconButton>
      <IconButton
        variant="surface"
        style={{ cursor: "pointer" }}
        onClick={changeTheme}
      >
        {theme === "dark" ? <EyeClosedIcon /> : <EyeOpenIcon />}
      </IconButton>
      <Flex gap="1" style={{ margin: "auto" }}>
        <IconButton
          variant="surface"
          style={{ cursor: "pointer" }}
          onClick={() => navigateInDirection("left")}
        >
          <PinLeftIcon />
        </IconButton>
        <IconButton
          variant="surface"
          style={{ cursor: "pointer" }}
          onClick={() => navigateInDirection("right")}
        >
          <PinRightIcon />
        </IconButton>
      </Flex>
      {Object.keys(languages).map((language) => (
        <Button variant="surface" asChild key={language}>
          <Link asChild onClick={() => i18n.changeLanguage(language)}>
            <NavLink to={generateLocalizedPath(pathName, language)}>
              {languages[language].shortName}
            </NavLink>
          </Link>
        </Button>
      ))}
    </Flex>
  );

  return screenWidth > 1024 ? desktopHeader : mobileHeader;
}
