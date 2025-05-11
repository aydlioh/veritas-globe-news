'use client';

import BackBtn from '@/shared/ui/backbtn';
import { Footer } from '@/widgets/footer/ui/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="fixed top-0 left-0 right-0 z-30 bg-white">
        <div className="mx-auto flex h-[80px] w-full max-w-[1024px] items-center gap-4 px-4 lg:px-0">
          <BackBtn />
          <h1 className="text-h2">Редактор новостей</h1>
        </div>
      </header>
      <main className="flex-grow pt-20">
        <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1024px] ">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
