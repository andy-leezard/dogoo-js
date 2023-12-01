export function sumOfArray(
  numbers: any[],
  runtimeTypeCheck: boolean = false
): number {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array")
  }
  if (runtimeTypeCheck) {
    numbers.forEach((num) => {
      if (typeof num !== "number" || isNaN(num)) {
        throw new Error("Array must contain only numbers")
      }
    })
  }
  return numbers.reduce((sum, num) => sum + num, 0)
}
