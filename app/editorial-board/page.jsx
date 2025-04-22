import Image from 'next/image';

const EditorialBoardPage = () => {
  return (
    <div className='min-h-dvh flex items-start flex-col'>
      <h1 className='text-4xl font-serif'>Editorial Board</h1>
      <div className='w-full flex-1 flex items-center justify-center'>
        <Image src={'/assets/under_construction.svg'} alt='logo' width={100} height={100} className='w-[350px] object-cover' unoptimized priority />
      </div>
    </div>
  );
};

export default EditorialBoardPage;
