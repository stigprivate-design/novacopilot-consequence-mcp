# novacopilot-consequence-mcp

Deterministic regulatory decision infrastructure for EU law: GDPR, AI Act, DORA, NIS2 and MiCA. Each answer is bound to legal provisions, named supervisory authorities and recent enforcement decisions (IMY, CNIL, AEPD), and carries a `core_sha256` receipt over its core fields.

## Endpoints

| Layer | Access | Price |
|---|---|---|
| Open: `size=brief`, `size=standard` | No key. REST and open MCP. 30 calls/min, 300/hour per address | Free |
| Deep: `size=deep` (relations, decision path) | Prepaid key or authenticated MCP | USD 0.05 per call |
| Changes: `/consequence/changes` (delta since cursor) | Prepaid key | USD 0.02 per call; 304 is free |

Prepaid balance from USD 5. No subscription.

- REST: `https://legal.exploreworldai.com/api/public/v1/novacopilot/consequence`
- Changes: `https://legal.exploreworldai.com/api/public/v1/novacopilot/consequence/changes?watch=gdpr:se`
- Open MCP (no login): `https://legal.exploreworldai.com/api/public/mcp-open`
- Authenticated MCP (deep): `https://legal.exploreworldai.com/mcp`
- Docs: `https://legal.exploreworldai.com/en/novacopilot/consequence`
- Keys and balance: `https://legal.exploreworldai.com/en/developers`

## 60-second start

```bash
curl -s "https://legal.exploreworldai.com/api/public/v1/novacopilot/consequence?topic=dora&country=se&sector=banking&employees=50-249&size=standard&lang=en"
```

MCP clients (Claude, Cursor): copy `examples/claude-cursor-mcp.json`.

Parameters: `topic` (gdpr, ai-act, dora, nis2, mica), `country` (eu, se, de, fr, it, es, uk), `sector` (any, banking, insurance, health), `employees`, `revenue`, `type`, `lang` (sv, en, de, fr, it, es, zh), `size` (brief, standard, deep).

## Notice

Informational regulatory data only, not legal advice. Redistribution permitted provided Source: NovaCopilot and core_sha256 remain intact. Self-service keys capped at 75 unique combinations per 24h; enterprise SLA via stig@valkiv.com.

## 简体中文摘要

NovaCopilot Consequence 是面向欧盟法规（GDPR、AI Act、DORA、NIS2、MiCA）的确定性监管决策基础设施。每个答案绑定法律条款、主管机构和近期执法决定，并附带 `core_sha256` 校验。brief 和 standard 免费且无需密钥（每分钟 30 次，每小时 300 次）；deep 每次 0.05 美元，changes 每次 0.02 美元，预付余额 5 美元起，无订阅。中文文档：https://legal.exploreworldai.com/zh/novacopilot/consequence 。仅供参考，不构成法律意见；转载须保留 Source: NovaCopilot 与 core_sha256。

License: Apache 2.0.
