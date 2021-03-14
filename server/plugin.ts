import { CoreSetup, CoreStart, Logger, Plugin, PluginInitializerContext } from 'kibana/server';
import { Observable } from 'rxjs';
import { ElastAlertPluginSetup, ElastAlertPluginStart } from './types';

import { ConfigType } from './config';
import { registerRoutes } from './routes';


export class ElastAlertPlugin implements Plugin<ElastAlertPluginSetup, ElastAlertPluginStart> {
  private readonly config$: Observable<ConfigType>;
  private readonly logger: Logger;
  
  constructor(initializerContext: PluginInitializerContext) {
    this.config$ = initializerContext.config.create();
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('elastAlert: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    registerRoutes({ logger: this.logger, config$: this.config$, router: router });

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('elastAlert: Started');
    return {};
  }

  public stop() {}
}
