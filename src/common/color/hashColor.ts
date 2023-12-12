/**
 * Generates a HSL color based on the hash of a given string.
 *
 * This function creates a hash from the input string and then converts this hash into a HSL color.
 * The hashing process involves iterating over the characters of the string twice—once forward and once backward—to calculate the hash,
 * which makes the resulting color less predictable for similar strings.
 *
 * @param {string} str - The input string to hash.
 * @param {number} [saturation=1] - Saturation value for the HSL color (between 0 and 1).
 * @param {number} [lightness=0.7] - Lightness value for the HSL color (between 0 and 1).
 * @param {number} [opacity=1] - Opacity value for the HSL color (between 0 and 1).
 * @returns {string} A HSL color string.
 */
export function hashColor(
  str: string,
  saturation = 1,
  lightness = 0.7,
  opacity = 1
) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash = hash & hash
  }
  for (let i = str.length - 1; i >= 0; i--) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash = hash & hash
  }
  if (str) {
    hash = (hash << 5) - hash + str.charCodeAt(str.length - 1)
    hash = hash & hash
    hash = (hash << 5) - hash + str.charCodeAt(0)
    hash = hash & hash
  }
  return `hsl(${hash % 360}deg ${Math.round(
    Math.min(Math.max(saturation, 0), 1) * 100
  )}% ${Math.round(Math.min(Math.max(lightness, 0), 1) * 100)}% / ${opacity})`
}
