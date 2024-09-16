import { useState } from "react";
import tinycolor from "tinycolor2";

export default function ColorInput({
  setColors,
}: {
  setColors: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        type="text"
        name="colorinput"
        placeholder="hex/rgb"
      />
      <input
        type="button"
        name="submit"
        value={"submit"}
        onClick={() => {
          setColors(
            (preVal) => new Set(preVal.add(tinycolor(input).toHexString()))
          );
          setInput("");
        }}
      />
    </div>
  );
}
