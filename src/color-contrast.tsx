import { useEffect, useState } from "react";
import ColorInput from "./components/color-input";
import RatioSlider from "./components/ratio-slider";
import { ColorCard } from "./components/color-card";
import ColorBand from "./components/color-band";
import { hex } from "wcag-contrast";
import tinycolor from "tinycolor2";

export default function ColorContrast() {
  const [colors, setColors] = useState(new Set<string>());
  const [minRatio, setMinRatio] = useState<number>(0);
  const [comparedColors, setComparedColors] = useState<
    { color1: string; color2: string; contrast: number }[] | undefined
  >([]);

  useEffect(() => {
    const colors = new URLSearchParams(window.location.search)
      .get("colors")
      ?.split("-");

    colors?.map((color) => {
      setColors(
        (preVal) =>
          new Set(
            preVal.add(tinycolor(color).toHexString().toLocaleLowerCase())
          )
      );
    });
  }, []);

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const test = Array.from(colors).map((color) => color.slice(1));
    url.set("colors", test.join("-"));
    history.pushState(null, "", "?" + url.toString());

    if (Array.from(colors).length > 1) {
      return setComparedColors(
        contrastCalculator(Array.from(colors), minRatio)
      );
    }
    setComparedColors(() => []);
  }, [colors, minRatio]);

  return (
    <>
      <div className="h-screen w-screen max-w-[1920px] mx-auto relative z-0 ">
        <div className="bg-color-wheel bg-no-repeat bg-center w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] -z-10 opacity-20 blur-[0.3px]   "></div>

        <div className="flex flex-col items-center z-20 mt-10">
          <ColorInput setColors={setColors} />
          <div className="z-10 flex w-2/3 justify-center min-h-10 flex-wrap">
            {Array.from(colors).map((color, index) => (
              <ColorBand key={index} color={color} setColors={setColors} />
            ))}
          </div>
          <RatioSlider minRatio={minRatio} setMinRatio={setMinRatio} />
          <div className="flex flex-wrap justify-evenly ">
            {comparedColors
              ? comparedColors.map((color) => (
                  <ColorCard
                    key={color.color1 + color.color2}
                    color1={color.color1}
                    color2={color.color2}
                    contrast={color.contrast}
                  />
                ))
              : undefined}
          </div>
        </div>
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
