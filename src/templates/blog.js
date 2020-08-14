import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import { format } from 'date-fns';

function brDate(date) {
  const postDate = new Date(date)
  return format(postDate, 'dd/MM/yyyy')
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        category
        category_color
        tags
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
        <div className="post-info">
          <h4 className="post-category" 
            style={{color: props.data.markdownRemark.frontmatter.category_color}}>
            {props.data.markdownRemark.frontmatter.category}
          </h4> 
          <h4 className="post-info-divider" style={{paddingTop: `0`}}>-</h4>
          <h4 className="post-date">{brDate(props.data.markdownRemark.frontmatter.date)}</h4>
          <h4 className="post-info-divider" style={{paddingTop: `0`}}>-</h4>
          { props.data.markdownRemark.frontmatter.tags.map(tag => (
            <span className="post-tag">| {tag}</span>
          )) } 
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default Blog