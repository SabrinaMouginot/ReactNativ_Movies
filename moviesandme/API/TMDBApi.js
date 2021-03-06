import axios from "axios";
import { API_TOKEN } from "@env";

  
const getFilmsFromApiWithSearchedText = async (text, page) => {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  // await slowNetwork();
  const response = await axios.get(url);
  console.log("--getFilmsFromApiWithSearchedText--");
  console.log(url);
  console.log(response.data);
  console.log("--fin getFilmsFromApiWithSearchedText--");
  return response.data;

};

const getImageFromApi = (name) => {
  if (name === null || name === undefined)
    return require("../Assets/filmVide.png");
  // 'https://image.tmdb.org/t/p/original' + name
  // 'https://image.tmdb.org/t/p/w300' + name
  return { uri: "https://image.tmdb.org/t/p/w300" + name };
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function slowNetwork() {
  await sleep(5000);
}

const getFilmDetailFromApi = async (id) => {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    API_TOKEN +
    "&language=fr";
  console.log(url)
  const response = await axios.get(url);
  return response.data;
};

export default getFilmsFromApiWithSearchedText;
export {
  getFilmsFromApiWithSearchedText,
  getImageFromApi,
  getFilmDetailFromApi,
};
