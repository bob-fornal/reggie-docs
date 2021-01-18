
# Reggie-Docs

## About

This package will take a Template Literal, remove comments, and generate, either:

* `reggie.create` creates RegEx-ready String.
* `reggie.generate` generates RegExp Object.

## Version

`0.0.7`

## Installation

`npm install reggie-docs`

## Usage

### Options

#### setFlag

`reggie.setFlag(flag)` sets the default flag used for `reggie.generate`.

* Takes a string.

#### create

`reggie.create(templateLiteral)` returns a RegEx-ready String.

* Takes a template literal.

``reggie.create`a tagged template literal` `` returns a Regex-ready String.

* Tagged with a template literal.

#### generate

`reggie.generate(templateLiteral, [flags = 'gm'])` returns a RegExp Object.

* Takes a template literal.
* Optional flags: defaults to `gm`

``reggie.generate`a tagged template literal` `` returns a RegExp Object.

* Tagged with a template literal.
* Cannot pass flag with this method; use `reggie.setFlag` before `reggie.generate`.

### Examples

```javascript

const Reggie = require('reggie-docs');
const reggie = new Reggie();

let results = {};

// /^[\s]*(.*?)[\s]*$/
const code0001 = `
  ^       // Beginning of line
  [\s]*  // Zero or more whitespace

  (.*?)   // Any characters, zero to unlimited,
          //  lazy (as few times as possible, expanding as needed)

  [\s]*  // Zero or more whitespace
  $       // End of line
`;
const patternCheck0001 = '  Test Spaces Before and After   ';

results.code0001 = reggie.create(code0001);
const code0001Exp = reggie.generate(code0001);
results.code0001Test = code0001Exp.exec(patternCheck0001)[1];

results.code0002 = reggie.create`
  ^       // Beginning of line
  [\s]*  // Zero or more whitespace

  (.*?)   // Any characters, zero to unlimited,
          //  lazy (as few times as possible, expanding as needed)

  [\s]*  // Zero or more whitespace
  $       // End of line
`;

results.code0003 = reggie.generate`
  ^       // Beginning of line
  [\s]*  // Zero or more whitespace

  (.*?)   // Any characters, zero to unlimited,
          //  lazy (as few times as possible, expanding as needed)

  [\s]*  // Zero or more whitespace
  $       // End of line
`;

// ^((?<area>[\d]{3})[-][\d]{2}[-][\d]{4})$
const code0004 = `
  ^                   // BOL
  (                   // Group
    (?<area>            // Group-NAMED area
      [\d]{3}            // 3-Digits
    )                   // Group-NAMED-END
    [-]                 // Literal, Dash
    [\d]{2}            //  2-Digits
    [-]                 // Literal, Dash
    [\d]{4}            // 4-Digits
  )                   // Group-END
  $                   // EOL
`;
const patternCheck0004a = '111-22-3333';
const patternCheck0004b = '111-22-aaaa';

results.code0004 = reggie.create(code0004);
const code0004Exp = reggie.generate(code0004);
results.code0004TestAValid = code0006Exp.exec(patternCheck0004a) !== null;
results.code0004TestBValid = code0006Exp.exec(patternCheck0004b) !== null;

// /^(v?\d+\.\d+\.\d+)$/gi
const code0005 = `
  ^       // BOL
  (       // Group
    v?    // Version Optional
    \d+   // Any Digit (at least one)
    \.    //  PERIOD CHARACTER
    \d+   // Any Digit (at least one)
    \.    //  PERIOD CHARACTER
    \d+   // Any Digit (at least one)
  )
  $       // EOL
`;

results.code0005 = reggie.generate(code0005, 'gi');

console.log(results);
```

## To Do

1. [REQUESTED] Create a way to use this in a build process.
2. Continue to improve the logic.
3. Add in error handling.
