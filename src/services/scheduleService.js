import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/schedule';

export function schedule(appointment) {
  return http.post(apiEndpoint, {
    name: appointment.name,
    phone: appointment.phone,
    address: appointment.address,
    date: appointment.date,
    service: appointment.service,
  });
}

export function getSchedule(dateRange) {
  const from = new Date(dateRange[0]).toISOString();
  const to = new Date(dateRange[1]).toISOString();
  return http.get(apiEndpoint + '?from=' + from + '&to=' + to);
}
