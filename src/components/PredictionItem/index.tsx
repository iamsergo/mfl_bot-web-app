import { formatDate } from "../../helpers/format-date";
import { PredictionResult } from "../../types";
import './PredictionItem.sass';

type PredictionItemProps = {
  prediction: PredictionResult;
};

function PredictionItem({ prediction }: PredictionItemProps) {
  function getClassByPoints(points: number | null) {
    if(points === null) return '';
    else if(points === 0) return 'nothing';
    else if(points === 2) return 'result';
    else if(points === 3) return 'diff';
    else if(points === 5) return 'score';
  }

  return (
    <div className="prediction">
      <div className="prediction__time">
        {formatDate(+prediction.time)}
      </div>
      <div className="prediction__logos">
        {prediction.teams_logos[0].map((src, i) => {
          return <img key={i} src={src} alt={prediction.teams[0][i]} />
        })}
        {prediction.result && prediction.result.map((score, i) => {
          return <div key={i} className={`prediction__score prediction__score--${i ? 'away' : 'home'}`}>
            {score}
          </div>
        })}
      </div>
      <div className="prediction__teams">
        {prediction.teams[0].map((team, i) => {
          return <div key={i} className="prediction__team">
            {team}
          </div>
        })}
      </div>
      <div className="prediction__footer">
        <div className="prediction__value">
          Ваш прогноз: {prediction.prediction.join(':')}
        </div>
        <div className="prediction__points">
          Очки: {prediction.points !== null ? prediction.points : '?'}
          <div className={getClassByPoints(prediction.points)}></div>
        </div>
      </div>
    </div>
  );
}

export default PredictionItem;