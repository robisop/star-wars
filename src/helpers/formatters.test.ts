import {formatNumberString} from './formatters';

describe('formatters', () => {
  describe('formatNumberString', () => {
    it('should return the same string if it is not a number', () => {
      expect(formatNumberString('abc')).toBe('abc');
    });
    it('should return a formatted number string', () => {
      expect(formatNumberString('1234567890')).toBe('1,234,567,890');
    });
    it('should return a formatted number string with options', () => {
      expect(
        formatNumberString('1234567890', 'en-US', {
          style: 'currency',
          currency: 'USD',
        }),
      ).toBe('$1,234,567,890.00');
    });
  });
});
