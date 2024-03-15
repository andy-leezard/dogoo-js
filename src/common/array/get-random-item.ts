export function getRandomItem<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined // Handle empty array case

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
