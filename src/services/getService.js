import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/services';

export function getServices(category) {
  if (category) {
    let catEndPoint = apiEndPoint + '/' + category;
    return http.get(catEndPoint);
  }
  return http.get(apiEndPoint);
}
