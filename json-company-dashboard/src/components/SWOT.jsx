function SWOT({ swot }) {
  return (
    <div className="section">
      <h2>SWOT Analysis</h2>

      <div className="swot-grid">
        <div className="swot-box strength">
          <h3>Strengths</h3>
          {swot.strengths.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="swot-box weakness">
          <h3>Weaknesses</h3>
          {swot.weaknesses.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="swot-box opportunity">
          <h3>Opportunities</h3>
          {swot.opportunities.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="swot-box threat">
          <h3>Threats</h3>
          {swot.threats.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SWOT;