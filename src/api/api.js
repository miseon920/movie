import axios from "axios";

const base_url = "https://api.themoviedb.org/3";
const api_key = "2598d7e7c1f7c4678bfe7145c9ec42db";

const instance = axios.create({
  baseURL: base_url,
  params: {
    api_key: api_key,
    language: "ko-KR",
  },
});

const category = {
  NowPlaying: "movie/now_playing",
  Netflix: "/discover/tv?with_networks=213",
  Trending: "/trending/movie/week",
  Rated: "/movie/top_rated",
  Movies: "/discover/movie",
  MoviesGenre: "/genre/movie/list",
  // MoviesWithGenre: "/discover/movie?with_genres=" + genres + "&page=" + page,
};

export { instance, category };

/*https://developers.themoviedb.org/3/discover/movie-discover */
