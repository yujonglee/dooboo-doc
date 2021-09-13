"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = __importDefault(require("typescript"));
var trim = function (input) { return input.replace(/Keyword$|Type$/, ''); };
var InternalType = /** @class */ (function () {
    function InternalType(type) {
        this.type = type;
    }
    InternalType.prototype.getString = function () {
        var _a = this.type, parameters = _a.parameters, type = _a.type, kind = _a.kind;
        if (typescript_1.default.SyntaxKind[kind] === 'FunctionType') {
            var parameterType = parameters.map(function (parameter) { return trim(typescript_1.default.SyntaxKind[parameter.type.kind]); });
            var returnType = trim(typescript_1.default.SyntaxKind[type.kind]);
            return "(" + parameterType.join(', ') + ") => " + returnType;
        }
        return trim(typescript_1.default.SyntaxKind[kind]);
    };
    return InternalType;
}());
exports.default = InternalType;
