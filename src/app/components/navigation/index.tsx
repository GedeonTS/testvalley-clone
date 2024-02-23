'use client';

import { CategoryIcon } from '../icons/CategoryIcon';
import { DiscountIcon } from '../icons/DiscountIcon';
import Logo from '../icons/Logo';
import { NotificationIcon } from '../icons/NotificationIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { VerticalBar } from '../icons/VerticalBar';
import { SearchBar } from '../searchbar/SearchBar';

const Navigation = () => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.target.value;
    console.log(value);
  };
  return (
    <div className='flex mx-auto navbar bg-white lg:sticky top-0 z-50 md:border-b'>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
          <div className='flex w-auto items-center gap-5 ml-5 lg:m-0'>
            <Logo />
            <div className='hidden lg:inline-flex gap-1'>
              <CategoryIcon />
              <span className='text-sm text-primary'>카테고리</span>
            </div>

            <div className='hidden lg:inline-flex w-auto h-10 px-3 ml-24 gap-2'>
              <div className='pointer-events-none absolute inset-y-0 flex items-center pl-3'>
                <SearchIcon />
              </div>
              <SearchBar onChanged={handleInputChange} />
            </div>
          </div>
          <div className='hidden lg:inline-flex w-auto items-center gap-2'>
            <DiscountIcon />
            <VerticalBar />
            <span className='text-sm'>로그인 / 회원가입</span>
          </div>

          <div className='inline-flex lg:hidden w-auto items-center'>
            <NotificationIcon
              className='m-3'
              onClick={(e) => console.log('notif')}
            />
            <SearchIcon
              className='m-3'
              onClick={(e) => console.log('search')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
