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
    setColors((preVal) => new Set(preVal.add(tinycolor(input).toHexString())));
    setInput("");
  };
  return (
    <form
      className="bg-white p-2 border border-gray-400 rounded-full  shadow shadow-gray-500 max-w-1/4"
      onSubmit={(e) => handleFrom(e)}
    >
      <input
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        type="text"
        name="colorinput"
        placeholder="hex/rgb"
      />
      <input
        className="bg-blue-500 px-3 py-1 rounded-full border-2 border-blue-700"
        type="button"
        name="submit"
        value={"submit"}
        onClick={() => {
          handleFrom();
        }}
      />
    </form>
  );
}
