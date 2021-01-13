import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/schedule';

export function schedule(appointment) {
  return http.post(apiEndpoint, {
    name: appointment.name,
    phone: appointment.phone,
    address: appointment.address,
    date: new Date(appointment.date).toLocaleDateString('en-US', { timeZone: 'UTC' }),
    service: appointment.service,
  });
}

export function getSchedule(dateRange) {
  const from = new Date(dateRange[0]).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const to = new Date(dateRange[1]).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const query = apiEndpoint + '?from=' + from + '&to=' + to;
  // console.log(query);
  return http.get(query);
}
