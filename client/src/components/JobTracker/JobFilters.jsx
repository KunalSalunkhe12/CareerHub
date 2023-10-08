const JobFilters = () => {
  return (
    <div className="flex gap-2">
      <button className="btn_primary">All</button>
      <button className="btn_primary_outline">Bookmarked</button>
      <button className="btn_primary_outline">Applied</button>
      <button className="btn_primary_outline">Interview</button>
      <button className="btn_primary_outline">Offer</button>
      <button className="btn_primary_outline">Rejected</button>
    </div>
  );
};

export default JobFilters;
