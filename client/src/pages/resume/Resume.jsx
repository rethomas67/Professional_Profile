import React from "react";
import { frontEnd, backEnd } from "./assets/scripts/proficiencies.js";
import "./assets/styles/resume.css";

const Resume = () => {
  return (
    <div className="container">
      <div className="User_Body">
        <div className="title">Resume</div>
      </div>
      <div className="Resume_Container">
        {/*download resume*/}
        <div>
          Download my{" "}
          <a href="/docs/RichardThomas.docx" download>
            resume
          </a>
        </div>
        {/*unordered list loop through the front-end and back-end proficiencies
        and display them in the list*/}
        <div className="Proficiency_Title">Front-End Proficiencies</div>

        <ul>
          {frontEnd.map((item) => (
            <li className="Proficiency_Item" key={item.id}>
              {item.proficiency}
            </li>
          ))}
        </ul>
        <div className="Proficiency_Title">Back-End Proficiencies</div>
        <ul>
          {backEnd.map((item) => (
            <li className="Proficiency_Item" key={item.id}>
              {item.proficiency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
