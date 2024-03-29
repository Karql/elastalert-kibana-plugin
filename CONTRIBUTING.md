## Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md).

If you would like to run this plugin:

1) Clone kibana repo: `git clone https://github.com/elastic/kibana.git` and enter to the repo: `cd kibana`
2) Change branch to version you want to use the plugin with e.g.: `git checkout v8.13.0`
3) Install nvm if you don't have
4) Install node: `nvm install $(cat .nvmrc)`
5) Configure node: `nvm use $(cat .nvmrc)`
6) Install yarn if you don't have: `npm install -g yarn`
7) Run: `yarn kbn clean`
8) Run: `yarn kbn bootstrap`
9) Clone this repo into plugins directory by: `git clone https://github.com/Karql/elastalert-kibana-plugin.git ./plugins/elastalert-kibana-plugin`
10) Configure kibana (`config/kibana.yml`):

```
server.name: kibana
server.host: 0.0.0.0
elasticsearch.hosts: [ "http://localhost:9200" ]
elastalertKibanaPlugin.serverSsl: false
elastalertKibanaPlugin.serverHost: localhost
elastalertKibanaPlugin.serverPort: 8030
```

10) Run elastic with elastalert. For test purpose you can use: `plugins/elastalert-kibana-plugin/dev/dev-env/docker-compose.yml` by running:

`docker-compose -p dev-env -f dev/dev-env/docker-compose.yml up -d`

11) Optionally for better errors set `mode: development` in `packages/kbn-ui-shared-deps-npm/webpack.config.js`
11) In separate terminal enter the plugin directory `cd plugins/elastalert-kibana-plugin` and run `yarn dev --watch`
12) Run kibana: `yarn start --oss`

# Build plugin

1) Use steps 1-9 from Develompment section.
2) Enter the plugin directory `cd plugins/elastalert-kibana-plugin`
3) Run: `yarn build --kibana-version=8.13.0`
4) Build plugin can be found in: `plugins/elastalert-kibana-plugin/build/` 

# Testing plugin

To test if plugin works correctly with particular kibana version you can use `dev/test-env/**/*`

1) Copy built plugin into `dev/test-env/kibana/plugins/`
2) Change kibana & plugin version in `dev/test-env/kibana/Dockerfile`
3) Chagne elastic version in `dev/test-env/docker-compose.yml`
4) Build `docker-compose -p test-env -f dev/test-env/docker-compose.yml build`
5) Run `docker-compose -p test-env -f dev/test-env/docker-compose.yml up -d`