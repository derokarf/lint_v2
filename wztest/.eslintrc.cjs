module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  root: true,
  extends: 
  "eslint:recommended",
  plugins: ["promise", "import"],
  rules: {
    "no-console": "error",
    "max-lines-per-function": [ "error", { "max": 100, "skipComments": true, "skipBlankLines": true } ],
    "max-len": [ "error", { "code": 150, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreComments": true } ],
    "object-curly-spacing": [ "error", "always" ],
    // "max-depth": ["error", 4],
    // "max-statements": ["error", 50],
    "max-nested-callbacks": ["error", 3],
    "no-return-await": [ "error" ],
    // "max-statements-per-line": ["error", { "max": 3 }],
    "require-await": [ "error" ],
    "handle-callback-err": [ "error", "error" ],
    "no-throw-literal": [ "error" ],
    "prefer-promise-reject-errors": [ "error" ],
    //"promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    //"promise/catch-or-return": "error", -- кажется, это надо будет включитть потом
    "promise/no-native": "off",
    //"promise/no-nesting": "warn" -- кажется, это надо будет включитть потом
    //"promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    //"promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    "import/no-unresolved": [2, { commonjs: false, amd: false }],
    "import/named": 2,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [2, "ignorePackages"]
  }
}
