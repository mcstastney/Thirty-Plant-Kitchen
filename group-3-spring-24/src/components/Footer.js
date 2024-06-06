import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="homepage-footer" role="footer">
        <span className="copyright">
          <i className="fa-solid fa-copyright"  aria-label="img"></i>
        </span>
        <span className="cooked">Cooked up by </span>
        <a
          rel="noreferrer"
          href="https://github.com/mcstastney/group-3-fullstack"
          target="_blank"
          >
          <i className="fab fa-github" aria-label="github"></i>
          
        </a>
      </footer>
    </>
  );
}

export default Footer;
