'use client';

import AdminNewsList from '@/feature/news/ui/AdminNewsList';
import { CreateNews } from '@/feature/news/ui/CreateNews';

export default function AdminNewsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <h2 className="text-2xl font-bold">Новости</h2>
      <CreateNews />
      <AdminNewsList />
    </div>
  );
}
