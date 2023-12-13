/**
 * Retrieves the user's preferred color scheme setting.
 *
 * @returns The current prefers-color-scheme value, such as 'dark', 'light', or 'no-preference'.
 *          If the browser does not support prefers-color-scheme, it returns 'no-preference'.
 *
 * @example
 * // Get the current preferred color scheme
 * const colorScheme = getCurrentColorScheme();
 * console.log(colorScheme); // Outputs: 'dark', 'light', or 'no-preference'
 *
 * This function is useful for adapting web applications to match user preferences,
 * enhancing the overall user experience.
 */
export const getColorScheme = (): string => {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light"
    }
  }
  return "no-preference"
}
