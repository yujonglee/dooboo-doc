import ts from 'typescript';

const trim = (string) => string.replace(/Keyword$|Type$/, '');

class InternalType {
  constructor(type) {
    this.type = type;
  }

  getString() {
    const string = ts.SyntaxKind[this.type.kind];
    const ret = trim(string);

    if (ret === 'Function') {
      const { parameters, type } = this.type;

      const parameterType = parameters.map((_) => trim(ts.SyntaxKind[_.type.kind]));
      const returnType = trim(ts.SyntaxKind[type.kind]);

      return `(${parameterType.join(', ')}) => ${returnType}`;
    }

    return ret;
  }
}

export default InternalType;
