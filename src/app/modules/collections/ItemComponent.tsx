import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ItemCollection } from '@/app/commons/types/collections';

import { ReturnIcon } from '../../components/icons/ReturnIcon';
import { Star } from '../../components/icons/Star';

interface ItemComponentProps {
  item: ItemCollection;
}

export const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  return (
    <a href={item.productUrl}>
      <div className='flex flex-col h-[326px] '>
        <div className='flex flex-col h-full'>
          <div className='block'>
            <div className='block'>
              <Image
                src={item.imageUrl}
                width={174}
                height={174}
                alt={item.title}
                className='mb-3 rounded'
              />
              <div className='absolute lg:top-[148px] lg:left-1'>
                <div
                  className={clsx(
                    'flex flex-row z-1 w-fit border rounded px-[6px] py-0.5 gap-x-1 bg-secondary',
                    item.tagsOnImage[0] ? '' : 'hidden',
                  )}
                >
                  <ReturnIcon />
                  <span className='text-xs text-white'>{item.tagsOnImage}</span>
                </div>
              </div>
            </div>
          </div>
          <span className='text-[15px] line-clamp-2'>{item.title}</span>
        </div>
        <div className='flex flex-col h-[100px] items-start'>
          <div className='flex flex-row items-center'>
            <span
              className={clsx(
                'text-orange text-lg',
                item.discountRate > 0 ? '' : 'hidden',
              )}
            >
              {item.discountRate}%
            </span>
            <span className='text-default-600 text-lg'>{item.finalPrice}</span>
            <span className='text-sm'>{item.symbol}</span>
          </div>
          <span
            className={clsx(
              'flex flex-row w-fit border px-[3px] py-[2px]',
              'text-[10px] bg-[#f7f7f7]',
              item.tagsOnDesc[0] ? '' : 'hidden',
              item.tagsOnDesc.some((e) => e == '단독특가' || e == '깜짝할인')
                ? 'text-error'
                : 'text-default-600',
            )}
          >
            {item.tagsOnDesc[0]}
          </span>
          {/* <div
          className={clsx(
            )}
            >
        </div> */}
          <div className='flex flex-row'>
            <Star />
            <span className='text-xs'>{item.rating}</span>
          </div>
          <div
            className={clsx(
              'flex flex-row w-fit border px-[6px] py-1 gap-x-1',
              item.preface && item.prefaceIconUrl ? '' : 'hidden',
            )}
          >
            <Image
              src={item.prefaceIconUrl}
              width={14}
              height={14}
              alt={item.preface}
            />
            <span className='text-xs'>{item.preface}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
