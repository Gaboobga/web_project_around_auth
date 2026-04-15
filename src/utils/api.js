// src/utils/api.js

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(path, options = {}) {
    return fetch(`${this._baseUrl}${path}`, {
      headers: this._headers,
      ...options,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request('/users/me');
  }

  setUserInfo({ name, about }) {
    return this._request('/users/me', {
      method: 'PATCH',
      body: JSON.stringify({ name, about }),
    });
  }

  setUserAvatar({ avatar }) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({ avatar }),
    });
  }

  getCardList() {
    return this._request('/cards');
  }

  addCard({ name, link }) {
    return this._request('/cards', {
      method: 'POST',
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  }

  changeLikeCardStatus(cardId, shouldLike) {
    return this._request(`/cards/${cardId}/likes`, {
      method: shouldLike ? 'PUT' : 'DELETE',
    });
  }
}

const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1',
  headers: {
    authorization: 'e43b7e13-9b4c-44b0-bf36-7f1f9d2c8733',
    'Content-Type': 'application/json',
  },
});

export default api;