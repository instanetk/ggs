import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndpoint = apiUrl + '/pinboard';

export function postPin(data) {
  return http.post(apiEndpoint, {
    published: false,
    data,
  });
}

export function getPins() {
  return http.get(apiEndpoint);
}

export function getPin(id) {
  return http.get(apiEndpoint + '/' + id);
}

export function togglePublished(id) {
  return http.put(apiEndpoint + '/' + id);
}

export function countLikes(id) {
  return http.put(apiEndpoint + '/like/' + id);
}

export function deletePin(id) {
  return http.delete(apiEndpoint + '/' + id);
}
