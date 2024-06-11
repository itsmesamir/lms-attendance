/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      animation: {
        bounce1: "bounce1 1.5s infinite",
        bounce2: "bounce2 1.5s infinite",
        bounce3: "bounce3 1.5s infinite",
      },
      keyframes: {
        bounce1: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-5px)" },
        },
        bounce3: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
