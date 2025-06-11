import React from "react";
import "./assets/styles/about.css";
import img from "./assets/images/work_photo.jpg";
import Pages from "../../components/aboutdetails/Pages.jsx";
import paragraphs from "./assets/scripts/about.js";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="User_Body">
          <div className="title">About Me</div>
          <img className="About_Photo" src={img} alt="My Photo" />
          {/*pass in a paragraph prop to the Pages component*/}
          {paragraphs.map((paragraph) => (
            <Pages key={paragraph.id} paragraph={paragraph.data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
