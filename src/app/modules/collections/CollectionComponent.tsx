import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ItemCollectionData } from '@/app/commons/types/collections';
import { ItemComponent } from '@/app/modules/collections/ItemComponent';

interface CollectionComponentProps {
  collectionData?: ItemCollectionData;
}

export const CollectionComponent: React.FC<CollectionComponentProps> = ({
  collectionData,
}) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className='flex h-[312px] mt-14'>
      <div className='flex-auto w-[240px] pr-10'>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col'>
            <span className='text-2xl line-clamp-2'>
              {collectionData?.title}
            </span>
            <span className='text-xs text-default-400 line-clamp-2'>
              {collectionData?.subtitle}
            </span>
          </div>
          <div className='flex flex-row gap-x-9'>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <FontAwesomeIcon
                className={clsx(
                  swiperRef.current?.allowSlidePrev
                    ? 'text-default-400'
                    : 'text-default-100',
                )}
                icon={faChevronLeft}
              />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <FontAwesomeIcon
                className={clsx(
                  swiperRef.current?.allowSlideNext
                    ? 'text-default-400'
                    : 'text-default-100',
                )}
                icon={faChevronRight}
              />
            </button>
          </div>
        </div>
      </div>

      <div className='flex-auto w-[720px] h-full'>
        <Swiper
          slidesPerView={4}
          loop={false}
          autoplay={true}
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {collectionData?.list.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <ItemComponent item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
