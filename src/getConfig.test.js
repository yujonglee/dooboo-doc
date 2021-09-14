import getConfig from './getConfig';

describe('getCofig', () => {
  it('parses plugIn, input and output', () => {
    const { plugIn, input, output } = getConfig();

    expect(plugIn).toBe('toMDX');

    expect(input).toBe('./testData/interface.ts');
    expect(output).toBe('./output.txt');
  });
});
