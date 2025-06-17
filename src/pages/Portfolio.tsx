import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'Fred Carberry.net', description: "Professional website with a clean and easy UI for a local realtor in Dracut, MA", link: 'https://fredcarberry.net', repo: 'https://github.com/mellinwood1023/FCarberry_Site'},
    { title: 'Chef Buddy', description: "ChefBuddy is your personal AI-powered kitchen assistant. Chefbuddy will generate recipe recommendations based on ingredients you have in your pantry.", link: 'https://chefbuddy-as26.onrender.com', repo: 'https://github.com/mellinwood1023/ChefBuddy' },
    { title: 'Resume Pilot', description: "Stand out with smarter resumes - powered by AI, built by you", link: 'https://resumepilot-r1lo.onrender.com/', repo: 'https://github.com/mellinwood1023/ResumePilot' },
    { title: 'Project Four', description: "", link: 'https://example.com/project4', repo: 'https://github.com/user/project4' },
    { title: 'Project Five', description: "", link: 'https://example.com/project5', repo: 'https://github.com/user/project5' },
    { title: 'Project Six', description: "", link: 'https://example.com/project6', repo: 'https://github.com/user/project6' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="title-bar">
        <h1>
          <a className='portfolio-name'>
            Magdalene Ellinwood</a>
          </h1>
        <h2>
          <a className="portfolio-subname">
            Full Stack Developer</a>
          </h2>
        </div>
        <p>
          <a className="portfolio-description">
            Welcome to my portfolio! I specialize in building modern, responsive web applications.</a>
          </p>
      </section>

      <section className="featured-projects">
        <div className="description">
        <h2>My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;