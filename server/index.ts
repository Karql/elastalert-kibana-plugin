import { TypeOf } from '@kbn/config-schema';

import { PluginConfigDescriptor, PluginInitializerContext } from 'kibana/server';
import { ConfigSchema } from './config';
import { ElastAlertPlugin } from './plugin';

export const config: PluginConfigDescriptor<TypeOf<typeof ConfigSchema>> = {
  schema: ConfigSchema
};

export const plugin = (context: PluginInitializerContext) => new ElastAlertPlugin(context);
