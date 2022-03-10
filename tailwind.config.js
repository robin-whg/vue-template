module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
    "./src/layouts/vue,js,ts,jsx,tsx}",
    "./src/composables/vue,js,ts,jsx,tsx}",
    "./src/modules/vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#42b883",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
