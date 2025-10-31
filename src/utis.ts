import convert from "color-convert";

type HslColor = {
  h: number;
  s: number;
  l: number;
};

const hslToHex = (c: HslColor): string => `#${convert.hsl.hex(c.h, c.s, c.l)}`;

export { type HslColor, hslToHex };
