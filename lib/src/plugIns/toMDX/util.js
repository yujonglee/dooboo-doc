"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.fit = void 0;
var fit = function (standard, string) {
    if (string === void 0) { string = ' '.repeat(standard); }
    if (standard <= string.length) {
        return string;
    }
    return "" + string + ' '.repeat(standard - string.length);
};
exports.fit = fit;
var range = function (size) { return Array.from(Array(size).keys()); };
exports.range = range;
exports.default = {};
