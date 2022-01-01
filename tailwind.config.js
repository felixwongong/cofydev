module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FBE8A6",
        secondary: "#F4976C",
        light: "#FEF3C7",
        dark: "#303C6C",
        blue: "#D2FDFF",
        deepblue: "#B4DFE5",
      },
      fontFamily: {
        rain: ["rain"],
      },
      cursor: {
        key: "url(./dist/cur/key.svg), pointer",
      },
      container: {
        center: true,
        padding: "0 3.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
