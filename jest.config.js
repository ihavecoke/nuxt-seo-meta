module.exports = {
  roots: ["./src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  }
}
