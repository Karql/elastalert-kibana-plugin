# Troubleshooting

## 1. The data in this module is over two months old...

Annoying error:
```
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
```

Known issue: https://github.com/elastic/kibana/issues/248642

Can be solved by adding lateset version e.g.: `"baseline-browser-mapping": "2.9.14"` to `packages.json` section `resolutions` and execute `yarn`.