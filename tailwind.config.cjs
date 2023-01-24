/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      colors: {
        site: {
          primary: "#58d777",
          dark: {
            400: "#474d84",
            DEFAULT: "#2f3462",
            600: "#17193b",
            700: "#11132e",
          },
          light: {
            400: "#ffffff",
            DEFAULT: "#e4e6eb",
            600: "#eef1fb",
          },
        },
      },
    },
  },
  plugins: [],
};
