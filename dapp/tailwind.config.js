/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        co2Bg: 'url("/src/assets/co2_bg.png")',
        bgFlare: 'url("/src/assets/bg-flare.png")',
      },
      colors: {
        primaryColor: "#03760F",
        darkPrimary: "#121212",
        white50: "rgba(255, 255, 255, 0.50)",
      },
    },
  },
  plugins: [],
};
