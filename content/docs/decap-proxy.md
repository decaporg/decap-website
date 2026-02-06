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

3. Run `npx decap-server` from the root directory of the above repository.

  * If the default port (8081) is in use, the proxy server won't start and you will see an error message. In this case, configure the port number.

4. Start your local development server (e.g. run `gatsby develop`).

5. Open `http://localhost:<port>/admin` to verify that your can administer your content locally. Replace `<port>` with the port of your local development server. For example Gatsby's default port is `8000`.

**Limitation:** `editorial_workflow` is not supported in this environment.

### Options

By default, the proxy server runs on port `8081` and allows CORS requests from any origin. You can customize these settings with these options.

#### Environment Variables

* **`PORT`** define the port you'd like the proxy server to use. Running `PORT=8082 npm run start` starts the server on port `8082` rather than the default `8081`.

* **`BIND_HOST`** variable allows binding to 127.0.0.1 rather than all IP addresses. Running `BIND_HOST=localhost npm run start` allows connecting to `http://localhost:8081/` but connections to `http://<public_ip>:8081/` are no longer possible. <span class="version-tag">3.9</span>

* **`ORIGIN`** allows restricting CORS responses to a specific origin rather that allowing the API to be accessed from any server. Running `ORIGIN=https://example.com npm run start` changes the HTTP header in responses to `Access-Content-Allow-Origin: https://example.com`. The server can no longer be accessed by arbitrary websites. <span class="version-tag">3.9</span>

You can define them in 2 ways:

1. Create a `.env` file in the project's root folder and add these optional variables: 

```ini
PORT=8082
BIND_HOST=8082
ORIGIN=https://my-local-site.com
```

2. Set these variables before the shell command, for example:

```bash
PORT=8082 npx decap-server
```

#### Custom Port and Host for the Backend URL

Update the `local_backend` object in `config.yml` and specify a `url` property to use your custom port number

```yaml
backend:
  name: git-gateway

local_backend:
  # when using a custom proxy server port
  url: http://localhost:8082/api/v1
  # when accessing the local site from a host other than 'localhost' or '127.0.0.1'
  allowed_hosts: ['192.168.0.1']
```
