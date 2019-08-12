export const DIGITS_MONTHS_OF_THE_YEAR = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const currentYear = new Date().getFullYear();

/**
 * @returns {array} [year, month, day]
 */
export function separateDate(string) {
  return string.split('-');
}

export function convertDateToBrazilianDate(string) {
  return separateDate(string).reverse().join('/');
}