class ExternalType {
  constructor(type) {
    this.type = type;
  }

  getString() {
    const { typeName, typeArguments } = this.type;

    const basic = typeName.escapedText;
    const parameter = typeArguments?.[0].typeName?.escapedText;

    if (!parameter) {
      return basic;
    }

    return `${basic}<${parameter}>`;
  }
}

export default ExternalType;
