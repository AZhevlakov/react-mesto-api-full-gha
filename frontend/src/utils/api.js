class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkStatus)
  }

  // Получение данных пользователя
  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
  }

  // Отправка на сервер обновленных данных пользователя (name, job)
  updateUserInfo(name, about) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
  }

  // Получение загруженных на сервер карточек
  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
  }

  // Отправка на сервер новой карточки
  addCard(cardName, cardLink) {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
  }

  // Удаление с сервера карточки
  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  // Изменение статуса лайка карточке
  changeLikeCardStatus(cardId, isLiked) {
    let method = isLiked ? 'PUT' : 'DELETE';

    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers
    })
  }

  // Отправка на сервер нового аватара
  updateAvatar(avatarLink) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
  }
}

export const api = new Api({
  baseUrl: 'http://api.project.students.nomoredomains.monster',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
