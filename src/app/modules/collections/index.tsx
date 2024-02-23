import { useEffect, useState } from 'react';

import { IsBreakpoint } from '@/app/commons/helpers';
import { ItemCollectionData } from '@/app/commons/types/collections';
import { ItemComponent } from '@/app/modules/collections/ItemComponent';
import { getCollections } from '@/app/services/collections';

import { CollectionComponent } from './CollectionComponent';

export default function Collections() {
  const [hotDealItems, setHotDealItems] = useState<ItemCollectionData>();
  const [listCollections, setListCollections] =
    useState<ItemCollectionData[]>();
  const isDesktop = IsBreakpoint();

  useEffect(() => {
    getCollections()
      .then((value) => {
        console.log(value.data);
        const dataRaw = value.data.items;
        if (Array.isArray(dataRaw)) {
          setHotDealItems(value.hotDeals);
          setListCollections(value.collections);
        } else {
          console.error('Invalid data format:', dataRaw);
        }
      })
      .catch((error) => {
        console.error('Error fetching banners:', error);
      });
  }, []);

  return (
    <section className=''>
      {isDesktop ? buildDesktopHotDeal() : buildMobileHotDeal()}
      {isDesktop ? buildDesktopCollections() : buildMobileCollections()}
    </section>
  );

  function buildMobileHotDeal() {
    return (
      <div className='flex flex-col mt-12 px-5'>
        <span className='text-lg font-semibold'>{hotDealItems?.title}</span>
        <span className='text-xs text-default-400 mt-2'>
          {hotDealItems?.subtitle}
        </span>
        <div className='grid grid-cols-2 gap-x-2 gap-y-6 mt-5'>
          {hotDealItems?.list?.map((item, i) => {
            return <ItemComponent item={item} key={i} />;
          })}
        </div>
      </div>
    );
  }

  function buildDesktopHotDeal() {
    return <CollectionComponent collectionData={hotDealItems} />;
  }

  function buildMobileCollections() {
    return (
      <>
        {listCollections?.map((e, i) => {
          return (
            <div className='flex flex-col mt-12 px-5' key={i}>
              <span className='text-lg font-semibold'>{e?.title}</span>
              <span className='text-xs text-default-400 mt-2'>
                {e?.subtitle}
              </span>
              <div className='grid grid-cols-2 gap-x-2 gap-y-6 mt-5'>
                {e.list?.map((item, j) => {
                  return <ItemComponent item={item} key={j} />;
                })}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function buildDesktopCollections() {
    return (
      <>
        {listCollections?.map((e, i) => {
          return <CollectionComponent collectionData={e} key={i} />;
        })}
      </>
    );
  }
}
