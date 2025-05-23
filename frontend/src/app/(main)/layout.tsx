'use client';

import { Footer } from '@/widgets/footer/ui/Footer';
import { Header } from '@/widgets/header/ui/Header';

import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNoLayout = pathname.includes('/edit-news');
  if (isNoLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow pt-16">
        <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1024px] ">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
