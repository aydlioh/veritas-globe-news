'use client';

import { EmailVerificationTimer } from './EmailVerificationTimer';
import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';
import { LogoImage } from '@/shared/ui/logo';

export const EmailVerification = () => {
  const { router } = useAppRouter();

  const handleBack = () => {
    router.push('/auth');
  };

  return (
    <div className="flex flex-col gap-8">
      <LogoImage />
      <div className="flex flex-col gap-[16px] text-center">
        <p className="text-center text-[20px] font-semibold">Проверьте почту</p>
        <p className="font-normal">
          Ссылка для входа отправлена
          <br /> на почту
        </p>
        <EmailVerificationTimer />
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="secondary" onClick={() => handleBack()}>
          Вернуться назад
        </Button>
      </div>
    </div>
  );
};
