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
      textColor: {
        darkblue: "#151875",
        basered: "#fb2e86",
      },
      backgroundColor: {
        basered: "#fb2e86",
      },
      backgroundImage: {
        search: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z' stroke='%23CBCBE0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.9996 14L11.0996 11.1' stroke='%23CBCBE0' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
      },
      backgroundPosition: {
        cr12: "center right 12px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
