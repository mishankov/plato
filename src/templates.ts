import { hslToHex, type HslColor } from "./utis";

export { DarkTemplate, LightTemplate };

const darkBase100 = "#121212";
const darkBase300 = "#242424";

const lightBase100 = "#f5f5f5";
const lightBase300 = "#e0e0e0";

const DarkTemplate = (
  name: string,
  primaryColor: HslColor,
  accentColor: HslColor,
) => {
  const primaryHex = hslToHex(primaryColor);
  const brighterPrimaryHex = hslToHex({
    h: primaryColor.h,
    s: primaryColor.s,
    l: primaryColor.l + 20,
  });
  const transparentPrimaryHex = primaryHex + "66";

  const accentHex = hslToHex(accentColor);
  const brighterAccentHex = hslToHex({
    h: accentColor.h,
    s: accentColor.s,
    l: accentColor.l + 20,
  });
  const transparentAccentHex = accentHex + "66";

  return {
    name: `Plato ${name} Dark`,
    appearance: "dark",
    style: {
      // UI colors
      "title_bar.background": primaryHex,
      "title_bar.inactive_background": primaryHex,

      "tab_bar.background": darkBase100,
      "tab.active_background": darkBase100,
      "tab.inactive_background": darkBase300,

      "panel.background": darkBase100,
      "element.active": primaryHex,
      "element.selected": primaryHex,
      "element.hover": transparentPrimaryHex,

      "status_bar.background": primaryHex,

      error: "#f00",
      "error.background": "#ff000033",
      "error.border": "#300",

      "deleted.background": "#ff0",

      // Editor colors
      hint: "#ccc", // Git blame color
      "editor.foreground": "#999",
      "editor.document_highlight.read_background": "#333", // highlights variable read
      "editor.document_highlight.write_background": "#336", // highlights variable write
      "editor.document_highlight.bracket_background": "#222",
      "editor.active_line.background": "#151515",
      "link_text.hover": "#55f",
      syntax: {
        comment: {
          color: brighterPrimaryHex,
          background_color: transparentPrimaryHex,
        },
        string: {
          color: brighterAccentHex,
          background_color: transparentAccentHex,
        },
        number: {
          color: accentHex,
        },
        function: {
          color: "#ccc",
        },
        variable: {
          color: "#ccc",
        },
      },
      players: [
        {
          selection: "#222",
        },
      ],
    },
  };
};

const LightTemplate = (
  name: string,
  primaryColor: HslColor,
  accentColor: HslColor,
) => {
  const primaryHex = hslToHex(primaryColor);
  const brighterPrimaryHex = hslToHex({
    h: primaryColor.h,
    s: primaryColor.s - 30,
    l: primaryColor.l - 10,
  });
  const transparentPrimaryHex = primaryHex + "66";

  const accentHex = hslToHex(accentColor);
  const brighterAccentHex = hslToHex({
    h: accentColor.h,
    s: accentColor.s,
    l: accentColor.l - 10,
  });
  const transparentAccentHex = accentHex + "66";

  return {
    name: `Plato ${name} Light`,
    appearance: "light",
    style: {
      // UI colors
      "title_bar.background": primaryHex,
      "title_bar.inactive_background": primaryHex,

      "tab_bar.background": lightBase100,
      "tab.active_background": lightBase100,
      "tab.inactive_background": lightBase300,

      "panel.background": lightBase100,
      "element.active": primaryHex,
      "element.selected": primaryHex,
      "element.hover": transparentPrimaryHex,

      "status_bar.background": primaryHex,

      error: "#f00",
      "error.background": "#ff000033",
      "error.border": "#300",

      "deleted.background": "#ff0",

      // Editor colors
      hint: "#ccc", // Git blame color
      "editor.foreground": "#777",
      "editor.document_highlight.read_background": "#eee", // highlights variable read
      "editor.document_highlight.write_background": "#ddf", // highlights variable write
      "editor.document_highlight.bracket_background": "#eee",
      "editor.active_line.background": "#f5f5f5",
      "link_text.hover": "#55f",
      syntax: {
        comment: {
          color: brighterPrimaryHex,
          background_color: transparentPrimaryHex,
        },
        string: {
          color: brighterAccentHex,
          background_color: transparentAccentHex,
        },
        number: {
          color: accentHex,
        },
        function: {
          color: "#222",
        },
        variable: {
          color: "#222",
        },
      },
      players: [
        {
          selection: "#dadada",
        },
      ],
    },
  };
};
