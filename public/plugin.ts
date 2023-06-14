import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import { ElastAlertPluginSetup, ElastAlertPluginStart, AppPluginStartDependencies } from './types';
import { PLUGIN_NAME } from '../common';

export class ElastAlertPlugin implements Plugin<ElastAlertPluginSetup, ElastAlertPluginStart> {
  public setup(core: CoreSetup): ElastAlertPluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'elastAlert',
      title: PLUGIN_NAME,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('elastAlert.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): ElastAlertPluginStart {
    return {};
  }

  public stop() {}
}
