function CompanyInfo({ company }) {
  return (
    <div className="card">
      <h2>Company Information</h2>

      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Industry:</strong> {company.industry}</p>
      <p><strong>Employees:</strong> {company.employees}</p>
      <p><strong>Revenue:</strong> {company.revenue}</p>
    </div>
  );
}

export default CompanyInfo;