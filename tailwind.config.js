module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FBE8A6",
        secondary: "#F4976C",
        light: "#FEF3C7",
        dark: "#303C6C",
        blue: "#D2FDFF",
        deepblue: "#B4DFE5",

        darklight: "#EEEEEE",
        darkPrimary: "#393E46",
        darkSecondary: "#393E46",
        darkDark: "#222831",
        lightOrange: "#FD7014",
        orange: "#D84E4B",
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
      backgroundImage: {
        coffee: "url('/dist/img/coffee.gif')",
      },
    },
  },
  variants: {},
  plugins: [],
};
