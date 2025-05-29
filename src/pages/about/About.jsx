import React from "react";
import { FaUser } from "react-icons/fa";
import test from "../../utility/aboutMe.js";

const About = () => {
  const myResult = test;
  console.log(myResult);
  return (
    <>
      <div className="content">
        <FaUser />
        <div>About</div>
      </div>
    </>
  );
};

export default About;
