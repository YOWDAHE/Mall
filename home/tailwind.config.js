module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900: "#000000",
        red_600: "#ed2338",
        blue_gray_900: "#363434",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        black_900_1e: "#0000001e",
        black_900_26: "#00000026",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
