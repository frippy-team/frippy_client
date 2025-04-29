const config = [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {},
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "single"],
      "no-unused-vars": "warn",
    },
  },
];

export default config;
