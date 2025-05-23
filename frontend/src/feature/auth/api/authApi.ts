import axiosInstance from '@/shared/api/axiosInstance';
import {
  removeFromLocalStorage,
  setToLocalStorage,
} from '@/shared/lib/localStorage';

export const AuthApi = {
  async register(data: { username: string; email: string; password: string }) {
    const response = await axiosInstance.post('/api/auth/register', data);

    if (response.data.accessToken) {
      setToLocalStorage('access-token', response.data.accessToken);
    }

    return response.data;
  },

  async login(data: { email: string; password: string }) {
    const response = await axiosInstance.post('/api/auth/login', data);

    if (response.data.accessToken) {
      setToLocalStorage('access-token', response.data.accessToken);
    }

    return response.data;
  },

  logout() {
    removeFromLocalStorage('access-token');
  },
};
