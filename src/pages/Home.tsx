// src/pages/Home.tsx
import '../styles/Home.css'; // Assuming you have a CSS file for Home styles

export default function Home() {
  return (
    <section className="home">
      <div className="header">
        <h1 className="slide-in">Hey, I’m Maggie </h1>
      </div>
      <div className="paragraph-container">
        <p className="slide-in2">welcome to my corner of the internet.</p>
        <p className="slide-in3">Browse through my projects and see what I’ve been building.</p>
      </div>

    </section>
  );
}
