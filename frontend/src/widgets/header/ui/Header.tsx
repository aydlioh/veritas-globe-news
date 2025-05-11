'use client';

import { NavMenu } from '@/feature/navigation-menu/ui/NavigationMenu';
import { ProfileButton } from '@/feature/profile/ui/ProfileButton';
import { useAppRouter } from '@/shared/lib/navigation';
import { LogoImage } from '@/shared/ui/logo';

const navItems = [
  { value: 'news', label: 'Новости', path: '/news' },
  {
    value: 'admin-panel',
    label: 'Редактор новостей',
    path: '/admin-panel',
  },
];

export const Header = () => {
  const { router } = useAppRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="mx-auto flex h-[64px] w-full max-w-[1024px] items-center justify-between px-4 lg:px-0">
        <div className="flex items-center gap-6 max-h-[64px]">
          <button
            className="max-w-[148px]"
            onClick={() => {
              router.push('/news');
            }}
          >
            <LogoImage />
          </button>
          {/* <h1 className="font-extrabold text-2xl">Veritas Globe</h1> */}
          <NavMenu tabs={navItems} />
        </div>
        <ProfileButton />
      </div>
    </header>
  );
};
