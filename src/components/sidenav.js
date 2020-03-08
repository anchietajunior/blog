import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SideNav = () => {
  return (
    <>
      <nav className="sidenav-mobile">
        <Link to="/">Anchieta Jr.</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <nav className="sidenav">
        <Link className="sidenav-title" to="/">
          Anchieta Jr.
        </Link>
        <hr className="sidenav-divider" />
        <ul className="sidenav-list">
          <li><Link className="sidenav-item" to="/">Home</Link></li>
          <li><Link className="sidenav-item" to="/contact">Contato</Link></li>
        </ul>
        <hr className="sidenav-divider" />
        <ul className="sidenav-social">
          <li><a href="https://www.linkedin.com/in/anchietajunior/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://github.com/anchietajunior" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </nav>
    </>
  )
}

export default SideNav