import '../styles/About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={"/images/Myphoto.jpg"} alt="Magdalene Ellinwood" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
        My name is Magdalene Ellinwood, CDA, DAANCE, Medical Technician, Implant Coordinator, Junior Software Developer. I wear alot of hats and have earned many letters after my name, but my true passion and career focus is software development. From teaching myself code to excelling in an intensive full stack bootcamp, I’ve found where I thrive: building thoughtful, elegant digital solutions that make a difference.
        </p>
        <p>
          During the program, I quickly rose to the top of my cohort, mastering tools like React, TypeScript, Express, and GraphQL. I’ve since applied that technical skill to build complex, responsive web applications that are both user-focused and beautifully crafted.
        </p>
        <p>
          My background in general anesthesia and surgical procedures shaped how I code — with precision, clarity, and calm under pressure. My experience in the medical field has taught me how to manage logistics and communicate across teams — a skillset that translates seamlessly to modern dev work.
        </p>
        <p>
          Outside of the terminal, I’m an artist and outdoor enthusiast — I love to paint, explore nature, and go fishing to unwind and reset. My artistic background gives me a strong eye for detail and design, which directly influences how I approach building intuitive, visually appealing user interfaces.
        </p>
      </div>
    </section>
  );
}
