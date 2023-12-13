/**
 * Creates an array of numbers progressing from `start` up to, but not including, `stop`.
 *
 * @param start The start of the range. If `stop` is undefined, `start` is treated as `0`.
 * @param stop The end of the range. If omitted, `start` is used as `stop` and `start` is set to `0`.
 * @param step The value to increment by, between each element in the range. Defaults to `1`. Must be a positive number.
 * @returns An array of numbers in the specified range.
 *
 * @example
 * range(4); // [0, 1, 2, 3]
 * range(1, 5); // [1, 2, 3, 4]
 * range(0, 20, 5); // [0, 5, 10, 15]
 *
 * @throws {Error} If `step` is less than or equal to 0, an error is thrown.
 *
 * This function mimics Python's `range` function. It's useful for generating a sequence of numbers
 * and is commonly used for loops and array manipulation.
 */
export function range(start: number, stop?: number, step = 1): number[] {
  // Handle the case where only one argument is provided
  if (stop === undefined) {
    stop = start
    start = 0
  }

  // Validate that the step is a positive number
  if (step <= 0) {
    throw new Error("Step must be a positive number")
  }

  // Calculate the length of the resulting array
  const length = Math.max(Math.ceil((stop - start) / step), 0)
  const range = Array(length)

  // Populate the array
  for (let idx = 0; idx < length; idx++, start += step) {
    range[idx] = start
  }

  return range
}
