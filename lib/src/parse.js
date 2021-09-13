"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = __importDefault(require("typescript"));
var ExternalType_1 = __importDefault(require("./ExternalType"));
var InternalType_1 = __importDefault(require("./InternalType"));
var fs_1 = __importDefault(require("fs"));
var getConfig_1 = __importDefault(require("./getConfig"));
var isInternalType = function (type) { return typescript_1.default.SyntaxKind[type.kind] !== 'TypeReference'; };
var typeFactory = function (type) { return (isInternalType(type)
    ? new InternalType_1.default(type)
    : new ExternalType_1.default(type)); };
var parse = function () {
    var path = (0, getConfig_1.default)().path;
    var node = typescript_1.default.createSourceFile('', fs_1.default.readFileSync(path, 'utf8'), typescript_1.default.ScriptTarget.Latest);
    var ret = [];
    node.forEachChild(function (child) {
        if (typescript_1.default.SyntaxKind[child.kind] === 'InterfaceDeclaration') {
            var properties = child.members.reduce(
            // @ts-ignore
            function (acc, cur) {
                var _a = cur, type = _a.type, name = _a.name, questionToken = _a.questionToken;
                return (__spreadArray(__spreadArray([], acc, true), [{
                        name: name.escapedText,
                        type: typeFactory(type).getString(),
                        optional: !!questionToken,
                    }], false));
            }, []);
            ret.push({
                name: child.name.escapedText,
                properties: properties,
            });
        }
    });
    return ret;
};
exports.default = parse;
