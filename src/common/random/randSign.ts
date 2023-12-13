/**
 * Randomly inverts the sign of the given number.
 * 
 * @param num The number to potentially invert.
 * @returns The original number with its sign randomly inverted.
 */
export const randSign = (num: number) => {
  return Math.random() > 0.5 ? num * -1 : num
}
