import React from 'react';
import api from '../../api';
import GameItem from '../../components/GameItem';
import GamesList from '../../components/GamesList';
import PredictionModal from '../../components/PredictionModal';
import { ByKeys, getGamesByGroups } from '../../helpers/get-games-by-groups';
import { Game, TgUser } from '../../types';
import './styles.sass';

function PredictionAppLoading() {
  return <h1>Загрузка...</h1>;
}

function PredictionAppError() {
  return <h2>Произошла ошибка (<br/>Попробуйте позже.</h2>;
}

type AppProps = {
  tg: any;
  user: TgUser;
};

function PredictionApp({ tg, user }: AppProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [gamesByGroups, setGamesByGroups] = React.useState<ByKeys<ByKeys<Game[]>>>({});

  React.useEffect(() => {
    tg.ready();
    tg.expand();
    api.getGamesForUser({ userId: user.id })
      .then(games => setGamesByGroups(getGamesByGroups(games)))
      .catch(_ => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const [score, setScore] = React.useState([0, 0]);

  const [activeGame, setActiveGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    if(activeGame) {
      tg.MainButton.text = 'Подтвердить';
      tg.MainButton.show();
    }
    else {
      tg.MainButton.hide();
    }
  }, [activeGame]);

  React.useEffect(() => {
    if(activeGame)
      tg.MainButton.onClick(applyPrediction);
    
    return () => {
      tg.MainButton.offClick(applyPrediction);
    }
  }, [activeGame, score]);

  function selectGame(game: Game) {
    setActiveGame(game);
  }

  async function applyPrediction() {
    const options = {
      userId: user.id,
      gameId: activeGame!.id,
      prediction: score,
    };
    try {
      setLoading(true);
      await api.createPrediction(options);
      tg.close();
    } catch(err) {
      setError(true);
    } finally {
      tg.MainButton.hide();
      setLoading(false);
    }
  }

  let content;
  if(loading) {
    content = <PredictionAppLoading />
  } else if(error) {
    content = <PredictionAppError />
  } else {
    content = Object.entries(gamesByGroups).map(([groupName, gamesByTours]) => {
      return (<>
        <h2>{groupName}</h2>
        {Object.entries(gamesByTours).map(([tourName, games]) => {
          return (<>
            <h3>{tourName}</h3>
            <GamesList>
              {games.map(game => {
                return (
                  <GameItem
                    key={game.id}
                    game={game}
                    onClick={() => selectGame(game)}
                  />
                );
              })}
            </GamesList>
          </>);
        })}
      </>);
    });
  }

  return (
    <div id="prediction-app">
      {content}
      <PredictionModal
        tg={tg}
        game={activeGame}
        onScoreChange={setScore}
        onClose={() => setActiveGame(null)}
      />
    </div>
  );
}

export default PredictionApp;
