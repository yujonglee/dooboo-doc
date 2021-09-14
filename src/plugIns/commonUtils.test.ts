import { range } from './commonUtils';

describe('range', () => {
  it('returns array of 0 to given value - 1', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
  });
});
