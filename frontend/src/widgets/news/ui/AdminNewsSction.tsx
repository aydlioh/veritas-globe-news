'use client';

import AdminNewsList from '@/feature/news/ui/AdminNewsList';

export default function AdminNewsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <h2 className="text-2xl font-bold">Новости</h2>

      <AdminNewsList />
    </div>
  );
}
