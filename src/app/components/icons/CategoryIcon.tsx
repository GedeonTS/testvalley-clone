import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface CategoryIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/category.svg'
      alt='Category'
      width={16}
      height={16}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
