function ConfigPage({ data, setData }) {
  const handleChange = (field, value) => {
    setData({
      ...data,
      company: {
        ...data.company,
        [field]: value
      }
    });
  };

  return (
    <div className="card">
      <h2>Edit Configuration</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={data.company.name}
        onChange={(e) =>
          handleChange("name", e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Industry"
        value={data.company.industry}
        onChange={(e) =>
          handleChange("industry", e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Employees"
        value={data.company.employees}
        onChange={(e) =>
          handleChange("employees", e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Revenue"
        value={data.company.revenue}
        onChange={(e) =>
          handleChange("revenue", e.target.value)
        }
      />
    </div>
  );
}

export default ConfigPage;