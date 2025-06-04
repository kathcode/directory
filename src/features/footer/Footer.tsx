const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.mountechcorp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Mountech
        </a>
        . All rights reserved.
        <br />
        Designed and developed by Mountech
      </p>
    </footer>
  );
};

export default Footer;
