export function httpsUrl(value: string | null): string | null {
  if (!value || !/^https:\/\//i.test(value) || /\s|\\|\[|\]/.test(value)) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? value : null;
  } catch {
    return null;
  }
}

export function repositoryUrl(value: string | null): string | null {
  const safe = httpsUrl(value);
  if (!safe) return null;
  const url = new URL(safe);
  return url.hostname === "github.com" && !url.port && /^\/[\w.-]+\/[\w.-]+\/?$/.test(url.pathname) ? safe : null;
}

export function emailHref(value: string | null): string | null {
  // Accept a plain address, never mailto query parameters or extra headers.
  return value && /^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/.test(value) ? `mailto:${value}` : null;
}
