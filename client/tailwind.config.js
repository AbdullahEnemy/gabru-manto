/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        mono: ["Space Mono"],
      },
      boxShadow: {
        default: "6px 6px 0px 0px #180904",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        gabru: {
          primary: "#fcecdd",
          secondary: "#180904",
          accent: "#F65E2F",
          neutral: "#4A3F35",
          "base-100": "#fcecdd",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
