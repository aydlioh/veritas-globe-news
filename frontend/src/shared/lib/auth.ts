export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access-token');
  }
  return null;
};

export const isAuthenticated = () => {
  return !!getAccessToken();
};

export const setAccessToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access-token', token);
  }
};

export const removeAccessToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access-token');
  }
};
