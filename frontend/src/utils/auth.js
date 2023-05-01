export const BASE_URL_AUTH = 'http://api.project.students.nomoredomains.monster';

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options)
    .then(res => checkStatus(res))
};

export const register = (password, email) => {
  return request(`${BASE_URL_AUTH}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
};

export const authorize = (password, email) => {
  return request(`${BASE_URL_AUTH}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
};

export const checkToken = (token) => {
  return request(`${BASE_URL_AUTH}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
};
