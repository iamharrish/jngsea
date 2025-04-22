import Image from 'next/image';

const ArticleCard = ({ image, title, des, CTA }) => {
  return (
    <div className='h-full flex flex-col gap-2'>
      <div className='w-full h-[200px]'>
        <Image src={image} alt={title} width={100} height={100} className='w-full h-full object-cover' unoptimized lazyBoundary='400px' />
      </div>
      <div className='w-full h-full flex flex-col items-start justify-between gap-2'>
        <h1 className='text-base font-bold line-clamp-2'>{title}</h1>
        <p className='text-sm text-neutral-600 line-clamp-3'>{des}</p>
        <button className='border px-6 py-1 border-neutral-700 text-sm cursor-pointer'>{CTA}</button>
      </div>
    </div>
  );
};

export default ArticleCard;
