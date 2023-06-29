/**
 * Format a number string to a locale string
 * @param numberString - The number string to format
 * @param locale - The locale to use
 * @param options - The options to use
 * @returns The formatted number string or original string if not a number
 */
export const formatNumberString = (
  numberString: string,
  locale?: Intl.LocalesArgument,
  options?: Intl.NumberFormatOptions,
): string => {
  const number = Number(numberString);
  if (Number.isNaN(number)) {
    return numberString;
  }
  return number.toLocaleString(locale, options);
};
