export function shuffleArray<T>(obj: Array<T>): Array<T> {
  const shuffle = [...obj].filter((elem): elem is T => elem !== undefined)
  const getRandomValue = (i: number, N: number) =>
    Math.floor(Math.random() * (N - i) + i)
  shuffle.forEach((elem, i, arr, j = getRandomValue(i, arr.length)) => {
    ;[arr[i], arr[j]] = [arr[j]!, arr[i]!]
  })
  return shuffle
}
