---
title: Media library
group: Turbo
weight: 55
---

**Pro and above.** Beta: the configuration may change, and the media library will be rebuilt inside Decap CMS. Your files stay in your bucket either way.

Turbo proxies media uploads to any S3-compatible bucket — AWS S3, Cloudflare R2, Neon Object Storage, Bunny Storage, others — so editors browse and upload without your storage credentials reaching the browser. Credentials live in [site variables](../turbo-roles-and-members/#site-variables), not in `config.yml`; the CMS calls a Turbo edge function, which reads them server-side and forwards the request.

## Configure

On the site's **Variables** tab:

| Key | Value | Secret |
|---|---|---|
| `s3_endpoint` | S3 API endpoint — `https://<account-id>.r2.cloudflarestorage.com` (R2), `https://s3.<region>.amazonaws.com` (AWS), `https://<region>-s3.storage.bunnycdn.com` (Bunny), `https://<branch-id>.storage.c-<N>.<region>.aws.neon.tech` (Neon) | No |
| `s3_region` | Region to sign for. `auto` for R2; for Bunny, the storage zone's region code; for Neon, the project's region, such as `us-east-2` | No |
| `s3_bucket` | Bucket name — for Bunny, the Storage Zone name | No |
| `s3_access_key_id` | Access key ID — for Bunny, the Storage Zone name again | No |
| `s3_secret_access_key` | Secret access key — for Bunny, the Storage Zone password | **Yes** |
| `s3_force_path_style` | `true` for most providers including R2, Bunny and Neon; `false` usually works on AWS | No |

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

## Bunny Storage

Bunny's S3-compatible API means there's no Bunny-specific integration any more — configure it as above. **S3 compatibility can only be enabled when a storage zone is created**, never on an existing one, so an existing zone has to be recreated.

## Neon Object Storage

Configure [Neon Object Storage](https://neon.com/docs/storage/overview) as above, using the branch's storage endpoint and `s3_force_path_style: true`. Use a `public_read` bucket and a credential with both `storage:read` and `storage:write`, since a write-only credential can't list the bucket. Set `public_url_prefix` to the endpoint followed by the bucket name, for example `https://<branch-id>.storage.c-<N>.us-east-2.aws.neon.tech/<bucket>`.
