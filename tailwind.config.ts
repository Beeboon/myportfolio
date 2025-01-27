// Importation des types et modules nécessaires
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// Définition de la configuration Tailwind CSS
const tailwindConfig: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiger: {
          50: "#fbe8e8",
          100: "#f5d1d1",
          200: "#eaa3a3",
          300: "#df7575",
          400: "#d44747",
          DEFAULT: "#963835",
          600: "#7b2d2d",
          700: "#602323",
          800: "#451818",
          900: "#2a0d0d",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
  ],
};

// Fonction pour ajouter les variables CSS pour les couleurs
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default tailwindConfig;
