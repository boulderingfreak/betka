// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier"); // Dodaj to
const prettierPlugin = require("eslint-plugin-prettier"); // Dodaj to

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      prettier: prettierPlugin, // Rejestrujemy plugin
    },
    rules: {
      "prettier/prettier": "error", // Wymuszamy błędy Prettiera
    },
  },
  {
    ignores: ["dist/*"],
  },
  prettierConfig, // Musi być NA SAMYM KOŃCU, żeby wyłączyć konflikty
]);
