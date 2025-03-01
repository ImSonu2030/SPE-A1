module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^axios$": "<rootDir>/src/mock___/axios.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)"
  ]
};