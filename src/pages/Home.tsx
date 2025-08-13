// src/pages/Home.tsx
import '../styles/Home.css'; // Assuming you have a CSS file for Home styles

export default function Home() {
  return (
    <section className="home">
      <header>
        <h1 className="slide-in">
  <div className="hero-header">
    <h1 className="hero-title">Maggie Ellinwood</h1>
    <h2 className="hero-subtitle">Problem Solver. Code Writer. Project Builder.</h2>
  </div>
        </h1>
      </header>
      <div className="paragraph-container">
        {/* <p className="slide-in1">Full Stack Developer</p> */}
        <div className="floating-text">
            <p className="slide-in2">✧</p>
            </div>
        <p className="slide-in3">
          <div className="p">Browse through my projects and see what I’ve been building.</div>
          </p>
      </div>

    </section>
  );
}
