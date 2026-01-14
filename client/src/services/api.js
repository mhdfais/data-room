import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_TARGET || ''}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Prevent redirect loop if already on signin page
      // Also prevent redirect for /auth/me check which happens on app load
      const isAuthCheck = error.config.url.includes('/auth/me');
      
      if (!window.location.pathname.includes('/signin') && !isAuthCheck) {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
