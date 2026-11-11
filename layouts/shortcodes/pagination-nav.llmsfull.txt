{{- with .Get "prevUrl" }}Previous: [{{ $.Get "prevLabel" }}]({{ . | absURL }}){{ end }}
{{ with .Get "nextUrl" }}Next: [{{ $.Get "nextLabel" }}]({{ . | absURL }}){{ end -}}
