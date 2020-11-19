
const Reggie = require('../index');

describe('Reggie-Doc Unit Tests', () => {
  let reggie;

  beforeEach(() => {
    reggie = new Reggie();
  });

  afterEach(() => {
    reggie = null;
  });

  it('expects stripComments to remove commented lines', () => {
    const stringLiteral = `
      code = more // comment here
      code2 = more 2 // more comments`;
    const final = `
      code = more
      code2 = more 2`;

    const result = reggie.stripComments(stringLiteral);
    expect(result).toEqual(final);
  });

  it('expects create to strip out remaining spaces and line breaks', () => {
    const stringLiteral = `
      line1 // comment
      line2 // comment`;
    const final = `line1line2`;

    const result = reggie.create(stringLiteral);
    expect(result).toEqual(final);
  });

  it('expects generate to return a RegExp Object', () => {
    const stringLiteral = `\\s`;
    const final = /\s/gm;

    const result = reggie.generate(stringLiteral);
    expect(result).toEqual(jasmine.any(Object));
    expect(result).toEqual(final);
  });

  it('expects generate to return a RegExp Object with optional flag', () => {
    const stringLiteral = `\\s`;
    const flag = 'i';
    const final = /\s/i;

    const result = reggie.generate(stringLiteral, flag);
    expect(result).toEqual(jasmine.any(Object));
    expect(result).toEqual(final);
  });
});
