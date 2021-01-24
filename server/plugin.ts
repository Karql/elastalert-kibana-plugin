import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from 'kibana/server';

import { ElastAlertPluginSetup, ElastAlertPluginStart } from './types';
import { defineRoutes } from './routes';

export class ElastAlertPlugin implements Plugin<ElastAlertPluginSetup, ElastAlertPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('elastAlert: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('elastAlert: Started');
    return {};
  }

  public stop() {}
}
