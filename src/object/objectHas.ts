export function objectHas(obj:object, key:string):boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
