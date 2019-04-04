import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { Button } from 'antd';

import { App } from './components/App/App';

OfflinePluginRuntime.install();

declare let module: any;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
  //SET SOME VISUAL INDICATOR IN APP
}

if (module.hot) {
  module.hot.accept();
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
