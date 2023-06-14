import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '@kbn/core/public';
import { AppPluginStartDependencies } from './types';
import { ElastAlertApp } from './components/main';

export const renderApp = (
  { notifications, http, uiSettings }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element }: AppMountParameters
) => {
  ReactDOM.render(
    <ElastAlertApp
      basename={appBasePath}
      notifications={notifications}
      http={http}
      navigation={navigation}
      uiSettings={uiSettings}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
