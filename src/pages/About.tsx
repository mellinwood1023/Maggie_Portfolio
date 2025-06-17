import '../styles/About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={"/images/Myphoto.jpg"} alt="Magdalene Ellinwood" />
      </div>
      <div className="about-text">
        <h1>Me</h1>
        <p>
          Hi, I’m Magdalene — a Junior Software Developer with a passion for building clean, modern web applications.
        </p>
        <p>
          With a background in oral surgery and a love for solving problems, I bring both technical skill and real-world experience to every project I take on.
        </p>
        <p>
          I specialize in React, TypeScript, Express, GraphQL and more. Outside of coding, you’ll find me exploring design, music, or fishing by the lake.
        </p>
      </div>
    </section>
  );
}
