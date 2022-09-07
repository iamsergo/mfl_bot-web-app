import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import { getTgUserFromInitData } from './helpers/get-tg-user-from-init-data';
import PredictionApp from './apps/prediction';
import RatingApp from './apps/rating';
import PredictionsApp from './apps/predictions';
import TournamentApp from './apps/tournament';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

// window.Telegram.WebApp = {
//   initData: 'user={"id":0}',
//   ready() {},
//   expand() {},
// };

const PREDICTION_APP_KEY = 'prediction';
const RATING_APP_KEY = 'rating';
const PREDICTIONS_APP_KEY = 'predictions';
const TOURNAMENT_APP_KEY = 'tournament';

const sp = new URLSearchParams(window.location.search);
const app = sp.get('app');

if(app === PREDICTION_APP_KEY) {
  console.log('[APP]: prediction');
} else if(app === RATING_APP_KEY) {
  console.log('[APP]: rating');
} else if(app === PREDICTIONS_APP_KEY) {
  console.log('[APP]: predictions');
} else if(app === TOURNAMENT_APP_KEY) {
  console.log('[APP]: tournament');
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
// if(true) {
//   App = PredictionsApp;
// }
if(true) {
  App = TournamentApp;
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
