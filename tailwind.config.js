/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "360px", // => @media (min-width: 360px) { ... }
        tablet: "640px", // => @media (min-width: 640px) { ... }
        laptop: "1024px", // => @media (min-width: 1024px) { ... }
        desktop: "1280px", // => @media (min-width: 1280px) { ... }
      },
      colors: {
        preto: "#121212",
        vermelho: "#B22234",
        vermelho2: "#9E1B32",
      },
      fontFamily: {
        poppins: ["Poppins"],
        protest: ["Protest Revolution"],
      },
      backgroundImage: {
        home: "url('/src/assets/hm.png')",
        samurai: "url('/src/assets/samurai.png')",
        cfundo: "url('/src/assets/cfundo.jpg')",
      },
      keyframes: {
        floatRight: {
          "0%": { transform: "translatex(0px)" },
          "50%": { transform: "translatex(8px)" },
          "100%": { transform: "translatex(0px)" },
        },
        floattop: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0)" },
        },
        vibracall: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "0%": { transform: "translateX(0)" },
        },
      },
      animation: {
        floatRight: "floatRight 2.5s infinite",
        floattop: "floattop 1s ease-in-out infinite",
        vibracall: "vibracall 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

