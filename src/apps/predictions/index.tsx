import React from "react";
import api from "../../api";
import GamesList from "../../components/GamesList";
import PredictionItem from "../../components/PredictionItem";
import { PredictionResult, TgUser } from "../../types";
import './styles.sass'

type PredictionAppProps = {
  tg: any;
  user: TgUser;
};

function PredictionsApp({ user }: PredictionAppProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [predictions, setPredictions] = React.useState<PredictionResult[]>([]);
  
  React.useEffect(() => {
    api.getUserPredictions({ userId: user.id })
      .then(setPredictions)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  let content;
  if(loading) {
    content = <h2>Загрузка...</h2>;
  } else if(error) {
    content = <h2>Произошла ошибка. Попробуйте еще раз.</h2>
  } else if(predictions.length === 0) {
    content = <h2>У вас пока нет прогнозов.</h2>
  } else {
    content = (
      <GamesList>
        {predictions.map((p, i) => {
          return <PredictionItem key={i} prediction={p} />
        })}
      </GamesList>
    );
  }

  return (
    <div id="predictions-app">
      {content}
    </div>
  );
}

export default PredictionsApp;
