"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalType = /** @class */ (function () {
    function ExternalType(type) {
        this.type = type;
    }
    ExternalType.prototype.getString = function () {
        var _a = this.type, typeName = _a.typeName, typeArguments = _a.typeArguments;
        var basic = typeName.escapedText;
        if (!typeArguments) {
            return basic;
        }
        var parameter = typeArguments[0]
            .typeName.escapedText;
        return basic + "<" + parameter + ">";
    };
    return ExternalType;
}());
exports.default = ExternalType;
