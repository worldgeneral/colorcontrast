import React from "react";
import invert from "invert-color";
import CopyPopUp from "./copy-pop-up";

export default function ColorBand({
  color,
  setColors,
}: {
  color: string;
  setColors: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const invertColor = invert(color, true);
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-28 h-8 m-1 rounded-md flex   items-center"
    >
      <button
        className="px-1.5 h-full border-r border-black"
        onClick={() =>
          setColors((preVal) => {
            const next = new Set(preVal);
            next.delete(color);
            return next;
          })
        }
      >
        <svg
          fill={invertColor}
          className="h-4 block mx-auto aspect-square "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </button>
      <div style={{ color: invertColor }} className="mx-auto relative">
        {color}
        <CopyPopUp text="Copied" time={1000} color={color} />
      </div>
    </div>
  );
}
