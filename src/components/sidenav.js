import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SideNav = () => {
  return (
    <>
      <nav className="sidenav-mobile">
        <Link to="/">anchietajunior.com</Link>
        <ul>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <nav className="sidenav">
        <Link className="sidenav-title" to="/">
          anchietajunior.com
        </Link>
        <hr className="sidenav-divider" />
        <ul className="sidenav-list">
          <li><Link className="sidenav-item" to="/">Home</Link></li>
          <li><Link className="sidenav-item" to="/contact">Contato</Link></li>
        </ul>
        <hr className="sidenav-divider" />
        <ul className="sidenav-social">
          <li><a href="https://www.linkedin.com/in/anchietajunior/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://github.com/anchietajunior" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </nav>
    </>
  )
}

export default SideNav