import { PluginInitializerContext } from 'kibana/server';
import { ElastAlertPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new ElastAlertPlugin(initializerContext);
}

export { ElastAlertPluginSetup, ElastAlertPluginStart } from './types';
