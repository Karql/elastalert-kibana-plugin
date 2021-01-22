import React from 'react';
import { EuiCallOut } from '@elastic/eui';

export const Console = (hasError: boolean, consoleOutput: any) => (
  <EuiCallOut
    size="s"
    title="Console output"
    iconType="console"
    color={hasError ? 'danger' : 'success'}
    style={{ whiteSpace: 'pre-wrap' }}
  >
    {consoleOutput}
  </EuiCallOut>
);
