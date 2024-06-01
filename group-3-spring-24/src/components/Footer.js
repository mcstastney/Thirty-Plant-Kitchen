import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="homepage-footer">
        <span className="copyright">
          <i className="fa-solid fa-copyright"></i>
        </span>
        <span className="cooked">Cooked up by </span>
        <a
          href="https://github.com/mcstastney/group-3-fullstack"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </>
  );
}

export default Footer;
