import '../styles/Resume.css';

export default function Resume() {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">📄 My Resume</h2>
      <p className="resume-description">
        Click below to download my resume and learn more about my background, skills, and experience.
      </p>
      <a
        href="/images/Magdalene_Ellinwood_2025Resume.pdf"
        download
        className="resume-download"
      >
        ⬇️ Download Resume
      </a>
    </section>
  );
}
