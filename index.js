
class Reggie {
  constructor() {
    this.defaultFlag = 'gm';
  }

  setFlag(flag) {
    this.defaultFlag = flag;
  }

  stripComments(templateLiteral) {
    let string = (typeof templateLiteral === 'string') ? templateLiteral : templateLiteral.raw[0];
    return string
      .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '');
  }

  create(templateLiteral) {
    let string = (typeof templateLiteral === 'string') ? templateLiteral : templateLiteral.raw[0];
    return this.stripComments(string)
      .replace(/(\r\n|r\|\n|\s)/gm, '');
  }

  generate(templateLiteral, flags = this.defaultFlag) {
    let string = (typeof templateLiteral === 'string') ? templateLiteral : templateLiteral.raw[0];
    return new RegExp(this.create(string), flags);
  }
}

module.exports = Reggie;
