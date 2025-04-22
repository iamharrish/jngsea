import Image from 'next/image';

const EditorInChief = () => {
  return (
    <div className='w-full px-2 py-10 bg-[var(--royal-yellow)]'>
      <div className='max-w-screen-lg mx-auto flex items-start justify-between gap-10'>
        <div className='w-[50%] relative hidden sm:inline-block'>
          <Image src={'/images/editorInChief.png'} alt='logo' width={100} height={100} className='w-full' unoptimized lazyBoundary='400px' />
          <div className='w-full h-full absolute top-4 left-4 border-r border-b' />
        </div>
        <div className='w-full flex flex-col items-start gap-y-10 text-neutral-700'>
          <h1 className='text-4xl font-serif text-black'>Editor-in-chief</h1>
          <div className='w-[70%] mx-auto relative sm:hidden'>
            <Image src={'/images/editorInChief.png'} alt='logo' width={100} height={100} className='w-full' unoptimized lazyBoundary='400px' />
            <div className='w-full h-full absolute top-4 left-4 border-r border-b' />
          </div>
          <div>
            <p className='pb-8'>
              It is my great honor to be the editor-in-chief of IJCEE, which is a high-quality joumal with potential. Hope we can provide a platform for all scholars to share their
              latest findings, ideas, etc. Hopefully, IJCEE will become a recognized joumal among the scholars in the filed of computer and communication engineering.
            </p>
            <p className='font-bold text-[var(--royal-blue)]'>Dr. Maode Ma</p>
            <p>Professor</p>
            <p>College of Engineering</p>
            <p>University of Edenberg</p>
            <p>Doha, Qatar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorInChief;
