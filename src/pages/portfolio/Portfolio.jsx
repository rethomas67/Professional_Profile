import React from "react";
import Projects from "../../components/projects/Projects";
import "./assets/styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="User_Body">
        <div className="title">Portfolio</div>
        <Projects />
      </div>
    </div>
  );
};
export default Portfolio;
