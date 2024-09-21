import { useState } from "react";

type Props = {
  time: number;
  text: string;
  width?: number;
  height?: number;
  translate?: string;
};

export default function CopyPopUp(props: Props) {
  const [actionStatus, setActionStatus] = useState(0);
  const handleButtonClick = () => {
    setActionStatus(1);
    setTimeout(() => {
      setActionStatus(0);
    }, props.time);
  };
  return (
    <div
      style={
        actionStatus === 1
          ? {
              transform: props.translate ? props.translate : "translateY(2rem)",
              opacity: 70,
              width: props.width + "rem",
              height: props.height + "rem",
            }
          : undefined
      }
      className="w-full h-full absolute left-0 top-0 bg-gray-700 opacity-0 text-white border rounded-lg font-semibold text-center"
      onClick={() => handleButtonClick()}
    >
      {props.text}
    </div>
  );
}
//"translateY(2rem)",
