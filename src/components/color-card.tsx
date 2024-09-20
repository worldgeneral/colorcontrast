import invert from "invert-color";
import ContrastCard from "./contrast-card";

type Props = {
  color1: string;
  color2: string;
  contrast: number;
};

export function ColorCard(props: Props) {
  return (
    <div
      style={{ backgroundColor: props.color1, borderColor: props.color1 }}
      className=" w-72 flex flex-col m-1 rounded-lg border-4 overflow-hidden cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(props.color1);
      }}
    >
      <div className="flex justify-between">
        <div className="m-2">
          <p style={{ color: props.color2 }} className="text-sm font-semibold">
            123Abc
          </p>
          <p style={{ color: props.color2 }} className="text-xl font-semibold">
            123Abc
          </p>
        </div>
        <div className="m-2 flex flex-col">
          <button
            style={{
              borderColor: invert(props.color2, true),
              backgroundColor: props.color2,
              color: invert(props.color2, true),
            }}
            className="border border-black rounded-lg p-0.5 w-20 text-center my-auto"
            onClick={() => {
              navigator.clipboard.writeText(props.color2);
            }}
          >
            {props.color2}
          </button>
        </div>
      </div>
      <div className="flex  justify-center font-medium mb-1">
        <ContrastCard type="Small" contrast={props.contrast} />
        <ContrastCard type="Large" contrast={props.contrast} />
        <ContrastCard type="Non" contrast={props.contrast} />
      </div>
      <div className="bg-white h-8 mt-auto font-medium">
        <span className="ml-2">Contrast:</span>
        <span className="ml-2">{props.contrast.toFixed(2)}</span>
      </div>
    </div>
  );
}
