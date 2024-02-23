import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface SearchIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/search.svg'
      alt='Search'
      width={20}
      height={20}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
