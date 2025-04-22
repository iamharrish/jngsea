import Image from 'next/image';

const IndexedBy = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-10'>
      <h1 className='text-4xl font-serif'>Indexed By</h1>
      <div className='w-full pb-10 flex items-center justify-center'>
        <Image src={'/assets/under_construction.svg'} alt='logo' width={100} height={100} className='w-[350px] object-cover' unoptimized priority />
      </div>
    </div>
  );
};

export default IndexedBy;
