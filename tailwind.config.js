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
        "gray-9": "#212024",
        "green-2": "#2bb9da",
        "deep-green": "#37A5BF",
        "sea-green": "#006B5F",
      },
    },
  },
  plugins: [],
};
