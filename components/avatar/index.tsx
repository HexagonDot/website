import { cn } from '@/lib/utils';
import Image from 'next/image';
import avatar from './avatar.jpg';

type AvatarProps = {
  className?: string;
};

export const Avatar = ({ className }: AvatarProps) => (
  <Image
    src={avatar}
    alt=""
    width={48}
    height={48}
    className={cn('h-6 w-6 rounded-xl', className)}
    placeholder="blur"
    priority
  />
);
