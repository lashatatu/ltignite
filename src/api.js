const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const myKey = process.env.REACT_APP_DEV_YOUR_API_KEY;
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${myKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${myKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${myKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${myKey}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}?key=${myKey}?games/${game_id}/screenshots`;

console.log(upcomingGamesURL);
