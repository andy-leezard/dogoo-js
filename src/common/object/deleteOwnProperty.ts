/**
 * Creates a new object by omitting a specified key from the given object.
 *
 * @param obj The source object from which to create a new object.
 * @param key The key of the property to omit from the new object.
 * @returns A new object with the specified key omitted.
 *
 * This function uses the spread operator and object destructuring to omit a specific key
 * from the source object. It preserves all properties, including non-enumerable and 
 * JSON-unserializable values like functions and symbols.
 * 
 * The function is generic, accepting a type `T` for the source object and a type `K` for the key.
 * The return type `Omit<T, K>` dynamically indicates the type of the returned object, which
 * excludes the omitted key, enhancing type safety in TypeScript.
 * 
 * Example usage:
 * const original = { a: 1, b: 2, func: () => console.log('Hello') };
 * const modified = deleteOwnProperty(original, 'b');
 * console.log(modified); // Output will be { a: 1, func: [Function: func] }
 *
 * Note: The function does not modify the original object, adhering to the principles of
 * immutability in functional programming.
 */
export const deleteOwnProperty = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> => {
  const { [key]: omitted, ...newObject } = obj;
  return newObject;
};
