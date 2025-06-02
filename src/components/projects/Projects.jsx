import { useState } from "react";
import projects from "./assets/scripts/projects.js";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  /*handle state for project animation*/
  const [hoverId, setHoverId] = useState(null);
  /*open the deployed app in a new tab*/
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="Projects_Container">
        <div className="Project_Item">
          {/*iterate through the projects and id them with a key*/}
          {projects.map((project) => (
            <>
              <div key={project.id} className="Project_Content">
                <div className="Project_Description">
                  {/*Project Name*/}
                  <div className="Project_Detail ">{project.title}</div>
                  {/*link to my github project*/}
                  <a
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                    alt="Github"
                  >
                    <FaGithub size={"1.3rem"} className="Project_Detail" />
                  </a>
                </div>
                {/*the project image*/}
                {/*toggle between a static and animated image on hover
                    identified by the state of the hoverId-src*/}
                {/*activate deactivate the animation mouseenter/leave*/}
                {/*set the transition of zooming in and out ease slow fast slow speed-style*/}
                <img
                  className="Project_Image"
                  src={
                    project.id === hoverId
                      ? project.animated_image
                      : project.image
                  }
                  onClick={() => handleClick(project.deployed)}
                  onMouseEnter={() => setHoverId(project.id)}
                  onMouseLeave={() => setHoverId(null)}
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      project.id === hoverId ? "scale(1.1)" : "scale(1.0)",
                  }}
                />
                <div className="Project_Description Project_Type">
                  {project.type}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
