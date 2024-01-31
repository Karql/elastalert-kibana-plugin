import React, { useState } from 'react';
import { I18nProvider } from '@kbn/i18n-react';
import { Router } from 'react-router-dom';
import { NotificationsStart, HttpSetup, IUiSettingsClient, ScopedHistory, ChromeStart } from '@kbn/core/public';

import {
  EuiButtonIcon,
  EuiToolTip,
  EuiPageTemplate,
} from '@elastic/eui';

import { KibanaContextProvider } from '@kbn/kibana-react-plugin/public';
import { StatusToast } from '../toast';
import List from '../rules/list/list';

interface ElastAlertAppDeps {
  history: ScopedHistory;
  notifications: NotificationsStart;
  http: HttpSetup;
  uiSettings: IUiSettingsClient;
  chrome: ChromeStart;
}

export const ElastAlertApp = ({ history, notifications, http, uiSettings, chrome }: ElastAlertAppDeps) => {
  // Use React hooks to manage state.
  const [timestamp, setTimestamp] = useState<string | undefined>();

  chrome.setBreadcrumbs([{
    text: 'ElastAlert'
  }]);

  // Render the application DOM.
  return (
    <KibanaContextProvider services={{ uiSettings }}>
      <Router history={history}>
        <I18nProvider>
            <StatusToast />
            <EuiPageTemplate 
              offset={0} 
              panelled={true}
              restrictWidth={true} 
              bottomBorder={true} 
              grow={false}
            >
                <EuiPageTemplate.Header
                  pageTitle="ElastAlert Rules"
                  description="Create and manage your ElastAlert rules."
                  rightSideItems={[
                    <EuiToolTip position="left" content="Source @ GitHub">
                      <EuiButtonIcon
                        size="s"
                        color="text"
                        onClick={() =>
                          window.open(
                            'https://github.com/Karql/elastalert-kibana-plugin',
                            '_blank'
                          )
                        }
                        iconType="logoGithub"
                        aria-label="Github"
                      />
                    </EuiToolTip>
                  ]}
                />
                <EuiPageTemplate.Section>
                  <List httpClient={http} />
                </EuiPageTemplate.Section>
            </EuiPageTemplate>
        </I18nProvider>
      </Router>
    </KibanaContextProvider>
  );
};
