import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xjkroypn', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-columns">
        <div className="contact-left">
          <a href="mailto:mellinwood1023@gmail.com" className="contact-button">Email Me</a>
          <a href="https://www.linkedin.com/in/magdalene-e-855814352" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
          <a href="https://github.com/mellinwood1023" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
        </div>

        <h1>Contact Me</h1>
        <p>Interested in working together or have questions? I’m open to freelance projects and collaborations!</p>

        {submitted ? (
          <p className="success-message">🎉 Message sent! </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
