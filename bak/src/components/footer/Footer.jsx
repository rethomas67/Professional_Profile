import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "./assets/styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="Social_Links">
        <a
          href="https://github.com/rethomas67"
          rel="noreferrer"
          target="_blank"
          alt="Gothub"
        >
          <FaGithub size={"2rem"} />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-thomas-0349732a0"
          rel="noreferrer"
          target="_blank"
          alt="LinkedIn"
        >
          <FaLinkedin size={"2rem"} />
        </a>
        <a
          href="https://stackexchange.com/users/33137835/richard-thomas"
          rel="noreferrer"
          target="_blank"
          alt="Stack Overflow"
        >
          <FaStackOverflow size={"2rem"} />
        </a>
      </div>
    </>
  );
};

export default Footer;
