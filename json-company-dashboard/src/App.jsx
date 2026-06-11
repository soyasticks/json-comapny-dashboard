import { useState } from "react";
import "./App.css";

import CompanyInfo from "./components/CompanyInfo";
import Metrics from "./components/Metrics";
import Departments from "./components/Departments";
import Projects from "./components/Projects";
import SWOT from "./components/SWOT";

function App() {
  const [data, setData] = useState({
    company: {
      name: "TechNova Solutions",
      industry: "Software Development",
      employees: 250,
      revenue: "₹12 Crore"
    },

    metrics: [
      {
        title: "Client Satisfaction",
        value: "95%"
      },
      {
        title: "Projects Completed",
        value: "180"
      },
      {
        title: "Retention Rate",
        value: "92%"
      }
    ],

    departments: [
      "Development",
      "AI Research",
      "Cloud Engineering",
      "Cybersecurity"
    ],

    projects: [
      {
        name: "AI Chatbot",
        status: "Completed"
      },
      {
        name: "Cloud Migration",
        status: "In Progress"
      }
    ],

    swot: {
      strengths: [
        "Strong R&D",
        "Experienced Team"
      ],
      weaknesses: [
        "Limited Global Reach"
      ],
      opportunities: [
        "AI Expansion"
      ],
      threats: [
        "Market Competition"
      ]
    }
  });

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
    <div className="container">
      <h1>Company Analysis Dashboard</h1>

      <div className="dashboard-layout">

        <div className="config-card">
          <h2>Configuration Panel</h2>

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

        <div className="preview-card">
          <CompanyInfo company={data.company} />

          <Metrics metrics={data.metrics} />

          <Departments departments={data.departments} />

          <Projects projects={data.projects} />

          <SWOT swot={data.swot} />
        </div>

      </div>
    </div>
  );
}

export default App;
