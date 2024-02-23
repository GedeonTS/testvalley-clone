import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ReturnIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const ReturnIcon: React.FC<ReturnIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/return.svg'
      alt='Search'
      width={10}
      height={10}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
