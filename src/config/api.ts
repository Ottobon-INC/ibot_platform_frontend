/**
 * Base URL for the backend API.
 * Defaults to 'http://localhost:3000/v1' if VITE_API_BASE_URL is not configured.
 */
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:3000/v1';
