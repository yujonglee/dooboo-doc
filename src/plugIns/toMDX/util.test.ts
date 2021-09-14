import { fit } from './util';

describe('fit', () => {
  context('when standard is longer than string length', () => {
    it('returns string that meet standard', () => {
      expect(fit(7, 'this')).toBe('this   ');
    });
  });

  context('when case is not longer than string', () => {
    it('returns orignal string', () => {
      expect(fit(2, 'this')).toBe('this');
    });
  });

  context('when string is not provided', () => {
    it('returns spaces', () => {
      expect(fit(3)).toBe('   ');
    });
  });
});
