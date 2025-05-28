import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import img from "./assets/image/navbar.jpg";

const Navbar = () => {
  /* style the navbar with an image*/
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  };
  /*get the current route*/
  const currentPage = useLocation().pathname;
  return (
    <div style={backgroundStyle} className="Navbar_Container">
      {/* a container with the title and the menu links */}
      <p className="Nav_Title">Personal Portal</p>
      <div className="Nav_links">
        {/*check the current page and hilite the active menu item with the color black
          route to the selected page with Link*/}
        <Link
          className={currentPage === "/" ? "nav-link-active" : "nav-link"}
          to="/"
        >
          About Me
        </Link>
        <Link
          className={
            currentPage === "/portfolio" ? "nav-link-active" : "nav-link"
          }
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={
            currentPage === "/contact" ? "nav-link-active" : "nav-link"
          }
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={currentPage === "/resume" ? "nav-link-active" : "nav-link"}
          to="/resume"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
