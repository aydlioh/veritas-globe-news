export const NewsApi = {
  async getNewsDetailMock(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      id,
      title: 'Заголовок новости',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23VFjImwCi2eZskcfTqvUae2P7V9rCENGlg&s',
      date: '11 мая 2024',
      content: `**Описание новости**

Описание новости`,
    };
  },
};
