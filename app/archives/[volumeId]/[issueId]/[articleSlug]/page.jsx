import Image from 'next/image';

const ArticlePage = async ({ params }) => {
  const articleSlug = (await params).articleSlug;
  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>{articleSlug}</h1>
      <div className='w-full flex-1 flex items-center justify-center'>
        <Image src={'/assets/under_construction.svg'} alt='logo' width={100} height={100} className='w-[350px] object-cover' unoptimized priority />
      </div>
    </div>
  );
};

export default ArticlePage;
