import axiosInstance from '@/shared/api/axiosInstance';

export const NewsApi = {
  async getAllNews() {
    const response = await axiosInstance.get('/api/news');
    return response.data;
  },

  async getNewsById(id: string) {
    const response = await axiosInstance.get(`/api/news/${id}`);
    return response.data;
  },

  async createNews(formData: FormData) {
    const response = await axiosInstance.post('/api/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async updateNews(id: string, formData: FormData) {
    const response = await axiosInstance.patch(`/api/news/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deleteNews(id: string) {
    const response = await axiosInstance.delete(`/api/news/${id}`);
    return response.data;
  },
};
