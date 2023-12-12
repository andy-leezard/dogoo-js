/**
 * Formats and parses a date object into a string value for an input html element.
 * 
 * Precision-level: seconds
 * 
 */
export const dateToInputValue = (date: Date) => {
  const pad = (num: number) => num.toString().padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`
}
