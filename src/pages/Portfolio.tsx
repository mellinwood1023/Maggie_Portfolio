import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'Fred Carberry.net', description: "Professional website with a clean and easy UI for a local realtor in Dracut, MA", link: 'https://fredcarberry.net', repo: 'https://github.com/mellinwood1023/FCarberry_Site'},
    { title: 'Chef Buddy', description: "ChefBuddy is your personal AI-powered kitchen assistant. Chefbuddy will generate recipe recommendations based on ingredients you have in your pantry.", link: 'https://chefbuddy-as26.onrender.com', repo: 'https://github.com/mellinwood1023/ChefBuddy' },
    { title: 'Resume Pilot', description: "Stand out with smarter resumes - powered by AI, built by you", link: 'https://resumepilot-r1lo.onrender.com/', repo: 'https://github.com/mellinwood1023/ResumePilot' },
    { title: 'Word Scramble Game!', description: "A fast-paced, browser-based word game where players try to unscramble shuffled words before time runs out. Built with JavaScript and styled for an engaging, responsive experience, this project highlights dynamic DOM manipulation, timer logic, and clean game state management. Fun, challenging, and a great example of interactive frontend logic.", link: 'https://wordscramblinggame.netlify.app/index.html', repo: 'https://github.com/mellinwood1023/Word_Scramble' },
    { title: 'My Portfolio Repo', description: "Here is a direct link to my repository for this portfolio!", link: 'https://maggieee.netlify.app/', repo: 'https://github.com/mellinwood1023/Maggie_Portfolio' },
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">Open This Project ← </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;