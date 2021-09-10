import ts from 'typescript';

class InternalType {
  constructor(type) {
    this.type = type;
  }

  getString() {
    const string = ts.SyntaxKind[this.type.kind];
    const ret = string.replace(/Keyword|Type/, '');
    // ToDo support Function

    return ret;
  }
}

export default InternalType;
