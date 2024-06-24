import React from "react";
import disneyAppLogo from "../../assets/disney-logo.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <img src={disneyAppLogo} alt="Logo of Disney+ App" />
        <p>
          &copy; 2024, coded by{" "}
          <a href="https://github.com/mkwiecien00">Marcelo Bueno</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
