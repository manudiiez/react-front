import React from 'react'
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-lg">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Botones animados</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/neoneffect">Neon effects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cristaleffect">Efecto cristal</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bganimated">Backgound Animated</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/3d">3D objects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/slider">Slider</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/brand">Brand</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/theme">Theme</NavLink>
                </li>

            </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar