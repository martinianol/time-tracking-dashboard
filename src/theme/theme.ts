import { DefaultTheme } from "styled-components";

const mainFont = "'Rubik', sans-serif";
const mainLightFont = "'Rubik Light', sans-serif";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      white: "#FFF",
      black: "#000",
    },
    navy: {
      navy200: "#BBC0FF",
      navy800: "#33397A",
      navy900: "#1C204B",
      navy950: "#0E1323",
    },
    purple: {
      purple700: "#7335D2",
      purple600: "#5747EA",
      purple500: "#7078C9",
    },
    orange: "#FF8B64",
    blue300: "#55C2E6",
    pink400: "#FF5E7D",
    green400: "#4BCF82",
    yellow300: "#F1C75B",
    grey200: "#D8D8D8",
  },
  spacing: {
    spacing0: "0rem",
    spacing100: "0.5rem",
    spacing200: "1rem",
    spacing300: "1.5rem",
    spacing400: "2rem",
    spacing500: "2.5rem",
  },
  fonts: {
    main: mainFont,
  },
  typography: {
    textPreset1: {
      size: "3.5rem",
      lineHeight: "4.125rem",
      weight: "300",
      style: `300 3.5rem/4.125rem ${mainFont}`,
    },
    textPreset2: {
      size: "2.5rem",
      lineHeight: "2.375rem",
      weight: "300",
      style: `300 2.5rem/2.375rem ${mainLightFont}`,
    },
    textPreset3: {
      size: "2rem",
      lineHeight: "2.375rem",
      weight: "300",
      style: `300 2rem/2.375rem ${mainFont}`,
    },
    textPreset4: {
      size: "1.5rem",
      lineHeight: "1.75rem",
      weight: "300",
      style: `300 1.5rem/1.75rem ${mainFont}`,
    },
    textPreset5M: {
      size: "1.125rem",
      lineHeight: "1.3125rem",
      weight: "500", // Rubik Medium
      style: `500 1.125rem/1.3125rem ${mainFont}`,
    },
    textPreset5R: {
      size: "1.125rem",
      lineHeight: "1.3125rem",
      weight: "400",
      style: `400 1.125rem/1.3125rem ${mainFont}`,
    },
    textPreset6: {
      size: "0.9375rem",
      lineHeight: "1.125rem",
      weight: "500", // Rubik Medium,
      style: `500 0.9375rem/1.125rem ${mainFont}`,
    },
  },
  sizes: {
    containerWidth: "1200px",
  },
};

export default theme;
