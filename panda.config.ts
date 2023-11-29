import { defineConfig } from "@pandacss/dev";
import { avatarRecipe } from "./src/components/avatar/recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        avatar: avatarRecipe
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
