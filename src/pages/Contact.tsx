import './Contact.css';

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Interested in working together or have questions about my work? I'm open to freelance projects, full-time roles, and collaborative opportunities. Feel free to reach out—I'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <a href="mailto:mellinwood1023@gmail.com" className="contact-button">Email Me</a>
      <a href="https://www.linkedin.com/in/magdalene-e-855814352" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
      <a href="https://github.com/mellinwood1023" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
    </div>
  );
}

export default Contact;