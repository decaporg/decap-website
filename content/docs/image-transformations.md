---
title: Image Transformations
group: Media
weight: 5
---

Decap CMS can transform image uploads in the browser before saving them through your configured backend or asset store integration. Use image transformations to normalize uploaded image formats, compression, dimensions, aspect ratios, and metadata before the file is committed or uploaded.

Image transformations apply to JPEG, PNG, and WebP files uploaded directly through Decap CMS. Unsupported image types, such as GIF and SVG, are uploaded unchanged.

## Global configuration

Add `media_processing` at the top level of your `config.yml` file to apply the same processing settings to all direct image uploads.

```yaml
media_processing:
  enabled: true
  format:
    enabled: true
    default: webp
  quality: 80
  strip_metadata: true
  width: 1600
  height: null
  aspect_ratio: 16x9
```

The example above saves supported uploads as WebP, compresses them at 80% quality, strips metadata, center-crops them to 16:9, and resizes them to 1600 x 900.

## Field configuration

You can also add `media_processing` to a field. Field-level processing is useful when a specific image field needs a different size or format than the rest of the site.

```yaml
collections:
  - name: posts
    label: Posts
    folder: content/posts
    fields:
      - label: Featured Image
        name: image
        widget: image
        media_processing:
          enabled: true
          format:
            enabled: true
            default: jpeg
          quality: 85
          width: 1200
          height: null
          aspect_ratio: 3x2
```

When `media_processing` is set on a field, that field uses its own processing configuration instead of the top-level `media_processing` configuration.

## Options

* `enabled` (*required*): enables or disables image processing.
* `format`: converts supported uploads to another output format.
  * `enabled`: enables or disables format conversion.
  * `default`: output format. Accepted values are `jpeg` and `webp`.
* `quality`: output quality from `1` to `100`. This is most useful for JPEG and WebP output.
* `strip_metadata`: when `true`, removes image metadata by re-encoding the uploaded image.
* `width`: output width in pixels. Set to `null` or omit it to avoid forcing a width.
* `height`: output height in pixels. Set to `null` or omit it to avoid forcing a height.
* `aspect_ratio`: optional crop ratio. Accepted values are positive numbers or ratio strings such as `16x9`, `16:9`, or `16_9`.

## Dimensions and aspect ratios

If you provide `width` without `height`, Decap CMS calculates the height from `aspect_ratio` or from the original image ratio. If you provide `height` without `width`, Decap CMS calculates the width the same way.

If you provide both `width` and `height`, Decap CMS outputs those exact dimensions. If you also provide `aspect_ratio`, the source image is center-cropped to that ratio before resizing.

If you provide `aspect_ratio` without dimensions, Decap CMS center-crops the source image to that ratio and keeps the cropped source size.

## Output file names

When format conversion is enabled, Decap CMS updates the uploaded file extension to match the output format. For example, `hero.png` becomes `hero.webp` when `format.default` is `webp`, and `hero.png` becomes `hero.jpg` when `format.default` is `jpeg`.

When format conversion is disabled or omitted, the output file keeps the original supported image format.
