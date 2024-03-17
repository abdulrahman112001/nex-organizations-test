/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // contained:"#5A5FE0",
        contained: "#9F9685",
        darkModeColor: "#313B3E",
        primary: "#C5B279",
        secondary: "#9F9685",
        primaryText: "#1d1d1d",
        secondaryText: "#967860",
        dark: {
          primary: "#2c3639",
        },
      },
      screens: {
        "3xl": "1940px",
        xs: "350px",
        L: "700px",
        mx: "915px",
        customSix:"1330px"
      },
    },
  },
  plugins: [],
};
