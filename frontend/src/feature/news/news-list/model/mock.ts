import { INews } from '@/entities/news/model/store';

export const mockNewsList: INews[] = [
  {
    id: '1',
    name: '**Запуск новой платформы**',
    description:
      'Представляем полностью обновленную версию нашей платформы с улучшенным интерфейсом',
    date: '15 мая 2024',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: '**Обновление аналитики**',
    description:
      'Новые инструменты аналитики помогут вам лучше понимать ваших клиентов',
    date: '10 мая 2024',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: '**SEO оптимизация**',
    description:
      'Внедрены новые инструменты для улучшения поисковой оптимизации',
    date: '1 мая 2024',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: '**Обновление безопасности**',
    description: 'Улучшены системы защиты данных пользователей',
    date: '20 апреля 2024',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];
