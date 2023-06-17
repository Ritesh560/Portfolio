/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        light: "#FFFFFF",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: { circularLight: "repeating-radial-gradient(#111827 0px, #FFFFFF 5px, #FFFFFF 100px )", circularDark: "repeating-radial-gradient(#FFFFFF 0px, #111827 5px, #111827 100px )" },
    },
  },
  plugins: [],
}
