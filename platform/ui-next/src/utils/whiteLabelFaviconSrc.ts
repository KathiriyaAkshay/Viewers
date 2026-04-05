/**
 * Resolves the app favicon URL when white-labeling is active (same asset as the header logo).
 */
export function getWhiteLabelFaviconSrc(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const w = window as Window & {
    config?: { whiteLabeling?: { createLogoComponentFn?: unknown } };
    PUBLIC_URL?: string;
  };
  if (!w.config?.whiteLabeling?.createLogoComponentFn) {
    return null;
  }
  const publicUrl = w.PUBLIC_URL !== undefined ? w.PUBLIC_URL : '/';
  const base = publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`;
  return `${base}favicon.svg`;
}
