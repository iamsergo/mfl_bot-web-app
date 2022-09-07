import { TournamentTableRow } from "../../types";
import './TournamentTable.sass';

type TournamentTableProps = {
  header: string;
  rows: TournamentTableRow[];
};

function TournamentTable({header, rows} : TournamentTableProps) {
  return (
    <div className="tournament-table-wrapper">
      <h1>{header}</h1>
      <div className="tournament-table">
        <div className="tournament-table__left">
          <div className="tournament-table__row" key="team-header">
            <div className="team-header">Команда</div>
          </div>
          {rows.map((r, i) => {
            return <div className="tournament-table__row" key={i}>
              <div className="position">{i+1}.</div>
              <div className="logo">
                <img src={r.team_logo} alt={r.team} />
              </div>
              <div className="value">{r.team}</div>
            </div>
          })}
        </div>
        <div className="tournament-table__right">
          <div className="tournament-table__row" key="stats-header">
              <div className="games header">И</div>
              <div className="win header">В</div>
              <div className="draw header">Н</div>
              <div className="lose header">П</div>
              <div className="score header">З</div>
              <div className="pass header">Пр</div>
              <div className="diff header">Р</div>
              <div className="points header">О</div>
            </div>
          {rows.map((r, i) => {
            return (
              <div className="tournament-table__row" key={i}>
                <div className="games">{r.games}</div>
                <div className="win">{r.win}</div>
                <div className="draw">{r.draw}</div>
                <div className="lose">{r.lose}</div>
                <div className="score">{r.score}</div>
                <div className="pass">{r.pass}</div>
                <div className="diff">{r.diff}</div>
                <div className="points">{r.points}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TournamentTable;
