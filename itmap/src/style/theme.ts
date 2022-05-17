import { ETheme } from "../enum/theme.enum";
import { palette } from "./palette";

export const lightTheme = {
  ...palette,

  theme: "#ffffff",
  contrast: "#000000",

  layer: {
    screenBG: "#efeff4",
    layerBG: "#ffffff",
    subBG: "#efeff4",
    disabledBG: "#f0f0f0",
    selectedBG: "#e8f0fe",
    cardBG: "#ffffff",
  },

  fontColor: {
    default: "#000",
  },
};

export const darkTheme = {
  ...palette,

  theme: "#000000",
  contrast: "#ffffff",
  layer: {
    screenBG: "#010409",
    layerBG: "#0D1117",
    subBG: "#161b22",
    disabledBG: "#21262d",
    selectedBG: "#000000",
    cardBG: "#222224",
  },

  fontColor: {
    default: "#c9d1d9",
  },
};

export const themeColor = {
  [ETheme.LIGHT]: lightTheme,
  [ETheme.DARK]: darkTheme,
};

export type Color = typeof lightTheme;

export type Theme = {
  color: Color;
};
