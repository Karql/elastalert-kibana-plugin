## 1.5.0 (2022-03-11)

### Changes
- Migrate removed EuiCodeEditor to CodeEditor #27 This change also fix dark theme #7

## 1.4.1 (2022-01-20)

### Bug fixes
- Testing rules #9 (required [ElastAlert2 Server](https://github.com/Karql/elastalert2-server) in version >=5.0.0-next.4) 

## 1.4.0 (2021-03-16)

### Features
- Migrate from legacy plugin to Kibana Plaftorm (thanks to: @ch-bas who started this migration)
- Support version Kibana >=7.10.0 <=7.16.2

### Braking changes
- config section name has been changed `elastalert-kibana-plugin -> elastalertKibanaPlugin`

### Bug fixes
- HttpRoutes
> All input (body, query parameters, and URL parameters) must be validated using the `@kbn/config-schema` package. If no validation schema is provided, these values will be empty objects

https://www.elastic.co/guide/en/kibana/current/migrating-legacy-plugins-examples.html#http-routes-migration

- EuiButtonToggle
EuiButtonToggle was removed: https://github.com/elastic/eui/blob/fe426f6f6828b5e9ed88dc82627c54e403801b59/CHANGELOG.md#3000

### Not working / TODO
- Testing rules (probably need changes in ElastAlert Server)
- Show error when delete rule fails
- Fix typings