function Projects({ projects }) {
  return (
    <div className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.name}</h3>
            <p>Status: {project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;