import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import PredictionApp from './apps/prediction';
import { getTgUserFromInitData } from './helpers/get-tg-user-from-init-data';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

const PREDICTION_APP_KEY = 'prediction';

const sp = new URLSearchParams(window.location.search);
const app = sp.get('app');

if(app === PREDICTION_APP_KEY) {
  console.log('[APP]: prediction');
} else {
  console.log('! UNKNOWN APP!!!');
}


const tg = window.Telegram.WebApp;

let App;
if(true) {
  App = PredictionApp;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      tg={tg}
      user={getTgUserFromInitData(tg.initData)}
    />
  </React.StrictMode>
);
