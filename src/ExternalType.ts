import { Identifier, TypeNode, TypeReferenceNode } from 'typescript';

class ExternalType {
  type: TypeReferenceNode;

  constructor(type: TypeNode) {
    this.type = type as TypeReferenceNode;
  }

  getString() {
    const { typeName, typeArguments } = this.type;

    const basic = (typeName as Identifier).escapedText;

    if (!typeArguments) {
      return basic;
    }

    const parameter = (
      (typeArguments[0] as TypeReferenceNode)
        .typeName as Identifier
    ).escapedText;

    return `${basic}<${parameter}>`;
  }
}

export default ExternalType;
