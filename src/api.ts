//const API =(import.meta as any).env?.VITE_API_URL ?? "http://127.0.0.1:8000";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
export async function scan(username: string) {
  const res = await fetch(`${API_BASE}/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
