import axios from 'axios';

const downloadFile = (response, name = 'Whitepaper', format = 'pdf') => {
  const time = new Date()
  const fileName = name + '-' + time.toLocaleString('en-GB', { timeZone: 'UTC' })

  const url = window.URL.createObjectURL(new Blob([response]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.${format}`);
  document.body.appendChild(link);
  link.click();
}

const api = ({ url, method, body, headers, isDownload }) => {
  let config = {
    url: `https://sagara-research-news.nikici.com/${url}`,
    method: method,
    data: body,
    headers: headers,
    timeout: 300000,
  };

  if (isDownload) {
    config = {
      ...config,
      responseType: 'blob',
    }
  }

  return axios(config);
};

const apiRequest = async ({ method, url, payload = {}, isForm, fileName, format }) => {
  let body = null;
  let headers = {
    'Content-Type': 'application/json',
  };

  if (isForm) {
    headers = {
      'Content-Type': 'multipart/form-data'
    }
  }

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
    const response = await api({ url, method, body, headers, isDownload: isForm });
    if (isForm) {
      downloadFile(response.data, fileName, format)
    }
    return response;
  } catch ({ response }) {
    throw response.data;
  }
};

const get = ({ url }) => apiRequest({ url, method: 'get' });
const deleteRequest = ({ url, payload }) =>
  apiRequest({ method: 'delete', url: url, payload: payload });
const post = ({ url, payload, isForm, fileName, format }) =>
  apiRequest({ method: 'post', url: url, payload: payload, isForm, fileName, format });
const put = ({ url, payload }) =>
  apiRequest({ method: 'put', url: url, payload: payload });

const API = { get, deleteRequest, post, put };

export default API;
