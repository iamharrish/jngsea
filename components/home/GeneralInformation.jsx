const GeneralInformation = () => {
  return (
    <div className='w-max flex flex-col gap-y-4 lg:pl-5 relative'>
      <h1 className='text-2xl font-bold text-nowrap text-[var(--royal-blue)]'>General Information</h1>
      <div className='w-full space-y-2'>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>ISSN:</span> 2010-3743 (Online)
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Abbreviated Title:</span> Int. J. Comput. Comm. Eng.
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Frequency:</span> Quarterly
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>DOI:</span> 10.17706/JNGSEA
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Editor-in-chief:</span> Dr. Maode Ma
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>E-mail:</span> editor.jngsea@rise10steps.com
          </p>
        </div>
      </div>
      <div className='w-0.5 h-full bg-neutral-200 absolute left-0 top-0 rounded-full hidden lg:block' />
    </div>
  );
};

export default GeneralInformation;
