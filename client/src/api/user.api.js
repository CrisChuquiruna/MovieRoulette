import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// const PORT = 8000;
// 'https://movie-roulette.onrender.com'
// 'http://127.0.0.1:8000'

export const client = axios.create({
  baseURL: 'https://movie-roulette.onrender.com'
});

export function getUser () {
  return client.get('/api/user');
}

export function userLoggin ({ email, password }) {
  return client.post(
    '/api/login',
    {
      email,
      password
    }
  );
}

export function userSignup ({ email, username, password }) {
  return client.post(
    '/api/register',
    {
      email,
      username,
      password
    }
  );
}

export function userLogout () {
  return client.post(
    '/api/logout',
    { withCredentials: true }
  );
}
