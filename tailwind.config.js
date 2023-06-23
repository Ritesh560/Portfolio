/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        light: "#F3F4F6",
        darkPrimary: "#EAB308",
        lightPrimary: "#7914E2",
        darkGradient: "linear-gradient(to top right, #912cf9 14%, #db0adb 93.79%, #c50cdd 93.8%, #b5bcf9 93.8%)",
        lightGradient: "linear-gradient(208.31deg, #081fea 14%, #c50cdd 93.79%, #db0adb 93.8%, #7914e2 93.8%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(#111827 0px, #f5f5f5 5px, #f5f5f5 100px )",
        circularDark: "repeating-radial-gradient(#f5f5f5 0px, #111827 5px, #111827 100px )",
        circularLightLg: "repeating-radial-gradient(#111827 0px, #f5f5f5 5px, #f5f5f5 60px )",
        circularDarkLg: "repeating-radial-gradient(#f5f5f5 0px, #111827 5px, #111827 60px )",
        circularLightSm: "repeating-radial-gradient(#757373 0px, #f5f5f5 5px, #f5f5f5 40px )",
        circularDarkSm: "repeating-radial-gradient(#bfbdbd 0px, #111827 5px, #111827 40px )",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}
