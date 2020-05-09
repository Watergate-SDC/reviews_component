module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  verbose: true,
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    ".*css$": "<rootDir>/test/.."
  },
  "preset": "@shelf/jest-mongodb"
}