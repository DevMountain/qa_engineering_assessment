module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["__tests__/assets/", "__tests__/pages"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
