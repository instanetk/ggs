import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/services';

export function getServices() {
  return http.get(apiEndPoint);
}
