import GeneralInformation from '@/components/home/GeneralInformation';

export default function EditorialLayout({ children }) {
  return (
    <div className='max-w-screen-xl mx-auto px-2 flex relative'>
      <div className='flex-1'>{children}</div>
      <div className='hidden md:block'>
        <GeneralInformation />
      </div>
    </div>
  );
}
