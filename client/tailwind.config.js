/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        custom_green: "#03b57b",
        custom_white: "#fefefe",
        custom_grey: "#595456",
        custom_black: "#272829",
        custom_orange: "#ea940c"
      },
    },
  },
  plugins: [],
};
