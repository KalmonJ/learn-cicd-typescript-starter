import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";


export default defineConfig([
  globalIgnores(["node_modules/*", "dist/*", "coverage/*"]),
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser }},
  pluginSecurity.configs.recommended,
  tseslint.configs.recommended,
]);
