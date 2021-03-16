import React, { useState } from 'react';
import { i18n } from '@kbn/i18n';
import { I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  EuiPage,
  EuiPageBody,
  EuiPageHeaderSection,
  EuiButtonIcon,
  EuiPageHeader,
  EuiTitle,
  EuiToolTip,
} from '@elastic/eui';

import { CoreStart } from 'kibana/public';
import { NavigationPublicPluginStart } from '../../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../../common';
import { StatusToast } from '../toast';
import List from '../rules/list/list';
interface ElastAlertAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}

export const ElastAlertApp = ({ basename, notifications, http, navigation }: ElastAlertAppDeps) => {
  // Use React hooks to manage state.
  const [timestamp, setTimestamp] = useState<string | undefined>();

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    http.get('/api/elast_alert/example').then((res) => {
      setTimestamp(res.time);
      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(
        i18n.translate('elastAlert.dataUpdated', {
          defaultMessage: 'Data updated',
        })
      );
    });
  };

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={true}
            useDefaultBehaviors={true}
            showDatePicker={false}
          />
          <StatusToast />
          <EuiPage>
            <EuiPageBody>
              <EuiPageHeader>
                <EuiPageHeaderSection>
                  <EuiTitle size="l">
                    <h1>{PLUGIN_NAME}</h1>
                  </EuiTitle>
                </EuiPageHeaderSection>
                <EuiPageHeaderSection>
                  <EuiToolTip position="left" content="Source @ GitHub">
                    <EuiButtonIcon
                      size="s"
                      color="text"
                      onClick={() =>
                        window.open(
                          'https://github.com/bitsensor/elastalert-kibana-plugin',
                          '_blank'
                        )
                      }
                      iconType="logoGithub"
                      aria-label="Github"
                    />
                  </EuiToolTip>
                </EuiPageHeaderSection>
              </EuiPageHeader>
              <List httpClient={http} />
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};
