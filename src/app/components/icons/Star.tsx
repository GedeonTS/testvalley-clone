import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface StarProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const Star: React.FC<StarProps> = ({ className, ...rest }) => {
  return (
    <Image
      src='/icons/star.svg'
      alt='Search'
      width={12}
      height={12}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
