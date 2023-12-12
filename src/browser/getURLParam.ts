/**
 * @param {string} keyword Checks and returns a parameter matching the keyword from URLSearchParams.
 */
export const getURLParam = (keyword: string) => {
  const params = new URLSearchParams(window.location.search)
  let query = ""
  if (params.has(keyword)) {
    query = params.get(keyword) as string
  }
  return query
}
