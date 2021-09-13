import ts, {SignatureDeclarationBase, TypeNode } from 'typescript';

const trim = (input: string) => input.replace(/Keyword$|Type$/, '');

class InternalType {
  type: SignatureDeclarationBase

  constructor(type: TypeNode) {
    this.type = type as unknown as SignatureDeclarationBase;
  }

  getString() {
    const { parameters, type, kind } = this.type;

    if (ts.SyntaxKind[kind] === 'FunctionType') {
      const parameterType = parameters.map(
        (parameter) => trim(ts.SyntaxKind[parameter.type!.kind]),
      );
      const returnType = trim(ts.SyntaxKind[type!.kind]);

      return `(${parameterType.join(', ')}) => ${returnType}`;
    }

    return trim(ts.SyntaxKind[kind]);
  }
}

export default InternalType;