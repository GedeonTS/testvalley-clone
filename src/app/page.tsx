'use client';

import Banner from '@/app/modules/banner/index';

import Collections from './modules/collections';
import MainShortcuts from './modules/main_shortcuts';

export default function Page() {
  return (
    <main >
      <Banner />
      <div className='flex flex-col bg-white wrapper mx-auto justify-between'>
      <MainShortcuts />
      <Collections />
      <section className='h-96'></section>
      </div>
    </main>
  );
}
