import React from "react"
import { Link } from 'gatsby' 

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Hello</h1>
        <h2>I am Anchieta, a Ruby and Javascript developer</h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      </main>
    </Layout>
  )
}

export default IndexPage