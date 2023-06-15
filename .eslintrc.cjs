module.exports = {
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off", // Disable the prop-types rule
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false, varsIgnorePattern: "^_", argsIgnorePattern: "^_" }], //yellow line for unused variables and for error it will be default red
  },
}
