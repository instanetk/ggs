import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/categories';

export function getCategories() {
  return http.get(apiEndPoint);
}
