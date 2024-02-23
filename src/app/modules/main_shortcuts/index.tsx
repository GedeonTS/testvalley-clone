import Image from 'next/image';
import { useEffect, useState } from 'react';

import { IsBreakpoint } from '@/app/commons/helpers';
import { ShortcutProps } from '@/app/commons/types/shortcuts';

import axios, { AxiosError } from 'axios';

import { MAIN_SHORTCUT_URL } from '../../commons/configs';
import { ShortcutProps } from '../../commons/types/shortcuts';

const handleAxiosError = (
  error: AxiosError<any>,
): { status: number; data: any } => {
  if (error?.response) {
    return { status: error?.response?.status, data: error?.response?.data };
  } else {
    return { status: 500, data: { message: 'Internal Server Error' } };
  }
};

const getMainShortcuts = async (): Promise<{
  status: number;
  data: ShortcutProps[];
}> => {
  try {
    const response = await axios.get(MAIN_SHORTCUT_URL);
    console.log(response.data);
    return { status: response?.status, data: response.data as ShortcutProps[] };
  } catch (error) {
    return handleAxiosError(error as AxiosError<any>);
  }
};


export default function MainShortcuts() {
  const [mainShortcuts, setMainShortcuts] = useState<ShortcutProps[]>([]);
  const isDesktop = IsBreakpoint();

  useEffect(() => {
    getMainShortcuts()
      .then((value) => {
        console.log(value.data);
        const dataRaw = value.data;
        if (Array.isArray(dataRaw)) {
          setMainShortcuts(dataRaw);
        } else {
          console.error('Invalid data format:', dataRaw);
        }
      })
      .catch((error) => {
        console.error('Error fetching banners:', error);
      });
  }, []);

  return (
    <section className='wrapper grid grid-cols-5 lg:grid-cols-10 gap-x-3 gap-y-6 lg:gap-0 px-5 lg:px-0 lg:mt-10 py-4 text-center justify-center'>
      {mainShortcuts.map((item, i) => {
        return (
          <a key={i} className='lg:mx-[18px]' href={item.linkUrl}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={isDesktop ? 62 : 48}
              height={isDesktop ? 62 : 48}
            />
            <span className='text-shortcut mt-2'>{item.title}</span>
          </a>
        );
      })}
    </section>
  );
}
