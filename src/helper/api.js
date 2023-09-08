import axios from 'axios';

const api = ({ url, method, body, headers }) => {
  const config = {
    url: `https://sagara-research-news.nikici.com/${url}`,
    method: method,
    data: body,
    headers: headers,
    timeout: 300000,
  };
  return axios(config);
};

const apiRequest = async ({ method, url, payload = {} }) => {
  let body = null;
  let headers = {
    'Content-Type': 'application/json',
  };

  const user = localStorage.getItem('user');

  if (user?.token) {
    headers = {
      ...headers,
      Authorization: `Token ${user.token}`,
    };
  }

  if (method !== 'get') {
    body = payload;
  }

  try {
    const response = await api({ url, method, body, headers });
    return response;
  } catch ({ response }) {
    throw response.data;
  }
};

const get = ({ url }) => apiRequest({ url, method: 'get' });
const deleteRequest = ({ url, payload }) =>
  apiRequest({ method: 'delete', url: url, payload: payload });
const post = ({ url, payload }) =>
  apiRequest({ method: 'post', url: url, payload: payload });
const put = ({ url, payload }) =>
  apiRequest({ method: 'put', url: url, payload: payload });

const API = { get, deleteRequest, post, put };

export default API;
