const VolumesPage = async ({ params }) => {
  const volumeId = (await params).volumeId;
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Volume-{volumeId} Page</h1>
    </div>
  );
};

export default VolumesPage;
