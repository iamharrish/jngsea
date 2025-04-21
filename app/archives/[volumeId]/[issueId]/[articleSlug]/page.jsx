const ArticlePage = async ({ params }) => {
  const articleSlug = (await params).articleSlug;
  return (
    <div>
      <h1 className='text-2xl'>Article - {articleSlug} Page</h1>
    </div>
  );
};

export default ArticlePage;
