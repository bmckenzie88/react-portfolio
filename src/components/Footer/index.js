import React from "react";
import "./style.css"

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="text-center">©Bryce McKenzie</h3>
      <h1 className="text-center">
        <a href="https://github.com/bmckenzie88" target="_blank" rel="noreferrer">
        <i className="bi bi-github"></i>
        </a>
         |
         <a href="mailto:brycelmckenzie@gmail.com" target="_blank" rel="noreferrer">
         <i class="bi bi-envelope-at-fill"></i>
         </a> 
         |
         <a href="https://www.linkedin.com/in/bryce-lopez-mckenzie-a6047086/" target="_blank" rel="noreferrer">
         <i class="bi bi-linkedin"></i>
         </a>
      </h1>
    </div>
  );
}
