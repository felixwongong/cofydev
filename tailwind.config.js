module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FBE8A6",
        secondary: "#F4976C",
      },
      fontFamily: {
        rain: ["rain"],
      },
    },
  },
  variants: {},
  plugins: [],
};
