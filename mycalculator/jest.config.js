module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "^axios$": require.resolve("axios")
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)"  // ✅ Allow Jest to transform axios
    ],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testEnvironment: "jsdom"
  };