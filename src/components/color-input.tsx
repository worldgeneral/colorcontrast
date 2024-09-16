import { useState } from "react";

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
          setColors((preVal) => new Set(preVal.add(input)));
          setInput("");
        }}
      />
    </div>
  );
}
