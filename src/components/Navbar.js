import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/lucky-logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Lucky Ginger" style={{flex:1, height: '88px', width: 'auto'}} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Menu
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
