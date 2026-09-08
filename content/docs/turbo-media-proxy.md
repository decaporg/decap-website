---
title: Media library (S3-compatible)
group: Turbo
weight: 35
---

Decap Turbo can proxy media uploads through any S3-compatible object storage — AWS S3, Cloudflare R2, Bunny Storage (via its S3-compatible API), or another S3-compatible provider — so your editors can browse and upload assets without your storage credentials ever reaching the browser. This is available on every plan, including Free — there's no separate add-on to buy.

## How it works

Your storage credentials are stored as [site variables](../turbo-connecting-a-site/) on your site, not in `config.yml`. When an editor opens the media library, Decap CMS calls a Turbo edge function that looks up your site's credentials server-side and forwards the request — your access keys never appear in the page source or browser network tab.

## S3-compatible storage (AWS S3, Cloudflare R2, Bunny, others)

1. On your site's **Variables** tab, add:

   | Key | Value | Secret? |
   |---|---|---|
   | `s3_endpoint` | Your provider's S3 API endpoint (e.g. `https://<account-id>.r2.cloudflarestorage.com` for R2, `https://s3.<region>.amazonaws.com` for AWS, or `https://<region>-s3.storage.bunnycdn.com` for Bunny) | No |
   | `s3_region` | The region to sign requests for. R2 doesn't use real regions — set this to `auto`; for Bunny, use the region code shown on your storage zone | No |
   | `s3_bucket` | Your bucket name (for Bunny, this is your Storage Zone name) | No |
   | `s3_access_key_id` | Access key ID (for Bunny, this is also your Storage Zone name) | No |
   | `s3_secret_access_key` | Secret access key (for Bunny, this is your Storage Zone password — the "FTP & API Access" password from Bunny's dashboard) | **Yes** |
   | `s3_force_path_style` | `true` or `false` — most S3-compatible providers (including R2 and Bunny) need `true`; real AWS S3 usually works with `false` | No |

2. In `config.yml`, set the media library to `s3`:

   ```yaml
   media_library:
     name: s3
   ```

3. Reload the CMS — uploads and browsing now go through your bucket.

### Using Bunny Storage

Bunny now offers an S3-compatible API on its storage zones, so Bunny is configured the same way as any other S3-compatible provider above — there's no separate Bunny-specific integration anymore. One important limitation: **Bunny's S3 compatibility can only be turned on when you create a new storage zone** — it can't be enabled on a zone you're already using. If you're setting up Bunny for the first time, create the zone with S3 compatibility enabled and use the settings above. If you already have a non-S3 Bunny zone in production, see the note below.

## Notes

- This integration requires the credential keys above to already be set before the media library will work — a missing key returns a clear "missing storage configuration" error rather than failing silently.
- Non-secret values (endpoint, bucket, region, path-style flag) are visible in the Variables tab as plain text; anything marked secret is masked and can't be read back once saved, only replaced.
- **Existing sites on the legacy Bunny integration**: a small number of sites set up before Bunny added S3 support are still running on the older, Bunny-specific `bunny` media library integration (`media_library: { name: bunny }` with `bunny_storage_zone_*` variables). That path still works and isn't being turned off, but it's no longer the recommended way to connect Bunny, isn't documented for new setups, and won't receive new features. If you're on it, [get in touch](/contact/) about migrating to the S3-compatible setup above (this requires creating a new S3-enabled Bunny zone and copying your files over, since existing zones can't be upgraded in place).
