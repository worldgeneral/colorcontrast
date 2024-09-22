import { score } from "wcag-contrast";

type Props = {
  type: "Small" | "Large" | "Non";
  contrast: number;
};

export default function ContrastCard(props: Props) {
  const grade = score(props.contrast);
  return (
    <div className=" bg-white pl-2 text-lg">
      <div>{props.type}:</div>
      <span>
        {props.type === "Non"
          ? grade !== "Fail"
            ? "AA"
            : grade
          : grade === "AA Large"
          ? "AA"
          : grade}
      </span>

      {grade === "Fail" ? (
        <svg
          className="w-1/3 inline-block aspect-square "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="red"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      ) : (
        <svg
          className="w-1/3 inline aspect-square "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="green"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      )}
    </div>
  );
}
