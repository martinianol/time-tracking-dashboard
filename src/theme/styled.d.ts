import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        white: string;
        black: string;
      };
      navy: {
        navy950: string;
        navy900: string;
        navy800: string;
        navy200: string;
      };
      orange: string;
      purple: {
        purple700: string;
        purple600: string;
        purple500: string;
      };
      blue300: string;
      pink400: string;
      green400: string;
      yellow300: string;
      grey200: string;
    };
    fonts: {
      main: string;
    };
    sizes: {
      containerWidth: string;
    };
    spacing: {
      spacing0: string;
      spacing100: string;
      spacing200: string;
      spacing300: string;
      spacing400: string;
      spacing500: string;
    };
    typography: {
      textPreset1: TextPreset;
      textPreset2: TextPreset;
      textPreset3: TextPreset;
      textPreset4: TextPreset;
      textPreset5M: TextPreset;
      textPreset5R: TextPreset;
      textPreset6: TextPreset;
    };
  }

  interface TextPreset {
    size: string;
    lineHeight: string;
    weight: string;
    style: string;
  }
}
