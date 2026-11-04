# {{ .Title }}
{{ with .Description }}
> {{ . }}
{{ end }}
Source: {{ .Permalink }}{{ with .Lastmod }}{{ if not .IsZero }} (updated {{ .Format "2006-01-02" }}){{ end }}{{ end }}

{{ partial "llm/markdown.html" . }}
{{- if .Params.show_widgets }}

## Widget reference
{{ range partial "llm/widget-pages.html" . }}
- [{{ .Params.label }}]({{ (.OutputFormats.Get "markdown").Permalink }})
{{- end }}
{{ end }}
