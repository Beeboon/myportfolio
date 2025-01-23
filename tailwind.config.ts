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
      colors: {},
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
