module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "airbnb",
  ],
  // add your custom rules here
  rules: {
    "max-len": "off",
    "no-underscore-dangle": "off",
    quotes: ["error", "double"],
  },
};
