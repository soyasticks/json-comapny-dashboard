function Metrics({ metrics }) {
  return (
    <div className="section">
      <h2>Key Metrics</h2>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Metrics;