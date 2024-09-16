import { useEffect, useState } from "react";
import ColorInput from "./components/color-input";
import RatioSlider from "./components/ratio-slider";
import { ColorCard } from "./components/color-card";
import ColorBand from "./components/color-band";
import { hex } from "wcag-contrast";

export default function ColorContrast() {
  const [colors, setColors] = useState(new Set<string>());
  const [minRatio, setMinRatio] = useState<number>(0);
  const [comparedColors, setComparedColors] = useState<
    { color1: string; color2: string; contrast: number }[] | undefined
  >([]);

  useEffect(() => {
    setComparedColors(contrastCalculator(Array.from(colors), minRatio));
  }, []);

  useEffect(() => {
    if (Array.from(colors).length > 1) {
      return setComparedColors(
        contrastCalculator(Array.from(colors), minRatio)
      );
    }
    setComparedColors(() => []);
  }, [colors, minRatio]);

  return (
    <>
      <ColorInput setColors={setColors} />
      <div>
        {Array.from(colors).map((color, index) => (
          <ColorBand key={index} color={color} setColors={setColors} />
        ))}
      </div>
      <RatioSlider minRatio={minRatio} setMinRatio={setMinRatio} />
      <div className="flex flex-wrap">
        {comparedColors
          ? comparedColors.map((color, index) => (
              <ColorCard
                key={index}
                color1={color.color1}
                color2={color.color2}
                contrast={color.contrast}
              />
            ))
          : undefined}
      </div>
    </>
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
