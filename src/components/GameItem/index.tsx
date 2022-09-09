import { formatDate } from '../../helpers/format-date';
import { Game } from '../../types';
import './GameItem.sass';

type PredictionGamesListItemProps = {
  game: Game;
  onClick?: () => void;
}
function GameItem({
  game,
  onClick,
}: PredictionGamesListItemProps) {
  return (
    <div
      className={`game${onClick ? ' clickable' : ''}`}
      onClick={() => onClick && onClick()}
    >
      <div className="game__time">
        {formatDate(+game.time)}
      </div>
      <div className="game__logos">
        {game.teams_logos[0].map((src, i) => {
          return <img key={i} src={src} alt={game.teams[0][i]} />
        })}
        {game.score && game.score.map((score, i) => {
          return <div key={i} className={`game__score game__score--${i ? 'away' : 'home'}`}>
            {score}
          </div>
        })}
      </div>
      <div className="game__teams">
        {game.teams[0].map((team, i) => {
          return <div key={i} className="game__team">
            {team}
          </div>
        })}
      </div>
    </div>
  );
}

export default GameItem;
