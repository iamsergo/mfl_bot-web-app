import './GamesList.sass';

type PredictionGamesListProps = {
  children: JSX.Element[];
};

function GamesList({
  children
}: PredictionGamesListProps){
  return (
    <div className="games-list">
      {children}
    </div>
  );
}

export default GamesList;
