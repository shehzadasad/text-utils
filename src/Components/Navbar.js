import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} p-2 sticky-top`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          <img
            src={logo}
            alt="Logo"
            className=" img-fluid"
            width={'30pt'}
            height={'20pt'}
          />
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${props.isActive === '1' ? 'active' : ''}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${props.isActive === '2' ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch d-flex">
            <label
              style={{ marginTop: '-2px' }}
              className={`form-check-label text-${
                props.mode === 'light' ? 'dark' : 'light'
              } fw-bold`}
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Theme:
            </label>
            <input
              style={{ marginTop: '-1px' }}
              className="form-check-input fs-4 ms-2"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
