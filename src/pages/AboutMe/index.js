import React from "react";
import "./style.css";
import portfoliopic from "../../assets/portfoliopic.jpeg";

export default function AboutMe() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="text-center"><strong>Bryce McKenzie</strong></h2>
      <img
        src={portfoliopic}
        className="img-responsive align-center"
        id="portfolio-pic"
        alt="profile"
      ></img>
      <h3>Full-Stack Web Developer</h3>
      <p className="summary">I am a Spokane-based full-stack web developer with a passion for creating well designed, readily accessible, and easy to use applications. I'm a student at heart, constantly looking to keep pace with the best practices and newest resources in the industry, while my experience as a professional educator has me eager to share what I know with those around me. In my free time, I enjoy getting outside to rock climb or ski.</p>
    </div>
  );
}
