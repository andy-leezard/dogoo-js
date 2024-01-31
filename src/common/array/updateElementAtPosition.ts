export function updateElementAtPosition<T extends object>(
  source: T[],
  payload: Partial<T>,
  position: number,
  quiet?: boolean
) {
  if (position < 0 || !source.at(position)) {
    if (quiet) return source
    throw new Error(
      `Error with updateElementAtPosition - position ${position} is an invalid index for source array!`
    )
  }
  const _new = [...source]
  const target = _new[position]
  if (typeof payload !== typeof target) {
    if (quiet) return source
    throw new Error(
      `Error with updateElementAtPosition - the target element's type (${typeof target}) and the payload's type ${typeof payload} mismatched!`
    )
  }
  if (
    typeof target === "object" &&
    target !== null &&
    !Array.isArray(target) &&
    typeof payload === "object" &&
    payload !== null &&
    !Array.isArray(payload)
  ) {
    _new[position] = { ...target, ...payload }
  } else {
    if (quiet) return source
    throw new Error(
      `Error with updateElementAtPosition - either the target element's type (${typeof target}) or the payload's type ${typeof payload} isn't object!`
    )
  }
  return _new
}
