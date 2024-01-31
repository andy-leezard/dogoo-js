export function replaceElementAtPosition<T extends Array<any>>(
  source: T,
  payload: T[number],
  position: number,
  quiet?: boolean
) {
  if (position < 0 || !source.at(position)) {
    if (quiet) return source
    throw new Error(
      `Error with replaceElementAtPosition - position ${position} is an invalid index for source array!`
    )
  }
  const _new = [...source]
  _new[position] = payload
}
