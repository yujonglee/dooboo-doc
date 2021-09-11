import ts from 'typescript';

const trim = (string) => string.replace(/Keyword$|Type$/, '');

class InternalType {
  constructor(type) {
    this.type = type;
  }

  getString() {
    const { parameters, type, kind } = this.type;

    if (ts.SyntaxKind[kind] === 'FunctionType') {
      const parameterType = parameters.map(
        (parameter) => trim(ts.SyntaxKind[parameter.type.kind]),
      );
      const returnType = trim(ts.SyntaxKind[type.kind]);

      return `(${parameterType.join(', ')}) => ${returnType}`;
    }

    return trim(ts.SyntaxKind[kind]);
  }
}

export default InternalType;
