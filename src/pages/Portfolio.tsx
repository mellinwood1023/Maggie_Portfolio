import './Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'Project One', link: 'https://example.com/project1', repo: 'https://github.com/user/project1' },
    { title: 'Project Two', link: 'https://example.com/project2', repo: 'https://github.com/user/project2' },
    { title: 'Project Three', link: 'https://example.com/project3', repo: 'https://github.com/user/project3' },
    { title: 'Project Four', link: 'https://example.com/project4', repo: 'https://github.com/user/project4' },
    { title: 'Project Five', link: 'https://example.com/project5', repo: 'https://github.com/user/project5' },
    { title: 'Project Six', link: 'https://example.com/project6', repo: 'https://github.com/user/project6' },
  ];

  return (
    <main>
      <section className="hero">
        <h1>Maggie Ellinwood</h1>
        <h2>Full Stack Developer</h2>
        <p>Welcome to my portfolio! I specialize in building modern, responsive web applications.</p>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>A brief description of the project.</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Deployed Application</a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <p className="text-gray-700 mb-4">
        
          </p>
          <p>Feel free to reach out ❤️</p>
          <a 
            href="mailto:mellinwood1023.com" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            📧 Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;