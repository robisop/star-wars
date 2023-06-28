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
