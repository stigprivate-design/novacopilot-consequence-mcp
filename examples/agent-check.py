"""Minimal NovaCopilot Consequence check. Set NOVACOPILOT_KEY for size=deep."""
import os
import requests

BASE = "https://legal.exploreworldai.com/api/public/v1/novacopilot/consequence"


def check(topic="dora", country="se", sector="banking", employees="50-249", size="standard", lang="en"):
    headers = {}
    key = os.environ.get("NOVACOPILOT_KEY")
    if key:
        headers["Authorization"] = f"Bearer {key}"
    r = requests.get(BASE, params={"topic": topic, "country": country, "sector": sector, "employees": employees, "size": size, "lang": lang}, headers=headers, timeout=20)
    r.raise_for_status()
    return r.json()


if __name__ == "__main__":
    d = check()
    print(d["next_step"])
    print(d["core_sha256"], d["source"])
