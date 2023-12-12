type beautifyURLOptions = {
  strip_protocol?: boolean
  strip_www?: boolean
}

export const beautifyURL = (str: string, options: beautifyURLOptions) => {
  const { strip_protocol = true, strip_www = true } = options
  if (strip_protocol) {
    str = str.replace(/(https?|:|\/\/)/g, "")
  }
  if (strip_www) {
    str = str.replace("www.", "")
  }
  return str
}
