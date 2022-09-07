import React from 'react';
import api from '../../api';
import GameItem from '../../components/GameItem';
import GamesList from '../../components/GamesList';
import TournamentTable from '../../components/TournamentTable';
import { ByKeys, getGamesByGroups } from '../../helpers/get-games-by-groups';
import { getTablesByGroups } from '../../helpers/get-tables-by-groups';
import { Game, TgUser, TournamentTableRow } from '../../types';
import './styles.sass';

function TournamentAppLoading() {
  return <h1>Загрузка...</h1>;
}

function TournamentAppError() {
  return <h2>Произошла ошибка. <br/>Попробуйте позже.</h2>;
}

type TournamentAppProps = {
  tg: any;
  user: TgUser;
};

function TournamentApp({ tg, user }: TournamentAppProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [tablesByGroups, setTablesByGroups] = React.useState<ByKeys<TournamentTableRow[]>>({});
  const [gamesByGroups, setGamesByGroups] = React.useState<ByKeys<ByKeys<Game[]>>>({});

  React.useEffect(() => {
    tg.ready();
    tg.expand();
    Promise.all([
      api.getTable(),
      api.getAllGames(),
    ])
    .then(([table, games]) => {
      setTablesByGroups(getTablesByGroups(table));
      setGamesByGroups(getGamesByGroups(games));
    })
    .catch(setError)
    .finally(() => setLoading(false));
  }, []);

  console.log(tablesByGroups);
  console.log(gamesByGroups);

  let content;
  if(loading) {
    content = <TournamentAppLoading />
  } else if(error) {
    content = <TournamentAppError />
  } else {
    const games = Object.entries(gamesByGroups).map(([groupName, gamesByTours]) => {
      return (<>
        <h2>{groupName}</h2>
        {Object.entries(gamesByTours).map(([tourName, games]) => {
          return (<>
            <h3>{tourName}</h3>
            <GamesList>
              {games.map(game => {
                return (
                  <GameItem key={game.id} game={game} />
                );
              })}
            </GamesList>
          </>);
        })}
      </>);
    });
    const tables = Object.entries(tablesByGroups).map(([groupName, rows]) => {
      return <TournamentTable header={groupName} rows={rows} />
    })
    content = (<>
      {tables}
      {games}
    </>);
  }

  return (
    <div id="tournament-app">
      {content}
    </div>
  );
}

export default TournamentApp;
