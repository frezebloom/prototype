
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testEnvironment": "node",

  // Setup Enzyme
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"]
}