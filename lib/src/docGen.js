"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parse_1 = __importDefault(require("./parse"));
var converter_1 = __importDefault(require("./plugIns/toMDX/converter"));
var Converters = {
    toMDX: converter_1.default,
};
var docGen = function (_a) {
    var plugIn = _a.plugIn;
    var data = (0, parse_1.default)();
    return (data.map(function (declaration) { return new (Converters[plugIn])(declaration).result; }));
};
exports.default = docGen;
