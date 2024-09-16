import React from "react";

export default function RatioSlider({
  minRatio,
  setMinRatio,
}: {
  minRatio: number;
  setMinRatio: React.Dispatch<React.SetStateAction<number>>;
}) {
  console.log(minRatio);
  return (
    <div>
      <input
        type="range"
        value={minRatio}
        min="0"
        max="21"
        step="0.01"
        onChange={(ev) => setMinRatio(Number(ev.target.value))}
      />
    </div>
  );
}
