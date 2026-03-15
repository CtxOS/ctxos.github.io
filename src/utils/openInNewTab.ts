export const openInNewTab = (url: string, features: string = 'noopener,noreferrer') => {
  window.open(url, '_blank', features)?.focus()
}

export const openInSameTab = (url: string) => {
  window.location.href = url
}
