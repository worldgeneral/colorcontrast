const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        triangles: "url('/public/2-triangles.svg')",
        logo: "url('/public/color-contrast-logo.svg')",
        "color-wheel": "url('/public/color-wheel-bg.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("track", [
        "&::-webkit-slider-runnable-track",
        "&::-moz-range-track",
      ]);
      addVariant("thumb", ["&::-webkit-slider-thumb", "&::-moz-range-thumb"]);
    }),
  ],
};
