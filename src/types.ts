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

export type Rating = {
  user_id: number;
  username: string;
  position: string;
  points: string;
};

export type PredictionResult = {
  teams_logos: string[];
  time: string;
  teams: string[];
  prediction: number[];
  points: number | null;
  result: number[] | null;
}; 

export type TournamentTableRow = {
  group: string;
  position: number;
  team: string;
  team_logo: string;
  games: number;
  win: number;
  draw: number;
  lose: number;
  score: number;
  pass: number;
  diff: number;
  points: number;
};
