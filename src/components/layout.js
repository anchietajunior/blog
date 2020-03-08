import React from 'react'
import SideNav from './sidenav'

import '../styles/index.scss'
import '../styles/highlight.scss'

const Layout = (props) => {
  return (
    <>
      <SideNav />
      <main className="container">{ props.children }</main>
    </>
  )
}

export default Layout