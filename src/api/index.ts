import { Game, PredictionResult, Rating, TournamentTableRow } from "../types";

const BASE_URL = process.env.REACT_APP_BASE_URL;

async function getGamesForUser(data: { userId: number }): Promise<Game[]> {
  const url = `${BASE_URL}/games/?userId=${data.userId}`;
  const res = await fetch(url);
  const games = await res.json() as Game[];
  return games.sort((a, b) => +(a.tour.replace('Тур ', '')) - +(b.tour.replace('Тур ', '')));
}

async function createPrediction(data: { userId: number, gameId: number, prediction: number[] }): Promise<void> {
  const url = `${BASE_URL}/prediction`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(data),
  });
}

async function getRating(data: { limit: number, offset: number }): Promise<Rating[]> {
  const url = `${BASE_URL}/rating?limit=${data.limit}&offset=${data.offset}`;
  const res = await fetch(url);
  return await res.json();
}

async function getUserPredictions(data: { userId: number }): Promise<PredictionResult[]> {
  const url = `${BASE_URL}/predictions/${data.userId}`;
  const res = await fetch(url);
  return await res.json();
}

async function getTable(): Promise<TournamentTableRow[]> {
  const url = `${BASE_URL}/table`;
  const res = await fetch(url);
  return await res.json();
}

async function getAllGames(): Promise<Game[]> {
  const url = `${BASE_URL}/all-games`;
  const res = await fetch(url);
  return await res.json();
}

const api = {
  getGamesForUser,
  createPrediction,
  getRating,
  getUserPredictions,
  getTable,
  getAllGames,
};

export default api;
