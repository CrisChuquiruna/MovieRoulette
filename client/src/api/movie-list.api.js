import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const PORT = 8000;

const movieListApi = axios.create({
  baseURL: `http://127.0.0.1:${PORT}/movie_lists/movie_lists/`
});

export const getAllMovieLists = () => {
  return movieListApi.get('/');
};

export const createMovieList = (movieList) => {
  return movieListApi.post('/', movieList);
};

export const deleteMovieList = (id) => {
  return movieListApi.delete(`/${id}/`);
};

export const updateMovieList = (id, movieList) => {
  return movieListApi.put(`/${id}/`, movieList);
};
