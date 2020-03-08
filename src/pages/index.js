import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
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
      <h1 className="page-title">Posts</h1>
      { data ? (
        <ul className="posts-list">
          { data.allMarkdownRemark.edges.map((edge) => (
            <li key={edge.node.fields.slug}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
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