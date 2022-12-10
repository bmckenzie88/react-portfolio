import React, { useState } from "react";
import Project from "../../components/Project";
import suyapic from "../../assets/suyapic.jpeg";
import eventspic from "../../assets/events.png";
import underconstruction from "../../assets/under-construction.png";

export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      title: "Suya",
      description:
        "A basic web application that recommends local restaurants based on user responses to auto-generated questions, suggesting cuisine that the user has not tried before. Built with basic HTML, CSS, JavaScript, and using RESTful APIs.",
      screenshot: suyapic,
      gitlink: "https://github.com/bmckenzie88/suya",
      link: "https://bmckenzie88.github.io/suya/",
    },
    {
      title: "E-vents",
      description:
        "A basic web application that recommends local restaurants based on user responses to auto-generated questions, suggesting cuisine that the user has not tried before. ",
      screenshot: eventspic,
      gitlink: "https://github.com/24rgraham/event-planner-project",
      link: "https://event-planner-bnnr.herokuapp.com/",
    },
    {
      title: "Current Project!",
      description: "Under construction - coming early 2023!",
      screenshot: underconstruction,
      link: "https://event-planner-bnnr.herokuapp.com/",
    },
  ]);
  return (
    <div className="project-container d-flex flex-column align-items-center">
      <ul className="project-list flex-column">
        {projects.map((item, i) => (
          <Project key={i} project={item} />
        ))}
      </ul>
    </div>
  );
}
