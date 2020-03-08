import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className="post">
        <h1 className="post-title">{props.data.markdownRemark.frontmatter.title}</h1>
        <h4 className="post-date">Publicado em: {props.data.markdownRemark.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default Blog