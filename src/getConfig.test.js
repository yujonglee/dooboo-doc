import getConfig from './getConfig';

describe('getCofig', () => {
  it('parses path', () => {
    const { path } = getConfig();

    expect(path).toBe('./testData/interface.ts');
  });
});
