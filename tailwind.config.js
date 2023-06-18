/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        light: "#f5f5f5",
        darkPrimary: "#EAB308",
        lightPrimary: "#7914E2",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: { circularLight: "repeating-radial-gradient(#111827 0px, #f5f5f5 5px, #f5f5f5 100px )", circularDark: "repeating-radial-gradient(#f5f5f5 0px, #111827 5px, #111827 100px )" },
    },
  },
  plugins: [],
}
