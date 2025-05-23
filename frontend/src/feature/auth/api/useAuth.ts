import { useMutation } from '@tanstack/react-query';
import { AuthApi } from './authApi';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: { username: string; email: string; password: string }) =>
      AuthApi.register(data),

    onError: (error) => {
      console.error('register error:', error);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      AuthApi.login(data),

    onError: (error) => {
      console.error('login error:', error);
    },
  });
};
