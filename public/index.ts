import './index.scss';

import { ElastAlertPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new ElastAlertPlugin();
}
export { ElastAlertPluginSetup, ElastAlertPluginStart } from './types';
