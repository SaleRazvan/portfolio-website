import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import styles from "./MainLayout.module.scss";
import { Header } from "../../header/Header";
import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";

type MainLayoutProps = {
  topSlot: React.ReactElement;
  bottomSlot: React.ReactElement;
};

export default function MainLayout({ topSlot, bottomSlot }: MainLayoutProps) {
  const { theme } = useContext(AppContext);

  return (
    <ScrollArea type="auto" scrollbars="vertical" size="1">
      <Flex
        direction="column"
        className={`${styles.layoutContainer} ${styles[theme]} ${theme}`}
      >
        <Header />
        <Box className={`${styles.topContent} ${styles[theme]}`} p="6">
          {topSlot}
        </Box>
        <Box
          className={`${styles.bottomContent} ${styles[theme]}`}
          p="6"
          flexGrow="1"
        >
          {bottomSlot}
        </Box>
      </Flex>
    </ScrollArea>
  );
}
