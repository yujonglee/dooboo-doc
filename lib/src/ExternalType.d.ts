import { TypeNode, TypeReferenceNode } from "typescript";
declare class ExternalType {
    type: TypeReferenceNode;
    constructor(type: TypeNode);
    getString(): string | (void & {
        __escapedIdentifier: void;
    });
}
export default ExternalType;
