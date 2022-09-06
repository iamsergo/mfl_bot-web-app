import { Game } from "../types";

const BASE_URL = `http://localhost:5500`;

// const GAMES: Game[] = [{ "id": 205, "time": "1662790275154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 4", "teams": ["Команда1", "Команда5"], "teams_logos": ["https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 210, "time": "1662703875154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 1", "teams": ["Команда2", "Команда3"], "teams_logos": ["https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png"] }, { "id": 212, "time": "1662703875154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 3", "teams": ["Команда2", "Команда5"], "teams_logos": ["https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 214, "time": "1662703875154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 5", "teams": ["Команда2", "Команда7"], "teams_logos": ["https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png"] }, { "id": 215, "time": "1662531075154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 6", "teams": ["Команда2", "Команда Команда8"], "teams_logos": ["https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 218, "time": "1662876675154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 2", "teams": ["Команда3", "Команда5"], "teams_logos": ["https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 223, "time": "1662531075154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 1", "teams": ["Команда4", "Команда5"], "teams_logos": ["https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 232, "time": "1662617475154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа А", "tour": "Тур 1", "teams": ["Команда6", "Команда7"], "teams_logos": ["https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png"] }, { "id": 244, "time": "1662963075154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 7", "teams": ["Команда10", "Команда Команда17"], "teams_logos": ["https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png", "https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png"] }, { "id": 245, "time": "1662876675154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 8", "teams": ["Команда10", "Команда Команда18"], "teams_logos": ["https://thumb.tildacdn.com/tild3363-3132-4236-b962-653563346165/-/resize/36x/-/format/webp/2DROTS.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 249, "time": "1662876675154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 4", "teams": ["Команда Команда11", "Команда Команда15"], "teams_logos": ["https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png"] }, { "id": 250, "time": "1662790275154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 5", "teams": ["Команда Команда11", "Команда16"], "teams_logos": ["https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png"] }, { "id": 251, "time": "1662531075154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 6", "teams": ["Команда Команда11", "Команда Команда17"], "teams_logos": ["https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png"] }, { "id": 252, "time": "1662703875154", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 7", "teams": ["Команда Команда11", "Команда Команда18"], "teams_logos": ["https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 256, "time": "1662963075155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 4", "teams": ["Команда Команда12", "Команда16"], "teams_logos": ["https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png", "https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png"] }, { "id": 257, "time": "1662876675155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 5", "teams": ["Команда Команда12", "Команда Команда17"], "teams_logos": ["https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png", "https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png"] }, { "id": 259, "time": "1662790275155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 1", "teams": ["Команда13", "Команда Команда14"], "teams_logos": ["https://thumb.tildacdn.com/tild6236-3136-4133-b839-633665616630/-/resize/36x/-/format/webp/photo.png", "https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png"] }, { "id": 264, "time": "1662703875155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 1", "teams": ["Команда Команда14", "Команда Команда15"], "teams_logos": ["https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png", "https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png"] }, { "id": 266, "time": "1662876675155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 3", "teams": ["Команда Команда14", "Команда Команда17"], "teams_logos": ["https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png", "https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png"] }, { "id": 267, "time": "1662531075155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 4", "teams": ["Команда Команда14", "Команда Команда18"], "teams_logos": ["https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png", "https://st.joinsport.io/team/1221116/logo/61f285ff2799e_173x173.png"] }, { "id": 269, "time": "1662531075155", "score": null, "result": null, "total": null, "diff": null, "group": "Группа Б", "tour": "Тур 2", "teams": ["Команда Команда15", "Команда Команда17"], "teams_logos": ["https://thumb.tildacdn.com/tild3432-3839-4161-a565-626661313562/-/resize/36x/-/format/webp/_.png", "https://thumb.tildacdn.com/tild6532-3936-4536-a535-633465616532/-/resize/36x/-/format/webp/photo.png"] }]

async function getGamesForUser(data: { userId: number }): Promise<Game[]> {
  const url = `${BASE_URL}/games/?userId=${data.userId}`;
  const res = await fetch(url);
  const games = await res.json() as Game[];
  return games.sort((a, b) => +(a.tour.replace('Тур ', '')) - +(b.tour.replace('Тур ', '')));
  // return GAMES.sort((a, b) => +(a.tour.replace('Тур ', '')) - +(b.tour.replace('Тур ', '')));
}

async function createPrediction(data: { userId: number, gameId: number, prediction: number[] }): Promise<void> {
  const url = `${BASE_URL}/prediction`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(data),
  });
}

const api = {
  getGamesForUser,
  createPrediction,
};

export default api;
