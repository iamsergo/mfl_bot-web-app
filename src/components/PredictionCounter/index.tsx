import './PredictionCounter.sass';

type PredictionCounterProps = {
  disabled: boolean;
  onInc: () => void;
  onDec: () => void;
};

function PredictionCounter({
  disabled,
  onInc,
  onDec,
}: PredictionCounterProps) {
  return (
    <div className="prediction-counter">
      <div
        className="prediction-counter__btn prediction-counter__btn--inc"
        onClick={onInc}
      >+</div>
      <div
        className={`prediction-counter__btn prediction-counter__btn--dec${disabled ? ' disabled': ''}`}
        onClick={() => !disabled && onDec()}
      >-</div>
    </div>
  );
}

export default PredictionCounter;
