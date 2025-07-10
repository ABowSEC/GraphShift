// src/theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Config to enable light/dark mode toggling
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
