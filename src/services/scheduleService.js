import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/schedule';

export function schedule(appointment) {
  return http.post(apiEndpoint, {
    name: appointment.name,
    phone: appointment.phone,
    address: appointment.address,
    date: new Date(appointment.date).toLocaleDateString('en-US', { timeZone: 'UTC' }),
    coordinates: appointment.coordinates,
    service: appointment.service,
  });
}

export function getSchedule(dateRange) {
  // console.log('range', dateRange);
  const from = new Date(dateRange[0]).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const to = new Date(dateRange[1]).toLocaleDateString('en-US', { timeZone: 'UTC' });
  const query = apiEndpoint + '/list?from=' + from + '&to=' + to;
  // console.log('query', query);
  return http.get(query);
}

export function getAppointment(id) {
  const query = apiEndpoint + '/appointment/?id=' + id;
  return http.get(query);
}

export function updateStatus(id) {
  const query = apiEndpoint + '/appointment/?id=' + id;
  return http.put(query);
}
