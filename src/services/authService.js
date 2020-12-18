import http from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + '/auth';
const tokenKey = 'token';

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  // save JWT on localStorage
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    // Get the JWT and decode it's content.
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const auth = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};

export default auth;
