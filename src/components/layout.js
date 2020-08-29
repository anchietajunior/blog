import React from 'react'
import Menu from './menu'

import '../styles/index.scss'
import '../styles/highlight.scss'

const Layout = (props) => {
  return (
    <>
      <Menu />
      <main className="container">{ props.children }</main>
    </>
  )
}

export default Layout