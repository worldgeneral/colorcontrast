import React from "react";

export default function RatioSlider({
  minRatio,
  setMinRatio,
}: {
  minRatio: number;
  setMinRatio: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
      <input
        type="range"
        value={minRatio}
        min={0}
        max={21}
        step={0.01}
        onChange={(ev) => setMinRatio(parseInt(ev.target.value, 10))}
      />
      ;
    </div>
  );
}
