import React from "react";

export default function Resume() {
  return (
    <div className="d-flex flex-column justify-items-top">
      <div className="card skills-list">
        <h1>Skills and Proficiencies</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML / CSS</li>
          <li className="list-group-item">JavaScript / jQuery</li>
          <li className="list-group-item">APIs</li>
          <li className="list-group-item">Node</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">MySQL / Sequelize</li>
          <li className="list-group-item">MongoDB / Mongoose</li>
          <li className="list-group-item">Handlebars</li>
          <li className="list-group-item">GraphQL</li>
          <li className="list-group-item">React</li>
        </ul>
      </div>
      <div className="resume-download">
        <a className="download" href={require(`../../assets/Bryce_McKenzie_Resume.pdf`)} download>
        <button className="btn btn-primary" type="button">
          Download my Resume
        </button>
        </a>
      </div>
    </div>
  );
}
