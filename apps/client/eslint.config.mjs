import tsParser from "@typescript-eslint/parser";
import baseConfig from "@frippy-client/eslint-config";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  },
  ...baseConfig,
];
