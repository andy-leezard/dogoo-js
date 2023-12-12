export function detectBrowser() {
  const userAgent = navigator.userAgent

  if (/MSIE|Trident/.test(userAgent)) {
    return "IE"
  }
  if (/Edg/.test(userAgent)) {
    return "Edge"
  }
  if (/Firefox/.test(userAgent)) {
    return "Firefox"
  }
  if (/Chrome/.test(userAgent) && !/Edg/.test(userAgent)) {
    return "Chrome"
  }
  if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    return "Safari"
  }
  if (/Opera|OPR/.test(userAgent)) {
    return "Opera"
  }

  return "Unknown"
}
