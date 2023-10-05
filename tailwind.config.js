/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        gochihand: "Gochi Hand",
        "redacted-script": "'Redacted Script'",
        GochiHand: ["Gochi Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
