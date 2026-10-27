// Set VITE_API_URL in the deployment environment; falls back to the local Django server.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";
