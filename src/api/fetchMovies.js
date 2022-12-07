import axios from 'axios';

const API_KEY = '565e4989d784811de7dff7d665000157';
const BASE_URL = 'https://api.themoviedb.org/3';

/* async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}; */

export async function getTrending() {

  const configTrending = {
    url: '/trending/movie/week',
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(configTrending);
  return response.data.results;
};

export async function getMoviesSearch (query) {

  const configMovieSearch = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
      query,
    },
  };

  const response = await axios(configMovieSearch);
  return response.data.results;
};

export async function getMovieId(movieId) {

  const configMovieId = {
    url: `/movie/${movieId}`,
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(configMovieId);
  return response.data;
};

export async function getCast(movieId) {

  const configCast = {
    url: `/movie/${movieId}/credits`,
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(configCast);
  //console.log('this is response from getCast:  ' + JSON.stringify(response.data));
  return response.data;
};

export async function getReviews(movieId) {

  const configMovieReviews = {
    url: `/movie/${movieId}/reviews`,
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(configMovieReviews);
  return response.data.results;
};