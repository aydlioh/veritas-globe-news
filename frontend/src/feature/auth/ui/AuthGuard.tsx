'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getFromLocalStorage } from '@/shared/lib/localStorage';

const PUBLIC_PATHS = ['/login', '/register', '/auth-select', '/news'];

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = getFromLocalStorage('access-token');

    if (!token && !PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
      router.replace('/news');
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};
