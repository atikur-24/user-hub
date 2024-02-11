/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEE2E6",
        secondary: "#9399A1",
        bgPrimary: "#17161A",
        bgSecondary: "#1B1A1E",
        "gray-1": "#EAEAEA",
        "gray-2": "#f9f9f9",
        "gray-9": "#1D212B",
        "green-2": "#00cf5d",
        "deep-green": "#00D991A1",
        "sea-green": "#37A5BF",
      },
    },
  },
  plugins: [],
};

// TODO: Delete it
// bgPrimary: "#161717", #17161A
// bgSecondary: "#202020", #1B1A1E
// border color: #212024
// txt color: #DEE2E6  #9399A1
