import { Game, TournamentTableRow } from "../types";
import { ByKeys } from "./get-games-by-groups";

export function getTablesByGroups(table: TournamentTableRow[]): ByKeys<TournamentTableRow[]> {
  return table.reduce((o, row) => {
    const k = row.group;
    if(!o[k]) return { ...o, [k]: [row] };
    else return { ...o, [k]: o[k].concat([row]) };
  }, {} as ByKeys<TournamentTableRow[]>);
}
