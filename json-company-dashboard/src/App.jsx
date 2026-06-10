import data from "./company.json";

import CompanyInfo from "./components/CompanyInfo";
import Metrics from "./components/Metrics";
import Departments from "./components/Departments";
import Projects from "./components/Projects";
import SWOT from "./components/SWOT";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Company Analysis Dashboard</h1>

      <CompanyInfo company={data.company} />

      <Metrics metrics={data.metrics} />

      <Departments departments={data.departments} />

      <Projects projects={data.projects} />

      <SWOT swot={data.swot} />
    </div>
  );
}

export default App;