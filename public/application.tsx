import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '@kbn/core/public';
import { AppPluginStartDependencies } from './types';
import { ElastAlertApp } from './components/main';

export const renderApp = (
  { notifications, http, uiSettings, chrome }: CoreStart,
  {}: AppPluginStartDependencies,
  { history, element }: AppMountParameters
) => {
  ReactDOM.render(
    <ElastAlertApp
      history={history}
      notifications={notifications}
      http={http}
      uiSettings={uiSettings}
      chrome={chrome}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
