# ElastAlert Kibana Plugin

> This plugin provides a way to create, test and edit ElastAlert rules within Kibana.

![GitHub release](https://img.shields.io/github/release/nsano-rururu/elastalert-kibana-plugin.svg)
![Github Releases](https://img.shields.io/github/downloads/nsano-rururu/elastalert-kibana-plugin/total.svg)
![GitHub stars](https://img.shields.io/github/stars/nsano-rururu/elastalert-kibana-plugin.svg?style=social&label=Stars)

---

## Demo
![Showcase](showcase.gif)

## Why I created a fork repository

Since the official site does not release the latest Kibana compatible version, 
it is intended to publish the latest version until the release, 
and there are no plans to add features or fix bugs. 
If the official website resumes the latest release, this repository will be deleted.

## Requirements
- Our [ElastAlert server](https://github.com/bitsensor/elastalert) fork
- [Kibana 6.8.1～6.8.12、7.5.1～7.8.1](https://github.com/nsano-rururu/elastalert-kibana-plugin/releases/tag/1.2.0)
- [Kibana 7.9.0～7.9.3](https://github.com/nsano-rururu/elastalert-kibana-plugin/releases/tag/1.3.0)
- TODO: [Kibana 7.10.0～](https://github.com/nsano-rururu/elastalert-kibana-plugin/releases/tag/1.4.0)

## Installation
Check the [releases](https://github.com/nsano-rururu/elastalert-kibana-plugin/releases) page to download and install the latest version of this plugin that is compatible with your Kibana version. Please be aware that you will need a running ElastAlert server to make use of this plugin.

[ElastAlert Server Docker Images](https://github.com/nsano-rururu/elastalert-kibana-plugin/wiki/ElastAlert-Server-Docker-Images)
[docker-compose sample](https://github.com/nsano-rururu/elastalert-kibana-plugin/wiki/docker-compose-sample)

## Configuration
By default the plugin will connect to `http://localhost:3030`. If your ElastAlert server is running on a different host or port add/change the following options in your `config/kibana.yml` file: 

```
elastalertKibanaPlugin.serverSsl: false
elastalertKibanaPlugin.serverHost: localhost
elastalertKibanaPlugin.serverPort: 3030
```

⚠️ from version 1.4.0 config section name has been changed:
`elastalert-kibana-plugin -> elastalertKibanaPlugin`

## Changelog

### 1.4.0 (2021-03-15)

**Features**
- Migrate to legacy plugin to Kibana Plaftorm (thanks to: @ch-bas who started this migration)
- Support version Kibana 7.11.1

**Braking changes**
- config section name has been changed `elastalert-kibana-plugin -> elastalertKibanaPlugin`

**Bug fixes**
- HttpRoutes
> All input (body, query parameters, and URL parameters) must be validated using the `@kbn/config-schema` package. If no validation schema is provided, these values will be empty objects

https://www.elastic.co/guide/en/kibana/current/migrating-legacy-plugins-examples.html#http-routes-migration

- EuiButtonToggle
EuiButtonToggle was removed: https://github.com/elastic/eui/blob/fe426f6f6828b5e9ed88dc82627c54e403801b59/CHANGELOG.md#3000

**Not working / TODO**
- Testing rules (probably need changes in ElastAlert Server)
- Show error when delete rule fails
- Fix typings

## Dev notes

If you would like to run this plugin:

1) Clone kibana repo: `git clone https://github.com/elastic/kibana.git` and enter to repo: `cd kibana`
2) Change branch: `git checkout 7.11`
3) Install nvm if you don't have
4) Install node: `nvm install $(cat .nvmrc)`
5) Configure node: `nvm use $(cat .nvmrc)`
6) Install yarn: `npm install -g yarn`
7) Run: `yarn kbn bootstrap`
8) Configure kibana (`config/kibana.yml`):

```
elastalertKibanaPlugin.serverSsl: false
elastalertKibanaPlugin.serverHost: localhost
elastalertKibanaPlugin.serverPort: 8030
logging.verbose: true
```

10) Clone this repo to: `plugins/`. `git clone https://github.com/nsano-rururu/elastalert-kibana-plugin.git plugins/elastalert-kibana-plugin`
11) Run elastic with elastalert. For test purpose you can use: `plugins/elastalert-kibana-plugin/dev/elastic-dev-env/docker-compose.yml` be running:

`docker-compose -p elastic-dev-env -f dev\elastic-dev-env\docker-compose.yml up -d`

12) Run kibana: `yarn start --oss`

## Contribution
Please report any issues or suggestions you have on the [issues page](https://github.com/nsano-rururu/elastalert-kibana-plugin/issues). If you want to create a pull request please check our [contribution guide](CONTRIBUTING.md).
