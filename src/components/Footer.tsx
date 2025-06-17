import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} Magdalene Ellinwood, Junior Software Developer.</p>
      </div>

      <div className="footer-center">
        <p>
          <a href="https://github.com/mellinwood1023" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/magdalene-e-855814352" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>

      <div className="footer-contact">
        <a href="mailto:mellinwood1023@gmail.com" className="footer-button">💌 Let's Chat</a>
      </div>
    </footer>
  );
}

export default Footer;
