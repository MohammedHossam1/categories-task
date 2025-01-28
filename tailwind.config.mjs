/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1120px",
        "3xl": "1400px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xlg: "1440px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      flex: {
        basis: "1 1 300px", // Define the shorthand for flex-grow, shrink, and basis
      },
      colors: {
        main: "#1A4B7B",
        lightmain: "#C9EBFF",
        secondary: "#E8EDF2",
        body: "#FEFEFE",
        light: "#F5F5F5",
        discountColor: "#FF7B02",
      },
  
    },
  },
  plugins: [require("tailwindcss-animate")],
};
