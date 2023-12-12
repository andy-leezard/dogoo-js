/**
    A function that returns a universally unique identifier (uuid).  
    example: cea32aa8-9ad0-423b-a0ed-42723691d021
    @returns `string` : 36 character uuid (see example)
*/
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
