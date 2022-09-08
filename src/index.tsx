import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';

import { getTgUserFromInitData } from './helpers/get-tg-user-from-init-data';

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

const tg = window.Telegram.WebApp;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if(app === PREDICTION_APP_KEY) {
  console.log('[APP]: prediction');
  import('./apps/prediction/').then(({default: PredictionApp}) => {
    root.render(<PredictionApp tg={tg} user={getTgUserFromInitData(tg.initData)} />);
  });
} else if(app === RATING_APP_KEY) {
  console.log('[APP]: rating');
  import('./apps/rating/').then(({default: RatingApp}) => {
    root.render(<RatingApp tg={tg} user={getTgUserFromInitData(tg.initData)} />);
  });
} else if(app === PREDICTIONS_APP_KEY) {
  console.log('[APP]: predictions');
  import('./apps/predictions/').then(({default: PredictionsApp}) => {
    root.render(<PredictionsApp tg={tg} user={getTgUserFromInitData(tg.initData)} />);
  });
} else if(app === TOURNAMENT_APP_KEY) {
  console.log('[APP]: tournament');
  import('./apps/tournament/').then(({default: TournamentApp}) => {
    root.render(<TournamentApp tg={tg} user={getTgUserFromInitData(tg.initData)} />);
  });
} else {
  console.log('! UNKNOWN APP!!!');
  root.render(<h1>Ошибка!</h1>);
}
