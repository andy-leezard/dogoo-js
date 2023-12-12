/**
 * djb2Hash - A simple and fast hashing function.
 *
 * This function implements the djb2 hash algorithm, which is known for its simplicity and relatively good distribution of hash values for typical use cases.
 *
 * It is particularly useful for non-cryptographic purposes, such as generating unique keys for UI elements or simple checksums.
 *
 * Note:
 * - This algorithm is not cryptographically secure and should not be used for any security-sensitive applications.
 * - The hash is calculated using 32-bit arithmetic, and the result is a 32-bit integer.
 * - The function is designed for speed and efficiency, making it suitable for performance-sensitive applications where a quick, non-secure hash is sufficient.
 *
 * @param {string} str - The input string to hash.
 * @param {string} step - If the string is long, the step value allows a faster iteration, only if the string's length is larger than the threshold.
 * @param {string} threshold - The input string length threshold to allow step value.
 * @returns {number} The resulting hash as a 32-bit integer.
 *
 */
export function djb2Hash(str: string, step = 1, threshold = 1) {
  let hash = 5381
  if (step < 0) {
    step = 1
  }
  if (str.length < threshold) {
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i)
    }
  } else {
    for (let i = 0; i < str.length; i += step) {
      hash = (hash << 5) + hash + str.charCodeAt(i)
    }
  }
  return hash
}
