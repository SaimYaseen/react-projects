import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function navbar(props) {
  console.log(props.mode)
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">TextForm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ToDoList">To-DO-List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/PasswordGenrator">Password Genrater</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calculator">Calculator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/WeatherApp">Weather</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

