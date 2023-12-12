export function isObject(object: any) {
  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    return true
  }
  return false
}
