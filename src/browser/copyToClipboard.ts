export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    console.error("Clipboard API not available.")
    return false
  }

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error("Error copying text: ", err)
    return false
  }
}
