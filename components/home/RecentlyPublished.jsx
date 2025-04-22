import ArticleCard from '../ArticleCard';

const RecentlyPublished = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-10'>
      <h1 className='text-4xl font-serif'>Recently Published</h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {[
          {
            image: '/images/article2.png',
            title: 'Bring your work to life with images',
            des: 'Harness the power of visual materials-explore more than 3 million images now on JNGSA.',
            CTA: 'Read More',
          },
          {
            image: '/images/article3.png',
            title: 'A Survey on Pruning Algorithm Based on Optimized Depth Neural Network',
            des: 'Abstract - In recent years, deep neurla network has continuously renewed its best performance in tasks such as comp...',
            CTA: 'Read More',
          },
          {
            image: '/images/article4.png',
            title: 'Application Design to Release Stress',
            des: 'In this research, we design an application to release user’s daily stress, It is said that contemp...',
            CTA: 'Read More',
          },
          {
            image: '/images/article5.png',
            title: 'Improved Dimensionality Reduction of Various Datasets Using',
            des: 'Principal Component Analysis (PCA) is known to be the most widely applied dimensionality reduction approach...',
            CTA: 'Read More',
          },
        ].map((item, index) => (
          <div key={index} className='max-w-[270px]'>
            <ArticleCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPublished;
