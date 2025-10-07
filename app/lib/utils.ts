export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 KB"

  const kilobytes = bytes / 1024
  if (kilobytes < 1024) return `${formatReadableNumber(kilobytes)} KB`

  const megabytes = kilobytes / 1024
  if (megabytes < 1024) return `${formatReadableNumber(megabytes)} MB`

  const gigabytes = megabytes / 1024
  return `${formatReadableNumber(gigabytes)} GB`
}

function formatReadableNumber(value: number): string {
  const roundedToOneDecimal = Math.round(value * 10) / 10
  return Number.isInteger(roundedToOneDecimal)
    ? String(roundedToOneDecimal.toFixed(0))
    : String(roundedToOneDecimal.toFixed(1))
}

export function generateUUID() {
  return crypto.randomUUID()
}
