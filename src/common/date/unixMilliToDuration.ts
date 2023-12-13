type TDurationDisplayFormat = "hhmmss" | "mmss" | "ss"

/**
 * Converts a Unix timestamp in milliseconds to a human-readable duration format with different display options.
 *
 * @param unixMillis The Unix timestamp in milliseconds to be converted.
 * @param format The format for the duration display. Options are "hhmmss", "mmss", or "ss".
 *               
 * - "hhmmss" displays hours, minutes, and seconds.
 *               
 * - "mmss" displays only minutes and seconds.
 *               
 * - "ss" displays only seconds.
 *              
 * - Default is "hhmmss".
 * 
 * @returns A string representing the time duration in the specified format.
 */
export const unixMilliToDuration = (
  unixMillis: number,
  format: TDurationDisplayFormat = "hhmmss"
) => {
  const totalSeconds = Math.floor(unixMillis / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)

  const seconds = totalSeconds % 60
  const minutes = totalMinutes % 60
  const hours = totalHours % 24

  const paddedSeconds = seconds.toString().padStart(2, "0")
  if (format === "ss") {
    return `${paddedSeconds}`
  }

  const paddedMinutes = minutes.toString().padStart(2, "0")
  if (format === "mmss") {
    return `${paddedMinutes}:${paddedSeconds}`
  }

  const paddedHours = hours.toString().padStart(2, "0")
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}
