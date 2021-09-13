"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var converter_1 = __importDefault(require("./converter"));
var data = {
    name: 'Styles',
    properties: [
        {
            name: 'container',
            optional: true,
            type: 'ViewStyle',
        },
        {
            name: 'onElementContainer',
            optional: true,
            type: 'StyleProp<ViewStyle>',
        },
        {
            name: 'circleColorOff',
            optional: false,
            type: 'String',
        },
    ],
};
describe('Converter', function () {
    var converter = new converter_1.default(data);
    it('calculates proper width of each column', function () {
        expect(converter.columnWidths).toEqual([18, 9, 20, 11, 7]);
    });
    it('makes header', function () {
        var columns = '| Styles             | Necessary | Types                | Description | Default |';
        var divider = '| ------------------ | --------- | -------------------- | ----------- | ------- |';
        expect(converter.header).toBe(columns + "\n" + divider);
    });
    it('makes content', function () {
        var content = '| container          |           | ViewStyle            |             |         |\n'
            + '| onElementContainer |           | StyleProp<ViewStyle> |             |         |\n'
            + '| circleColorOff     | ✓         | String               |             |         |\n';
        expect(converter.content).toBe(content);
    });
    it('converts parsed data to table in MDX', function () {
        var result = '| Styles             | Necessary | Types                | Description | Default |\n'
            + '| ------------------ | --------- | -------------------- | ----------- | ------- |\n'
            + '| container          |           | ViewStyle            |             |         |\n'
            + '| onElementContainer |           | StyleProp<ViewStyle> |             |         |\n'
            + '| circleColorOff     | ✓         | String               |             |         |\n';
        expect(converter.result).toBe(result);
    });
});
