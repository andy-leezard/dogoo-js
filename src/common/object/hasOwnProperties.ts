/**
 * Checks if an object has all the specified keys as its own properties.
 *
 * @param obj The object to check.
 * @param keys An array of keys to check in the object.
 * @returns Boolean indicating whether all specified keys are own properties of the object.
 *
 * This function uses `Object.prototype.hasOwnProperty.call` to ensure that the property
 * check does not fall down the prototype chain and only considers properties directly
 * present on the object.
 * 
 * Example usage:
 * const obj = { a: 1, b: 2, c: 3 };
 * console.log(hasOwnProperties(obj, ['a', 'b'])); // Output: true
 * console.log(hasOwnProperties(obj, ['a', 'd'])); // Output: false
 */
export const hasOwnProperties = <T extends Record<string, any>>(
  obj: T,
  keys: (keyof T)[]
): boolean => {
  return keys.every(key => Object.prototype.hasOwnProperty.call(obj, key));
};
