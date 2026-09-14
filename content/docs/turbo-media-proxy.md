---
title: Media library
group: Turbo
weight: 55
---

**Pro and above.** In beta.

Turbo proxies media uploads to any S3-compatible bucket — AWS S3, Cloudflare R2, Bunny Storage, others — so editors browse and upload without your storage credentials reaching the browser. Credentials live in [site variables](../turbo-roles-and-members/#site-variables), not in `config.yml`; the CMS calls a Turbo edge function, which reads them server-side and forwards the request.

## Configure

On the site's **Variables** tab:

| Key | Value | Secret |
|---|---|---|
| `s3_endpoint` | S3 API endpoint — `https://<account-id>.r2.cloudflarestorage.com` (R2), `https://s3.<region>.amazonaws.com` (AWS), `https://<region>-s3.storage.bunnycdn.com` (Bunny) | No |
| `s3_region` | Region to sign for. `auto` for R2; for Bunny, the storage zone's region code | No |
| `s3_bucket` | Bucket name — for Bunny, the Storage Zone name | No |
| `s3_access_key_id` | Access key ID — for Bunny, the Storage Zone name again | No |
| `s3_secret_access_key` | Secret access key — for Bunny, the Storage Zone password | **Yes** |
| `s3_force_path_style` | `true` for most providers including R2 and Bunny; `false` usually works on AWS | No |

Then in `config.yml`:

```yaml
media_library:
  name: s3
```

Reload the CMS. A missing key returns a "missing storage configuration" error rather than failing silently.

## Bunny Storage

Bunny's S3-compatible API means there's no Bunny-specific integration any more — configure it as above. **S3 compatibility can only be enabled when a storage zone is created**, never on an existing one, so an existing zone has to be recreated.
