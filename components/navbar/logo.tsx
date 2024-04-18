import { cn } from '@/libs/utils';
import logoPng from '@/public/blog.png';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('relative size-10', className)}>
      <Image src={logoPng} alt='blog-logo' fill sizes='100vw' />
    </div>
  );
};

export default Logo;
