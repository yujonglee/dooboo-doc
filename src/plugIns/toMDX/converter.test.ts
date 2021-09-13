import Converter from './converter';
import { Props } from '../../types';

const data: Props = {
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

describe('Converter', () => {
  const converter = new Converter(data);

  it('calculates proper width of each column', () => {
    expect(converter.columnWidths).toEqual([18, 9, 20, 11, 7]);
  });

  it('makes header', () => {
    const columns = '| Styles             | Necessary | Types                | Description | Default |';
    const divider = '| ------------------ | --------- | -------------------- | ----------- | ------- |';

    expect(converter.header).toBe(`${columns}\n${divider}`);
  });

  it('makes content', () => {
    const content = '| container          |           | ViewStyle            |             |         |\n'
                  + '| onElementContainer |           | StyleProp<ViewStyle> |             |         |\n'
                  + '| circleColorOff     | ✓         | String               |             |         |\n';

    expect(converter.content).toBe(content);
  });

  it('converts parsed data to table in MDX', () => {
    const result = '| Styles             | Necessary | Types                | Description | Default |\n'
                 + '| ------------------ | --------- | -------------------- | ----------- | ------- |\n'
                 + '| container          |           | ViewStyle            |             |         |\n'
                 + '| onElementContainer |           | StyleProp<ViewStyle> |             |         |\n'
                 + '| circleColorOff     | ✓         | String               |             |         |\n';

    expect(converter.result).toBe(result);
  });
});
