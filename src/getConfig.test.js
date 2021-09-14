import getConfig from './getConfig';

describe('getCofig', () => {
  it('parses path of input and output', () => {
    const { input, output } = getConfig();

    expect(input).toBe('./testData/interface.ts');
    expect(output).toBe('./output.txt');
  });
});
