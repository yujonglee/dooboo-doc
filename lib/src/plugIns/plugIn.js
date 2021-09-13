"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlugIn = /** @class */ (function () {
    function PlugIn(data) {
        this.data = data;
        this.labels = [data.name, 'Necessary', 'Types', 'Description', 'Default'];
        this.columnGetters = [
            function (_a) {
                var properties = _a.properties;
                return properties.map(function (_a) {
                    var name = _a.name;
                    return name;
                });
            },
            function (_a) {
                var properties = _a.properties;
                return properties.map(function (_a) {
                    var optional = _a.optional;
                    return (optional ? '' : '✓');
                });
            },
            function (_a) {
                var properties = _a.properties;
                return properties.map(function (_a) {
                    var type = _a.type;
                    return type;
                });
            },
            undefined,
            undefined,
        ];
    }
    return PlugIn;
}());
exports.default = PlugIn;
