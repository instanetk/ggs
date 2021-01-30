import http from './httpService';

const apiUrl = process.env.REACT_APP_API_URL;

const apiEndpoint = apiUrl + '/testimonial';

export function submit(testimonial) {
  // console.log(testimonial);
  return http.post(apiEndpoint, testimonial);
}
