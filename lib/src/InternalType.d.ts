import { SignatureDeclarationBase, TypeNode } from 'typescript';
declare class InternalType {
    type: SignatureDeclarationBase;
    constructor(type: TypeNode);
    getString(): string;
}
export default InternalType;
