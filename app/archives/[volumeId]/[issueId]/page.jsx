const IssuesPage = async ({ params }) => {
  const issueId = (await params).issueId;
  return (
    <div>
      <h1 className='text-2xl'>Issue-{issueId} Page</h1>
    </div>
  );
};

export default IssuesPage;
