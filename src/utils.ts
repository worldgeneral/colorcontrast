import tinycolor from "tinycolor2";
import { hex } from "wcag-contrast";

export function getFirstRatio() {
  const value = new URLSearchParams(window.location.search).get("ratio");
  if (value !== null) {
    return parseFloat(value);
  }
  return 0;
}

export function getFirstColor() {
  const colors = new URLSearchParams(window.location.search).getAll("color");
  return new Set(
    colors.map((color) => {
      return tinycolor(color).toHexString().toLocaleLowerCase();
    })
  );
}

export function contrastCalculator(colors: string[], ratioSlider: number) {
  const checkedColors: { color1: string; color2: string; contrast: number }[] =
    [];

  colors.forEach((color1) => {
    colors.forEach((color2) => {
      const contrast = hex(color1, color2);
      if (color1 === color2 || contrast < ratioSlider) {
        return;
      }
      checkedColors.push({
        color1: color1,
        color2: color2,
        contrast: contrast,
      });
    });
  });

  return checkedColors;
}
