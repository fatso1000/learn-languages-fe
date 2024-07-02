/** @type {import('tailwindcss').Config} */
import themes from "daisyui/src/theming/themes";
import daisyui from "daisyui";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        visibility: "fade-out 0s linear 0.33s",
      },
      keyframes: {
        "fade-out": {
          to: {
            display: "none",
            opacity: "0",
          },
        },

        showAndHide: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        bounce: {
          "0%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        autumn: {
          ...themes["autumn"],
          info: "#41ACBA",
          accent: "#DBBBFF",
        },
      },
    ],
  },
  plugins: [daisyui, typography, forms],
};
