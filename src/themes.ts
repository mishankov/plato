import { DarkTemplate, LightTemplate } from "./templates";
import { type HslColor } from "./utis";

const baseName = "Plato";

type ThemeData = {
  name: string;
  appearance: "dark" | "light";
  primaryColor: HslColor;
  accentColor: HslColor;
};

// Comment to test
const themesData: ThemeData[] = [
  {
    name: "Green",
    appearance: "dark",
    primaryColor: { h: 160, s: 100, l: 20 },
    accentColor: { h: 340, s: 50, l: 60 },
  },
  {
    name: "Green",
    appearance: "light",
    primaryColor: { h: 160, s: 100, l: 40 },
    accentColor: { h: 340, s: 50, l: 60 },
  },
  {
    name: "Blue",
    appearance: "dark",
    primaryColor: { h: 200, s: 100, l: 20 },
    accentColor: { h: 20, s: 50, l: 60 },
  },
  {
    name: "Blue",
    appearance: "light",
    primaryColor: { h: 200, s: 100, l: 60 },
    accentColor: { h: 20, s: 50, l: 60 },
  },
  {
    name: "Orange",
    appearance: "dark",
    primaryColor: { h: 22, s: 100, l: 40 },
    accentColor: { h: 202, s: 50, l: 60 },
  },
  {
    name: "Orange",
    appearance: "light",
    primaryColor: { h: 22, s: 100, l: 60 },
    accentColor: { h: 195, s: 50, l: 60 },
  },
];

const output = {
  $schema: "https://zed.dev/schema/themes/v0.2.0.json",
  name: "Plato Themes",
  author: "Denis Mishankov | https://github.com/mishankov",
  themes: themesData.map((data) => {
    if (data.appearance === "dark")
      return DarkTemplate(data.name, data.primaryColor, data.accentColor);
    if (data.appearance === "light")
      return LightTemplate(data.name, data.primaryColor, data.accentColor);
  }),
};

export default output;
