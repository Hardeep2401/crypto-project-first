/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["inter,sans-serif"],
    },
    extend: {
      colors: {
        "gray-french": "#bcbcc2",
        blueD: "#111745",
        blueE: "#111740",
        blueF: "#3e7dff",
        blueG: "#080321",
        blueH: "#14102C",
        blueI: "#1f2756",
        blueJ: "#170E43",
      },
      width: {
        17: "70px",
        18: "74px",
      },

      height: {
        17: "70px",
        18: "74px",
      },
    },
  },
  plugins: [],
};
