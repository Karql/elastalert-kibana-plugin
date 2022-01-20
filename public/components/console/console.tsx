import React from 'react';
import { EuiCallOut } from '@elastic/eui';

export const Console = (props: { hasError: boolean, consoleOutput: string }) => (
  <EuiCallOut
    size="s"
    title="Console output"
    iconType="console"
    color={props.hasError ? 'danger' : 'success'}
    style={{ whiteSpace: 'pre-wrap' }}

  >
    {props.consoleOutput}
  </EuiCallOut>
);
