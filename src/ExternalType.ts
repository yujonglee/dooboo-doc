import { Identifier, TypeReferenceNode } from 'typescript';

class ExternalType {
  type: TypeReferenceNode;

  constructor(type: TypeReferenceNode) {
    this.type = type;
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
