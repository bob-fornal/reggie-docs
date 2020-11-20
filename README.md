
# Reggie-Docs

## About

This package will take a Template Literal, remove comments, and generate, either:

* `reggie.create`: A RegEx-ready String.
* `reggie.generate`: A RegExp Object.

## Version

`0.0.3`

## Installation

`npm install reggie-docs`

## Usage

```javascript

const Reggie = require('reggie-docs');
const reggie = new Reggie();

let results = {};

// /^[\s]*(.*?)[\s]*$/
const code0001 = `
  ^       // Beginning of line
  [\\s]*  // Zero or more whitespace

  (.*?)   // Any characters, zero to unlimited,
          //  lazy (as few times as possible, expanding as needed)

  [\\s]*  // Zero or more whitespace
  $       // End of line
`;
const patternCheck0001 = '  Test Spaces Before and After   ';

results.code0001 = reggie.create(code0001);
const code0001Exp = reggie.generate(code0001);
results.code0001Test = code0001Exp.exec(patternCheck0001)[1];

// ^((?<area>[\d]{3})[-][\d]{2}[-][\d]{4})$
const code0006 = `
  ^                   // BOL
  (                   // Group
    (?<area>            // Group-NAMED area
      [\\d]{3}            // 3-Digits
    )                   // Group-NAMED-END
    [-]                 // Literal, Dash
    [\\d]{2}            //  2-Digits
    [-]                 // Literal, Dash
    [\\d]{4}            // 4-Digits
  )                   // Group-END
  $                   // EOL
`;
const patternCheck0006a = '111-22-3333';
const patternCheck0006b = '111-22-aaaa';

results.code0006 = reggie.create(code0006);
const code0006Exp = reggie.generate(code0006);
results.code0006TestAValid = code0006Exp.exec(patternCheck0006a) !== null;
results.code0006TestBValid = code0006Exp.exec(patternCheck0006b) !== null;

console.log(results);
```

## To Do

1. Continue to improve the logic.
2. Add in error handling.
