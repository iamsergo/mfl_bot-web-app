import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import { getTgUserFromInitData } from './helpers/get-tg-user-from-init-data';
import PredictionApp from './apps/prediction';
import RatingApp from './apps/rating';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

window.Telegram.WebApp = {
  initData: 'user={}',
};

const PREDICTION_APP_KEY = 'prediction';
const RATING_APP_KEY = 'rating';

const sp = new URLSearchParams(window.location.search);
const app = sp.get('app');

if(app === PREDICTION_APP_KEY) {
  console.log('[APP]: prediction');
} else if(app === RATING_APP_KEY) {
  console.log('[APP]: rating');
} else {
  console.log('! UNKNOWN APP!!!');
}


const tg = window.Telegram.WebApp;

let App;
// if(true) {
//   App = PredictionApp;
// }
if(true) {
  App = RatingApp;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App
      tg={tg}
      user={getTgUserFromInitData(tg.initData)}
    />
);
