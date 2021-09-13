"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var util_1 = require("./util");
var plugIn_1 = __importDefault(require("../plugIn"));
var Converter = /** @class */ (function (_super) {
    __extends(Converter, _super);
    function Converter(data) {
        return _super.call(this, data) || this;
    }
    Object.defineProperty(Converter.prototype, "columnWidths", {
        get: function () {
            var _a = this, data = _a.data, labels = _a.labels, columnGetters = _a.columnGetters;
            return (columnGetters.map(function (getter, columnIndex) {
                var label = labels[columnIndex];
                if (!getter) {
                    return label.length;
                }
                var columnItems = getter(data);
                return Math.max.apply(Math, __spreadArray([label.length], columnItems.map(function (item) { return item.length; }), false));
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Converter.prototype, "header", {
        get: function () {
            var _a = this, data = _a.data, labels = _a.labels, columnGetters = _a.columnGetters, columnWidths = _a.columnWidths;
            var formattedLabels = columnGetters.map(function (getter, columnIndex) {
                var label = labels[columnIndex];
                if (!getter) {
                    return label;
                }
                var columnItems = getter(data);
                return (0, util_1.fit)(Math.max.apply(Math, __spreadArray([label.length], columnItems.map(function (item) { return item.length; }), false)), label);
            });
            var divider = "| " + columnWidths.map(function (size) { return '-'.repeat(size); }).join(' | ') + " |";
            return "| " + formattedLabels.join(' | ') + " |\n" + divider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Converter.prototype, "content", {
        get: function () {
            var _a = this, data = _a.data, columnGetters = _a.columnGetters, columnWidths = _a.columnWidths;
            var properties = data.properties;
            return ((0, util_1.range)(properties.length).reduce(function (acc, rowIndex) {
                var items = columnGetters.map(function (getter, columnIndex) {
                    var width = columnWidths[columnIndex];
                    if (!getter) {
                        return (0, util_1.fit)(width);
                    }
                    var columnItems = getter(data);
                    return (0, util_1.fit)(width, columnItems[rowIndex]);
                });
                var row = "| " + items.join(' | ') + " |\n";
                return acc + row;
            }, ''));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Converter.prototype, "result", {
        get: function () {
            return this.header + "\n" + this.content;
        },
        enumerable: false,
        configurable: true
    });
    return Converter;
}(plugIn_1.default));
exports.default = Converter;
