---
title: CLI and AI agents
group: Turbo
weight: 57
---

The `decap` command line manages Turbo from your terminal, and connects AI agents — Claude, Cursor, Codex, VS Code and others — to it over MCP. An agent can manage sites and members, and fill in fields in the entry you have open in the CMS for you to review and save.

Everything goes through the same checks as the dashboard. A token never does more than you can do yourself, and nothing an agent changes in an entry is saved until you press Save.

## Sign in

```sh
npx decap login
```

Your browser opens on Turbo, where you approve the device. The CLI stores a personal access token in `~/.config/decap/credentials.json`, readable only by you. Check who you are with `npx decap whoami`; `npx decap logout` revokes the token and forgets it.

## Tokens and scopes

A token has one of two scopes:

- **Editor** — read your organizations, sites, members and deploys, and edit entries you have open in the CMS. This is what `decap login` asks for.
- **Admin** — also manage sites and members, in organizations you own. Ask for it with `npx decap login --admin`; the approval page shows the box ticked, and you can untick it.

Tokens from `decap login` expire after 90 days. For CI or scripts, create one under **Profile → API tokens**, pick its scope and expiry, and set it as `DECAP_TOKEN`. The same page lists every token with when it was last used, and revokes them. A revoked token stops working at once.

## Commands

`npx decap --help` lists every command; add `--help` to any of them for its flags, and `--json` for machine-readable output.

| Area | Commands |
|---|---|
| Organizations | `orgs list`, `orgs get --org <id>` |
| Sites | `sites list --org <id>`, `sites get`, `sites create`, `sites update --site <id>`, `cache clear`, `deploys list` |
| Members | `members list`, `members invite --email …`, `members set-role`, `members remove`, `invitations resend`, `invitations revoke` |
| Site access | `site-members list --site <id>`, `site-members add --member …`, `site-members set-role`, `site-members remove`, `roles list` |
| Open entry | `editor list`, `editor set --session <id> --fields '{…}'`, `editor open --site <id>` |

People can be named by email or user id: `--member someone@example.com`.

Creating sites, inviting members and the rest follow your plan's limits, exactly as in the dashboard. Some things stay in the dashboard on purpose: billing and payment methods, deleting an organization or your account, transferring a site, changing your password, and connecting GitHub or GitLab.

## Connect an AI agent

`decap mcp` runs a local MCP server with the same operations as tools. Sign in once with `decap login`, then add it to your agent:

**Claude Code**

```sh
claude mcp add decap --scope user -- npx -y decap mcp
```

**Claude Desktop** — in Settings → Developer → Edit config (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "decap": { "command": "npx", "args": ["-y", "decap", "mcp"] }
  }
}
```

**Cursor** — the same `mcpServers` entry in `~/.cursor/mcp.json`.

**VS Code** — in `.vscode/mcp.json`:

```json
{
  "servers": {
    "decap": { "command": "npx", "args": ["-y", "decap", "mcp"] }
  }
}
```

**Codex** — in `~/.codex/config.toml`:

```toml
[mcp_servers.decap]
command = "npx"
args = ["-y", "decap", "mcp"]
```

The tools an agent sees follow your token: an editor token offers the read tools and the open-entry tools, an admin token everything else too. Tools that remove something are marked as destructive, so your agent asks before using them.

claude.ai in the browser, the Claude mobile apps and ChatGPT only connect to hosted MCP servers. A hosted Turbo endpoint is planned.

## Edit the entry you have open

With an entry open in a site that uses Turbo, ask your agent to work on it — "tighten the intro and write a meta description". It reads the entry's fields and current values, and its changes appear in your editor, highlighted, as if you had typed them. Review, adjust, and save; or don't, and nothing changes.

While an entry is open, a small **Agent bridge on** badge shows in the corner, and says what an agent last changed. Its × turns the bridge off for that tab.

Beside each field is an **Ask Claude** button: it copies a prompt naming the field and entry, and opens Claude Desktop with it. Any other agent connected through `decap mcp` works with the copied prompt.

An agent can only change collections you can edit — a collection your role makes view-only refuses its changes — and nothing on a locked site. To turn the bridge off for a whole site, add this to the backend in `config.yml`:

```yaml
backend:
  name: turbo-github # or turbo-gitlab
  turbo_site_id: …
  editor_bridge: false
```

## Use the API directly

The CLI and the MCP server are clients of the Turbo API, which you can call yourself:

```sh
curl https://turbo.decapcms.org/api/v1/orgs \
  -H "Authorization: Bearer $DECAP_TOKEN"
```

Requests and responses are JSON. Errors come back as `{ "error": { "code": "…", "message": "…" } }` with a matching HTTP status. Every command above is one operation; their exact inputs and outputs are defined in the open source [`decap-turbo-api`](https://github.com/decaporg/decap-cms/tree/main/packages/decap-turbo-api) package.
