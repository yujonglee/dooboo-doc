"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig_1 = __importDefault(require("./getConfig"));
var parse_1 = __importDefault(require("./parse"));
jest.mock('./getConfig.ts');
describe('parse', function () {
    getConfig_1.default.mockReturnValue({ path: './testData/interface.ts' });
    it('parses interface', function () {
        expect((0, parse_1.default)()).toEqual([
            {
                name: 'Styles',
                properties: [
                    {
                        name: 'container',
                        optional: false,
                        type: 'ViewStyle',
                    },
                    {
                        name: 'onElementContainer',
                        optional: false,
                        type: 'StyleProp<ViewStyle>',
                    },
                    {
                        name: 'circleColorOff',
                        optional: true,
                        type: 'String',
                    },
                ],
            },
            {
                name: 'Props',
                properties: [
                    {
                        name: 'theme',
                        optional: true,
                        type: 'DoobooTheme',
                    },
                    {
                        name: 'styles',
                        optional: true,
                        type: 'Styles',
                    },
                    {
                        name: 'duration',
                        optional: true,
                        type: 'Number',
                    },
                    {
                        name: 'onElement',
                        optional: true,
                        type: 'ReactElement',
                    },
                    {
                        name: 'onPress',
                        optional: false,
                        type: '(String) => Void',
                    },
                ],
            },
        ]);
    });
});
