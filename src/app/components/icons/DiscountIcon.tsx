import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface DiscountIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const DiscountIcon: React.FC<DiscountIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/discount.svg'
      alt='Search'
      width={29}
      height={29}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
