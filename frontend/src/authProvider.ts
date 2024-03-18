import { AuthProvider, HttpError } from "react-admin";

const isDev = import.meta.env.DEV;
const API_URL = isDev ? import.meta.env.VITE_DEV_REST_URL : import.meta.env.VITE_PROD_REST_URL;

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${API_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })

    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
            throw new HttpError(response.statusText, response.status, response.json());
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data));

        })
        .catch(() => {
            throw new HttpError('Network error', 500);
        });
  },

  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },

  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
