module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        backgroundGrey: "#F5F3F3",
        defaultPink: "#F5CCE2",
        lightPink: "rgba(245, 204, 226, 0.4)", 
        lightPinkOpaque: "#FFD3EB",
        defaultYellow: "#FFDD4A",
        lightYellow: "rgba(255, 221, 74, 0.15)", 
        darkGrey: "#D9D9D9",
        pollBarGrey: "#ebe9e0",
        pollBarHover: "#f7e595c9"
      },
      fontFamily: {
        sans: ['Gothic A1', 'Inter', 'sans-serif'],
        header: ['SF Pro Rounded', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
