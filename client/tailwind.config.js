/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        c_green: "#03b57b",
        c_white: "#fefefe",
        c_grey: "595456",
        c_black: "#323232",
        c_lightgrey: "#ea940c"
      }
    },
  },
  plugins: [],
};
