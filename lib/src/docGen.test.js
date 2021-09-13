"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var docGen_1 = __importDefault(require("./docGen"));
var getConfig_1 = __importDefault(require("./getConfig"));
jest.mock('./getConfig.ts');
describe('docGen', function () {
    getConfig_1.default.mockReturnValue({ path: './testData/interface.ts' });
    it('generate document with given plugin', function () {
        expect((0, docGen_1.default)({ plugIn: 'toMDX' })).toEqual([
            '| Styles             | Necessary | Types                | Description | Default |\n'
                + '| ------------------ | --------- | -------------------- | ----------- | ------- |\n'
                + '| container          | ✓         | ViewStyle            |             |         |\n'
                + '| onElementContainer | ✓         | StyleProp<ViewStyle> |             |         |\n'
                + '| circleColorOff     |           | String               |             |         |\n',
            '| Props     | Necessary | Types            | Description | Default |\n'
                + '| --------- | --------- | ---------------- | ----------- | ------- |\n'
                + '| theme     |           | DoobooTheme      |             |         |\n'
                + '| styles    |           | Styles           |             |         |\n'
                + '| duration  |           | Number           |             |         |\n'
                + '| onElement |           | ReactElement     |             |         |\n'
                + '| onPress   | ✓         | (String) => Void |             |         |\n',
        ]);
    });
});
