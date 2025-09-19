const DEFAULT_API_BASE = "https://sus-scanner-api.onrender.com";
const API_BASE_RAW = import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE;
const API_BASE = API_BASE_RAW.replace(/\/+$/, ""); // trim trailing slash

export async function scan(username: string) {
  const url = `${API_BASE}/scan`;           // or `${API_BASE}/api/scan` if you set API_PREFIX=/api
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}
