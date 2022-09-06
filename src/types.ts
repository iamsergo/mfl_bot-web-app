export type TgUser = {
  id: number;
  first_name: string;
  username: string;
};

export enum GameResult {
  HOME = 0,
  DRAW = 1,
  AWAY = 2,
}

export type Game = {
  id: number;
  teams: string[];
  teams_logos: string[];
  // time: number;
  time: string;
  score: number[] | null;
  result: GameResult | null;
  total: number | null;
  diff: number | null;
  group: string;
  tour: string;
};
