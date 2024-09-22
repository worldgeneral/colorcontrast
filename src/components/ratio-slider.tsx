import React from "react";

export default function RatioSlider({
  minRatio,
  setMinRatio,
}: {
  minRatio: number;
  setMinRatio: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="max-w-[66.66%] w-full my-10 ">
      <div className="relative   mx-3 ">
        <button
          className="absolute w-10 h-10 bg-black left-[calc(100%/(21/3))] -ml-5 rounded-br-full rounded-t-full -rotate-[45deg] text-white text-center  -translate-y-2"
          onClick={() => setMinRatio(3)}
        >
          <p className="rotate-45 font-medium text-lg">3</p>
        </button>

        <button
          className="absolute w-10 h-10 bg-black left-[calc(100%/(21/4.5))] -ml-5 rounded-br-full rounded-t-full -rotate-[45deg] text-white text-center  -translate-y-2"
          onClick={() => setMinRatio(4.5)}
        >
          <p className="rotate-45 font-medium text-lg">4.5</p>
        </button>

        <button
          className="absolute w-10 h-10 bg-black left-[calc(100%/(21/7))] -ml-5 rounded-br-full rounded-t-full -rotate-[45deg] text-white text-center -translate-y-2"
          onClick={() => setMinRatio(7)}
        >
          <p className="rotate-45 font-medium text-lg">7</p>
        </button>
      </div>
      <div className="mt-10 ">
        <label className="hidden" htmlFor="slider">
          Minimum Ratio
        </label>
        <input
          id="slider"
          type="range"
          className="rounded-full w-full track:h-6 appearance-none track:hover:bg-green-600 track:bg-green-500 thumb:bg-green-500 thumb:border-2 thumb:active:bg-white track:active:bg-green-500 thumb:border-white thumb:border-solid thumb:ease-in-out thumb:duration-300 thumb:appearance-none thumb:size-6 thumb:rounded-full track:rounded-full "
          min="0"
          max="21"
          value={minRatio}
          step="0.01"
          onChange={(ev) => {
            setMinRatio(Number(ev.target.value));
            console.log("onchange", minRatio);
          }}
        />
        <div className=" py-5 box-border relative mx-3">
          <div
            style={{ left: `${100 / (21 / minRatio)}%` }}
            className="w-10 absolute bg-green-600 -translate-x-1/2"
          >
            <h4 className=" flex items-center	justify-center absolute t-0 w-10 h-10 font-medium text-md  text-white origin-center -translate-y-4  ">
              {minRatio.toFixed(1)}
              <span className="absolute w-full h-full top-0 left-0 bg-green-600 rounded-tr-full rounded-b-full rotate-45 -z-[1]  "></span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
