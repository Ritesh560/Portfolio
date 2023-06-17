/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: { circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 0px, #f5f5f5 5px, #f5f5f5 100px )" },
    },
  },
  plugins: [],
}
