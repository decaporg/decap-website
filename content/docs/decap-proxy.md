---
group: Accounts
weight: 70
title: "Decap Proxy: Work With a Local Repository"
slug: decap-proxy
aliases:
  - /docs/working-with-a-local-git-repository
---
You can connect Decap CMS to a local directory, instead of working with a remote Git repository.

1. Navigate to a local directory configured with the CMS.
2. Add the top-level property `local_backend` configuration to your `config.yml`:

```yaml
# when using the default proxy server port
local_backend: true

backend:
  name: git-gateway
```

3. Run `npx decap-server` from the root directory of the above repository. It needs Node.js 20 or later.

  * If the default port (8081) is in use, the proxy server won't start, and you will see an error message. In this case, configure the port number.

4. Start your local development server (e.g. run `gatsby develop`).

5. Open `http://localhost:<port>/admin` to verify that you can administer your content locally. Replace `<port>` with the port of your local development server. For example, Gatsby's default port is `8000`.

**Limitation:** `editorial_workflow` works only when the proxy server runs in `git` mode. See [`MODE`](#environment-variables) below.

## Options

By default, the proxy server runs on port `8081`, accepts connections only from the computer it runs on, and allows requests only from local development origins that match `/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/`. You can customize these settings with these options.

The proxy server has no authentication: anyone who can reach it can read and write files in your repository. The origin default was introduced in decap-server@3.8.0, and the local-only default in decap-server@3.11.6. Before, the server accepted requests from any origin and listened on every network address.

#### Environment Variables

* **`PORT`** defines the port you'd like the proxy server to use. Running `PORT=8082 npx decap-server` starts the server on port `8082` rather than the default `8081`.

* **`BIND_HOST`** sets the network address the proxy server listens on. By default it listens on `127.0.0.1` and `::1`, so only the computer it runs on can connect. Set it to `0.0.0.0` to accept connections from other devices, but only on a network you trust, such as inside a container. <span class="version-tag">3.9</span> The local-only default arrived in decap-server@3.11.6; before, the server listened on every address.

* **`ORIGIN`** allows overriding the default local-only CORS origin pattern (`/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/`) with a specific origin. Running `ORIGIN=https://example.com npx decap-server` changes the HTTP header in responses to `Access-Control-Allow-Origin: https://example.com`, and the server refuses requests that browsers send from any other origin. <span class="version-tag">3.9</span>

* **`MODE`** is `fs` (the default) or `git`. In `fs` mode the proxy server reads and writes files in your repository without committing them. In `git` mode it commits every change to your local repository, and supports the [editorial workflow](/docs/editorial-workflows/) by keeping unpublished entries on local branches. Each commit includes every change in the repository, not only the CMS's own, so commit or stash your work before you edit content in `git` mode.

* **`GIT_REPO_DIRECTORY`** is the path of the repository the proxy server works on. Defaults to the directory it runs in.

* **`LOG_LEVEL`** sets how much the proxy server logs, for example `debug` for more detail or `warn` for less. Defaults to `info`.

You can define them in 2 ways:

1. Create a `.env` file in the project's root folder and add these optional variables: 

```ini
PORT=8082
MODE=git
ORIGIN=http://my-site.test:1313
```

2. Set these variables before the shell command, for example:

```bash
PORT=8082 npx decap-server
```

If the site runs on a host name other than `localhost` or `127.0.0.1`, as in the `.env` example above, also add it to `allowed_hosts` in `local_backend`, as shown [below](#custom-port-and-host-for-the-backend-url).

### Custom Port and Host for the Backend URL

Update the `local_backend` object in `config.yml` and specify a `url` property to use your custom port number.

```yaml
backend:
  name: git-gateway

local_backend:
  # when using a custom proxy server port
  url: http://localhost:8082/api/v1
  # when accessing the local site from a host other than 'localhost' or '127.0.0.1'
  allowed_hosts: ['192.168.0.1']
```

The proxy server only accepts connections from the computer it runs on. To open the CMS from another device, such as a phone on the same network, point `url` at the computer's network address, and start the proxy server with `BIND_HOST` and `ORIGIN` set to match:

```bash
BIND_HOST=0.0.0.0 ORIGIN=http://192.168.0.1:1313 npx decap-server
```

`ORIGIN` allows a single origin, so open the CMS through `http://192.168.0.1:1313` on this computer too.
