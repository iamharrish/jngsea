import EditorInChief from '@/components/home/EditorInChief';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import GeneralInformation from '@/components/home/GeneralInformation';
import Hero from '@/components/home/Hero';
import IndexedBy from '@/components/home/IndexedBy';
import RecentlyPublished from '@/components/home/RecentlyPublished';
import Welcome from '@/components/home/Welcome';

export default function Home() {
  return (
    <div className='space-y-14'>
      <Hero />
      <div className='max-w-screen-lg mx-auto px-2 flex flex-col lg:flex-row gap-10 items-stretch justify-between'>
        <Welcome />
        <GeneralInformation />
      </div>
      <EditorInChief />
      <RecentlyPublished />
      <FeaturedArticles />
      <IndexedBy />
    </div>
  );
}
