import docGen from './docGen';
import getConfig from './getConfig';

jest.mock('./getConfig.js');

describe('docGen', () => {
  getConfig.mockReturnValue({ path: './testData/interface.ts' });

  it('generate document with given plugin', () => {
    expect(docGen({ plugIn: 'toMDX' })).toEqual([
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
