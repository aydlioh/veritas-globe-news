import Logo1 from '@/shared/assets/Logo1.png';
import Image from 'next/image';

export const LogoImage = () => {
  return (
    <Image
      src={Logo1}
      width={148}
      height={48}
      className="rounded-md"
      alt="logo"
      priority
    />
  );
};
