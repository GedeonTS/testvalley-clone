import React, { ChangeEventHandler } from 'react';

interface SearchBarProps {
  onChanged?: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onChanged }) => {
  return (
    <input
      type='text'
      name='search'
      id='search'
      className='block w-[335px] border rounded py-[9px] px-10 sm:text-sm sm:leading-6 focus:border-[#00d094] focus:outline-none'
      placeholder='살까말까 고민된다면 검색해보세요!'
      onChange={onChanged}
    />
  );
};
