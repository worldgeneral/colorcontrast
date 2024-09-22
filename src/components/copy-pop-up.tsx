import { useState } from "react";

type Props = {
  time: number;
  text: string;
  color: string;
};

export default function CopyPopUp(props: Props) {
  const [actionStatus, setActionStatus] = useState(0);
  const handleButtonClick = () => {
    setActionStatus(1);
    navigator.clipboard.writeText(props.color);
    setTimeout(() => {
      setActionStatus(0);
    }, props.time);
  };
  return (
    <button
      style={
        actionStatus === 1
          ? {
              left: "50%",
              opacity: 70,
              transform: "translate(-50% , 100%)",
              width: `${props.text.length}ch`,
            }
          : { opacity: 0, height: "100%", width: "100%" }
      }
      className="absolute left-0 top-0 bg-gray-700 text-white border rounded-lg font-semibold text-center "
      onClick={() => handleButtonClick()}
    >
      {props.text}
    </button>
  );
}
