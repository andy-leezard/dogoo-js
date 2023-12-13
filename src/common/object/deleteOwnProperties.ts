/**
 * Creates a new object by omitting specified keys from the given object.
 *
 * @param obj The source object from which to create a new object.
 * @param keys The keys of the properties to omit from the new object.
 * @returns A new object with the specified keys omitted.
 *
 * This function uses the spread operator and object destructuring to omit specific keys
 * from the source object. It preserves all properties, including non-enumerable and 
 * JSON-unserializable values like functions and symbols.
 * 
 * The function accepts a type `T` for the source object and an array of keys to be omitted.
 * The return type dynamically indicates the type of the returned object, which
 * excludes the omitted keys, enhancing type safety in TypeScript.
 * 
 * Example usage:
 * const original = { a: 1, b: 2, c: 3, func: () => console.log('Hello') };
 * const modified = deleteOwnProperties(original, ['b', 'c']);
 * console.log(modified); // Output will be { a: 1, func: [Function: func] }
 *
 * Note: The function does not modify the original object, adhering to the principles of
 * immutability in functional programming.
 */
export const deleteOwnProperties = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
};
