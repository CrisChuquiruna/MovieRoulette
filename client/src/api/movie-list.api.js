import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// const PORT = 8000;

const movieListApi = axios.create({
  baseURL: 'https://movie-roulette.onrender.com/movie_lists/'
});

export const getMovieList = (id) => {
  return movieListApi.get(`/get_lists/${id}/`);
};

export const createMovieList = (movieList) => {
  return movieListApi.post('movie_lists/', movieList);
};

export const deleteMovieList = (id) => {
  return movieListApi.delete(`movie_lists/${id}/`);
};

export const updateMovieList = (id, movieList) => {
  return movieListApi.put(`movie_lists/${id}/`, movieList);
};
