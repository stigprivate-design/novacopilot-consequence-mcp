// Minimal NovaCopilot Consequence check, no dependencies. Set NOVACOPILOT_KEY for size=deep.
const BASE = "https://legal.exploreworldai.com/api/public/v1/novacopilot/consequence";

export async function check(q: Record<string, string> = { topic: "dora", country: "se", sector: "banking", employees: "50-249", size: "standard", lang: "en" }) {
  const key = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env["NOVACOPILOT_KEY"];
  const res = await fetch(`${BASE}?${new URLSearchParams(q)}`, { headers: key ? { Authorization: `Bearer ${key}` } : {} });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as { next_step: string; core_sha256: string; source: string };
}

const d = await check();
console.log(d.next_step);
console.log(d.core_sha256, d.source);
