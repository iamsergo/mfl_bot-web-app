import React from "react";
import { Game } from "../../types";
import GameItem from "../GameItem";
import PredictionCounter from "../PredictionCounter";
import './PredictionModal.sass';

type PredictionModalProps = {
  tg: any;
  game: Game | null;
  onScoreChange: (score: number[]) => void;
  onClose: () => void;
};

function PredictionModal({
  game,
  onScoreChange,
  onClose,
}: PredictionModalProps) {
  const [homeScore, setHomeScore] = React.useState(0);
  const [awayScore, setAwayScore] = React.useState(0);

  React.useEffect(() => {
    onScoreChange([homeScore, awayScore]);
  }, [homeScore, awayScore]);

  React.useEffect(() => {
    document.body.style.overflow = game ? 'hidden' : 'auto';
  }, [game]);

  function closeModal() {
    onClose();
    setHomeScore(0);
    setAwayScore(0);
  }

  return (
    <div
      className={`prediction-modal-wrapper ${game ? 'opened' : 'closed'}`}
      onClick={closeModal}
    >
      <div
        className="prediction-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="prediction-modal-header">
          <PredictionCounter
            disabled={homeScore === 0}
            onInc={() => setHomeScore(s => s + 1)}
            onDec={() => setHomeScore(s => s - 1)}
          />
          {game && <GameItem
            game={{...game, score: [homeScore, awayScore]}}
          />}
          <PredictionCounter
            disabled={awayScore === 0}
            onInc={() => setAwayScore(s => s + 1)}
            onDec={() => setAwayScore(s => s - 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default PredictionModal;
