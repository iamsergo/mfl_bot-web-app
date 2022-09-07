import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import { getTgUserFromInitData } from './helpers/get-tg-user-from-init-data';
import PredictionApp from './apps/prediction';
import RatingApp from './apps/rating';
import PredictionsApp from './apps/predictions';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

window.Telegram.WebApp = {
  initData: 'user={"id":0}',
};

const PREDICTION_APP_KEY = 'prediction';
const RATING_APP_KEY = 'rating';
const PREDICTIONS_APP_KEY = 'predictions';

const sp = new URLSearchParams(window.location.search);
const app = sp.get('app');

if(app === PREDICTION_APP_KEY) {
  console.log('[APP]: prediction');
} else if(app === RATING_APP_KEY) {
  console.log('[APP]: rating');
} else if(app === PREDICTIONS_APP_KEY) {
  console.log('[APP]: predictions');
} else {
  console.log('! UNKNOWN APP!!!');
}


const tg = window.Telegram.WebApp;

let App;
// if(true) {
//   App = PredictionApp;
// }
// if(true) {
//   App = RatingApp;
// }
if(true) {
  App = PredictionsApp;
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
