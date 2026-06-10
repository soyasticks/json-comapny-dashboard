function Departments({ departments }) {
  return (
    <div className="section">
      <h2>Departments</h2>

      <div className="department-list">
        {departments.map((dept, index) => (
          <div className="department" key={index}>
            {dept}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;