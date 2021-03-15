## Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md).

If you would like to run this plugin:

1) Clone kibana repo: `git clone https://github.com/elastic/kibana.git` and enter to the repo: `cd kibana`
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

10) Clone this repo to: `plugins/`. `git clone https://github.com/karql/elastalert-kibana-plugin.git plugins/elastalert-kibana-plugin`
11) Run elastic with elastalert. For test purpose you can use: `plugins/elastalert-kibana-plugin/dev/elastic-dev-env/docker-compose.yml` by running:

`docker-compose -p elastic-dev-env -f dev\elastic-dev-env\docker-compose.yml up -d`

12) Run kibana: `yarn start --oss`

## Releasing

In the develop branch the Kibana version in `package.json` should always point to the latest unreleased stable version. For example: if Kibana 6.3.2 has been released the version should be 6.3.3. 

The develop branch is merged to master when a new version is ready (do not forget to increment the version inside `package.json`). The new version is tagged and uploaded to GitHub releases.

A GitHub release should at least contain a build for the latest stable Kibana version, but if possible builds for older minor versions should be created as well. Building for a specific Kibana version can be done easily with: `yarn build -k kibana-version-here`.
