import { Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.mountechcorp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mountech
        </Link>
        . All rights reserved.
        <br />
        Designed and developed by Mountech Corp
      </Typography>
    </footer>
  );
};

export default Footer;
