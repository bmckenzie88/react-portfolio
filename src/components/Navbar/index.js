import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
<nav className="navbar navbar-expand-lg text-size">
  <div className="navbar container-fluid">
    <a className="navbar-brand">Navbar</a>
    <Link className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Link>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/information" className="nav-link">Information</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)}