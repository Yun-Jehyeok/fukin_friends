/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      width: {
        default: "1177px",
      },
      boxShadow: {
        default: "0 1px 3px rgb(115 115 115 / 16%)",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.24, 0.77, 0.32, 0.95)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
