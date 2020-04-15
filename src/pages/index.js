import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import { format } from 'date-fns';

function brDate(date) {
  const postDate = new Date(date)
  return format(postDate, 'dd/MM/yyyy')
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              category
              category_color
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      { data ? (
        <ul className="posts-list">
          { data.allMarkdownRemark.edges.map((edge) => (
            <li key={edge.node.fields.slug}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <div className="post-info">
                <h4 className="post-category" 
                  style={{color: edge.node.frontmatter.category_color}}>
                  {edge.node.frontmatter.category}
                </h4> 
                <h4 className="post-info-divider">-</h4>
                <h4 className="post-date">{brDate(edge.node.frontmatter.date)}</h4>
                <h4 className="post-info-divider">-</h4>
                <div className="post-tags">
                  { edge.node.frontmatter.tags.map(tag => (
                    <span key={tag} className="post-tag">{tag}</span>
                  )) } 
                </div>
              </div>
            </li>
          )) }
        </ul>
      ) : (
        <h2>Nenhum post cadastrado</h2>
      )}
    </Layout>
  )
}

export default IndexPage