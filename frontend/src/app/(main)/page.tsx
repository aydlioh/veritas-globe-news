'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_BASE_URL}/api/ping`);
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);
  redirect('/news');
  return (
    <div>
      <h1>Главная страница</h1>
    </div>
  );
}
