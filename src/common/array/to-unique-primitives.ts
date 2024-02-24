type Primitive = string | number | boolean | null | undefined

function toUniquePrimitives<T extends Primitive>(
  arr: T[],
  leaveout_booleans: true,
  leaveout_nullish: true
): Exclude<T, boolean | null | undefined>[]

function toUniquePrimitives<T extends Primitive>(
  arr: T[],
  leaveout_booleans: true,
  leaveout_nullish?: false
): Exclude<T, boolean>[]

function toUniquePrimitives<T extends Primitive>(
  arr: T[],
  leaveout_booleans?: false,
  leaveout_nullish?: true
): Exclude<T, null | undefined>[]

function toUniquePrimitives<T extends Primitive>(
  arr: T[],
  leaveout_booleans?: false,
  leaveout_nullish?: false
): T[]

/**
 * Nested arrays or items of object type are not allowed.
 */
function toUniquePrimitives<T extends Primitive>(
  arr: T[],
  leaveout_booleans = true,
  leaveout_nullish = true
): T[] {
  let output: Primitive[] = Array.from(new Set(arr))
  if (leaveout_booleans) {
    output = output.filter((o) => typeof o !== "boolean")
  }
  if (leaveout_nullish) {
    output = output.filter((o) => o !== null && o !== undefined)
  }
  return output as T[]
}

export { toUniquePrimitives }
