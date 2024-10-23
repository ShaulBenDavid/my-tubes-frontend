/* eslint-disable no-bitwise */
type RGB = [number, number, number];

const hexToRgb = (hex: string): RGB => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

const rgbToHex = (r: number, g: number, b: number): string =>
  `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;

const adjustBrightness = ([r, g, b]: RGB, amount: number): RGB => [
  Math.max(0, Math.min(255, r + amount)),
  Math.max(0, Math.min(255, g + amount)),
  Math.max(0, Math.min(255, b + amount)),
];

export const generateColorVariations = (hex: string) => {
  const rgb = hexToRgb(hex);
  const lighter = rgbToHex(...adjustBrightness(rgb, 60));
  const darker = rgbToHex(...adjustBrightness(rgb, -60));

  return {
    lighter,
    original: hex,
    darker,
  };
};
