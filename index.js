
class Reggie {
  constructor() {}

  stripComments(stringLiteral) {
    return stringLiteral
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '');
  }

  create(stringLiteral) {
    return this.stripComments(stringLiteral)
      .replace(/(\r\n|r\|\n|\s)/gm, '');
  }

  generate(stringLiteral, flags = 'gm') {
    return new RegExp(this.create(stringLiteral), flags);
  }
}

module.exports = Reggie;
