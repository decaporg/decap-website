---
title: Media library
group: Turbo
weight: 55
---

**Pro and above.** Beta: the configuration may change, and the media library will be rebuilt inside Decap CMS. Your files stay in your bucket either way.

Turbo proxies media uploads to any S3-compatible bucket, so editors browse and upload without your storage credentials reaching the browser. Credentials live in [site variables](../turbo-roles-and-members/#site-variables), not in `config.yml`; the CMS calls a Turbo edge function, which reads them server-side and forwards the request.

## Configure

On the site's **Variables** tab:

| Key | Value | Secret |
|---|---|---|
| `s3_endpoint` | Your provider's S3 API endpoint | No |
| `s3_region` | Region to sign requests for | No |
| `s3_bucket` | Bucket name | No |
| `s3_access_key_id` | Access key ID | No |
| `s3_secret_access_key` | Secret access key | **Yes** |
| `s3_force_path_style` | `true` to address the bucket in the URL path instead of the host name, which most providers other than AWS need | No |

See [Provider settings](#provider-settings) for the values a few common providers use.

The bucket needs a public address — public read access, a custom domain, or a CDN in front of it — because the URLs the media library inserts into entries point straight at it.

Then in `config.yml`:

```yaml
media_library:
  name: s3
  config:
    public_url_prefix: https://media.example.com
```

The script-tag build of Decap CMS already includes the media library. With `decap-cms-app`, register it yourself:

```js
import CMS from 'decap-cms-app';
import S3MediaLibrary from 'decap-cms-media-library-s3';

CMS.registerMediaLibrary(S3MediaLibrary);
```

Reload the CMS. A missing key returns a "missing storage configuration" error rather than failing silently.

## Provider settings

Any S3-compatible provider works the same way. These are the values for some common ones; for others, look up the S3 API endpoint, region and addressing style in the provider's documentation.

### AWS S3

* `s3_endpoint`: `https://s3.<region>.amazonaws.com`
* `s3_region`: the bucket's region
* `s3_force_path_style`: `false` usually works

### Bunny Storage

* `s3_endpoint`: `https://<region>-s3.storage.bunnycdn.com`
* `s3_region`: the storage zone's region code
* `s3_bucket` and `s3_access_key_id`: the storage zone name
* `s3_secret_access_key`: the storage zone password
* `s3_force_path_style`: `true`

S3 compatibility can only be enabled when a storage zone is created, never on an existing one, so an existing zone has to be recreated.

### Cloudflare R2

* `s3_endpoint`: `https://<account-id>.r2.cloudflarestorage.com`
* `s3_region`: `auto`
* `s3_force_path_style`: `true`

### Neon Object Storage

* `s3_endpoint`: the branch's storage endpoint, `https://<branch-id>.storage.c-<N>.<region>.aws.neon.tech`
* `s3_region`: the project's region, such as `us-east-2`
* `s3_access_key_id` and `s3_secret_access_key`: a credential with the `storage:write` scope, which also allows reading and listing
* `s3_force_path_style`: `true`

Use a `public_read` bucket, and set `public_url_prefix` to the endpoint followed by the bucket name.
