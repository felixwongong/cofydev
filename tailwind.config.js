module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FBE8A6",
        secondary: "#F4976C",
        dark: "#303C6C",
      },
      fontFamily: {
        rain: ["rain"],
      },
    },
  },
  variants: {},
  plugins: [],
};
