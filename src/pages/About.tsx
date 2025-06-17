import './About.css';
import avatar from './images/Myphoto.jpg'; // Assuming you have an avatar image in the public folder

function About() {
  return (
    <div className="about">
      <img src={avatar} alt="Maggie Ellinwood - Developer Avatar" className="avatar" />
      <h1>About Me</h1>
      <p>Welcome to my portfolio! I am a passionate developer with a love for creating modern, responsive web applications. I specialize in React, TypeScript, and CSS to build sleek and functional designs.</p>
    </div>
  );
}

export default About;