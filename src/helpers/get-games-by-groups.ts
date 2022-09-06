import { Game } from "../types";

export type ByKeys<ValueType> = { [key: string]: ValueType };

function getGamesByKey(key: keyof Game, games: Game[]): ByKeys<Game[]> {
  return games.reduce((o, game) => {
    const k = game[key] as string;
    if(!o[k]) return { ...o, [k]: [game] };
    else return { ...o, [k]: o[k].concat([game]) };
  }, {} as ByKeys<Game[]>);
}

export function getGamesByGroups(games: Game[]): ByKeys<ByKeys<Game[]>> {
  const byGroups = getGamesByKey('group', games);
  const byGroupsEntries = Object.entries(byGroups)
    .map(([key, games]) => ([key, getGamesByKey('tour', games)]));
  return Object.fromEntries(byGroupsEntries);
}