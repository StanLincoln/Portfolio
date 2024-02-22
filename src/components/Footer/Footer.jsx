import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__row">
        <div className="footer__left">
          <NavLink to='/'>
          <a href="">© 2024 Stanislav Izbash</a>
          </NavLink>
        </div>
        <div className="footer__links">
        <nav className="footer__nav">
            <ul>
              <li><NavLink to='/'>
                Home
              </NavLink>
              </li>
              <li><NavLink to='/about'>
                About
              </NavLink>
              </li>
              <li><NavLink to='/projects'>
                Projects
              </NavLink>
              </li>
              <li><NavLink to='/contacts'>
                Contacts
              </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer