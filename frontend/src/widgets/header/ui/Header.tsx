'use client';

import { NavMenu } from '@/feature/navigation-menu/ui/NavigationMenu';
import { ProfileButton } from '@/feature/profile/ui/ProfileButton';
import { useAppRouter } from '@/shared/lib/navigation';
import { LogoImage } from '@/shared/ui/logo';
import { useState, useEffect } from 'react';

const allNavItems = [
  { value: 'news', label: 'Новости', path: '/news' },
  {
    value: 'admin-panel',
    label: 'Редактор',
    path: '/admin-panel',
  },
];

export const Header = () => {
  const { router } = useAppRouter();
  const [navItems, setNavItems] = useState(allNavItems);

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    if (!token) {
      setNavItems(allNavItems.filter((item) => item.value !== 'admin-panel'));
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="mx-auto flex h-[64px] w-full max-w-[1024px] items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-6 max-h-[64px]">
          <button
            className="max-w-[120px]"
            onClick={() => {
              router.push('/news');
            }}
          >
            <LogoImage />
          </button>
          <NavMenu tabs={navItems} />
        </div>
        <ProfileButton />
      </div>
    </header>
  );
};
