module.exports = {
  plugins: ["react", "@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  settings: { react: { version: "detect" } },
};
