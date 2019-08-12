/**
 * @param {object} object
 * @param {function} operation ([key, value])
 * @returns {object}
 */
export function objectMap(object, operation) {
  return Object.assign(...Object.entries(object).map(([key, value]) => operation(value, key)));
}