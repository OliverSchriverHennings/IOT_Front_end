/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        batterytella: {
          primary: "#16a34a",

          secondary: "#9a3412",

          accent: "#0e7490",

          neutral: "#292524",

          "base-100": "#454a48",

          info: "#66C7FF",

          success: "#87D039",

          warning: "#f97316",

          error: "#FF7070",
        },
      },
    ],
  },
};
