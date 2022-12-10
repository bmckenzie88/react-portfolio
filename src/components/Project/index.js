import React, { useState } from "react";
import "./style.css";

export default function Project(props) {
  return (
    <li>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 project-img">
            <img
              id="project-pic"
              src={props.project.screenshot}
              className="img-fluid rounded-start"
              alt="website screenshot"
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{props.project.title}</h2>
              <p className="card-text">{props.project.description}</p>
              <div className="card-text">
                <h2 className="project-git">
                  <a
                    href={props.project.gitlink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </li>
  );
}
