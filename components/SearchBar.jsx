import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='w-max max-w-screen-md xl:max-w-screen-lg flex flex-col items-start gap-5'>
      <h1 className='font-serif text-xl md:text-3xl lg:text-4xl'>Explore the world's knowledge, cultures, and ideas.</h1>
      <div className='w-full flex flex-col justify-start'>
        <div className='w-full flex items-end justify-between'>
          <p className='px-3 py-1 border border-b-0 text-sm'>About us</p>
          <p className='underline text-xs pb-1 text-neutral-700'>Search Journal</p>
        </div>
        <div className='w-full flex items-center justify-between border py-3 px-2 bg-white'>
          <p className='text-neutral-600 text-sm'>Search Journals, books, images, and primary sources</p>
          <Search className='size-5 text-neutral-700' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
