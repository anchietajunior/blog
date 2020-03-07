import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav>
      <h1>{data.site.siteMetadata.title}</h1>
      
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} to="/">Home</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/blog">Blog</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header