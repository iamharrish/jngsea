import Image from 'next/image';

const FeaturedArticles = () => {
  const { image, title, des, CTA } = {
    image: '/images/article1.png',
    title: 'Improved Fuzzy Connectedness Segmentation Method for Medical Images with Multiple Seeds in MRI',
    des: `Image segmentation is a key step in medical image processing, since it affects the quality of the medical image in the follow-up
steps. However, in the practice of processing MRI images, we find out that the segmentation process involves much difficulty due to
the poorly defined boundaries of medical images, meanwhile, there are usually more than one target area. In this study, an
improved algorithm based on the fuzzy connectedness framework for medical image is developed. The improved algorithm has
involved an adaptive fuzzy connectedness segmentation combined with multiple seeds selection. Also, the algorithm`,
    CTA: 'Read More',
  };
  return (
    <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-10'>
      <h1 className='text-4xl font-serif'>Featured Articles</h1>
      <div className='h-full flex flex-col md:flex-row gap-6'>
        <div className='w-full h-[350px] md:h-[300px]'>
          <Image src={image} alt={title} width={100} height={100} className='w-full h-full object-cover' unoptimized lazyBoundary='400px' />
        </div>
        <div className='w-full h-full flex flex-col items-start justify-between gap-2'>
          <h1 className='text-lg font-bold line-clamp-3'>{title}</h1>
          <p className='text-sm text-neutral-600 line-clamp-10'>{des}</p>
          <button className='mt-6 border px-6 py-1 border-neutral-700 text-sm cursor-pointer'>{CTA}</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
