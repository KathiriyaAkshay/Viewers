import type { HeadersInterface } from '../types/RequestHeaders';

/** Canonical session key set from Mode route (also try MEDIAITTOKEN_SESSION_KEY for legacy URLs) */
export const MEDAITTOKEN_SESSION_KEY = 'medaittoken';
export const MEDIAITTOKEN_SESSION_KEY = 'mediaitoken';

/**
 * Bearer token from session storage (set via `?medaittoken=` on mode entry).
 * Safe when `window` / `sessionStorage` is unavailable.
 */
export function getMedaittokenSessionAuthorizationHeader(): HeadersInterface {
  if (typeof window === 'undefined' || !window.sessionStorage) {
    return {};
  }
  const token =
    window.sessionStorage.getItem(MEDAITTOKEN_SESSION_KEY) ||
    window.sessionStorage.getItem(MEDIAITTOKEN_SESSION_KEY);
  if (!token) {
    return {};
  }
  return { Authorization: `Bearer ${token}` };
}

/**
 * Prefer `medaittoken` in session storage; otherwise use the provided fallback headers.
 */
export function preferMedaittokenAuthorizationHeader(
  getFallbackHeaders: () => HeadersInterface
): HeadersInterface {
  const sessionHeaders = getMedaittokenSessionAuthorizationHeader();
  if (sessionHeaders.Authorization) {
    return sessionHeaders;
  }
  const fallback = getFallbackHeaders();
  return fallback && typeof fallback === 'object' ? fallback : {};
}
