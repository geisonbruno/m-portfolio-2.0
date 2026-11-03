export function httpsUrl(value: string | null): string | null {
  if (!value || /\s|\\|\[|\]/.test(value)) return null;
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
