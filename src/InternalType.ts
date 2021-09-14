import { SyntaxKind, SignatureDeclarationBase, TypeNode } from 'typescript';

const trim = (input: string) => input.replace(/Keyword$|Type$/, '');

class InternalType {
  type: SignatureDeclarationBase

  constructor(type: TypeNode) {
    this.type = type as unknown as SignatureDeclarationBase;
  }

  getString() {
    const { parameters, type, kind } = this.type;

    if (kind === SyntaxKind.FunctionType) {
      const parameterType = parameters.map(
        (parameter) => trim(SyntaxKind[parameter.type!.kind]),
      );
      const returnType = trim(SyntaxKind[type!.kind]);

      return `(${parameterType.join(', ')}) => ${returnType}`;
    }

    return trim(SyntaxKind[kind]);
  }
}

export default InternalType;
