{{- with partial "llm/latest-release.html" . -}}
The latest release is {{ .version }}{{ with .date }}, published on {{ . | time.Format "January 2, 2006" }}{{ end }}.
{{ end }}
See [GitHub Releases](https://github.com/decaporg/decap-cms/releases) or the [npm package](https://www.npmjs.com/package/decap-cms) for all releases.
