/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-400": "#23292c",
        "black-500": "#212227",
        "black-600": "#14191b",
        "black-800": "#18191d",
        "gray-light": "#c0c0c0",
        "gray-dark": "#4e4e4e",
        "white-light": "#eeeeee",
        "white-smoke": "#f3f3f3",
        black: "#000000",
        "purple-light": "#d884ff",
        green: "#53c66c",
        purple: "#6637ed",
        blue: "#849dff",
        yellow: "#fcc55a",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
