import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface NotificationIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/notification.svg'
      alt='Search'
      width={24}
      height={24}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
