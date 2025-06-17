function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Maggie Ellinwood. All rights reserved.</p>
      <p>
        Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>.
      </p>
      <p>
        <a href="https://github.com/mellinwood1023" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/magdalene-e-855814352" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;