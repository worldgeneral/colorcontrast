import React, { useState } from "react";
import tinycolor from "tinycolor2";

export default function ColorInput({
  setColors,
}: {
  setColors: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const [input, setInput] = useState("");
  const handleFrom = (e?: React.FormEvent<HTMLFormElement>) => {
    e ? e.preventDefault() : undefined;
    setColors(
      (preVal) =>
        new Set(preVal.add(tinycolor(input).toHexString().toLocaleLowerCase()))
    );
    setInput("");
  };
  return (
    <form
      className="bg-white    border border-gray-400 rounded-full shadow shadow-gray-500 max-w-[50vw] w-full mb-5 "
      onSubmit={(e) => handleFrom(e)}
    >
      <div className="flex rounded-full m-1 ml-3 	">
        <input
          className=" w-full mr-2 "
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          type="text"
          name="colorinput"
          placeholder="hex/rgb"
        />
        <input
          className="bg-green-500 px-3 h-10 py-1 rounded-full border-2 border-green-700 ml-auto"
          type="button"
          name="submit"
          value={"submit"}
          onClick={() => {
            handleFrom();
          }}
        />
      </div>
    </form>
  );
}
