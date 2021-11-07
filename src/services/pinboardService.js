import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndpoint = apiUrl + '/pinboard';

export function postPin(data) {
  return http.post(apiEndpoint, {
    published: false,
    data,
  });
}
