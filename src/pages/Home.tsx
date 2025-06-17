// src/pages/Home.tsx
import '../styles/Home.css'; // Assuming you have a CSS file for Home styles

export default function Home() {
  return (
    <section className="home">
      <header>
        <h1 className="slide-in">
        <div className="glow-wrapper">
            <svg className="gradient-heading" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="55%" stopColor="#2EC4B6" />
                        <stop offset="70%" stopColor="#9DEBDA" />
                        <stop offset="20%" stopColor="#2EC4B6" />
                    </linearGradient>
                </defs>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                    Hello, I’m Maggie
                </text>
            </svg>
        </div>
        </h1>
      </header>
      <div className="paragraph-container">
        {/* <p className="slide-in1">Full Stack Developer</p> */}
        <div className="floating-text">
            <p className="slide-in2">Hello 😊</p>
            </div>
        <p className="slide-in3">
          <div className="p">Browse through my projects and see what I’ve been building.</div>
          </p>
      </div>

    </section>
  );
}
