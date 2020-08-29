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
        <h1 className="page-title">Posts</h1>
      { data ? (
        <ul className="posts-list">
          { data.allMarkdownRemark.edges.map((edge) => (
            <li key={edge.node.fields.slug} class="posts-list-post">
              <Link to={`/blog/${edge.node.fields.slug}`}>
                
                <span class="posts-list-post-date">{brDate(edge.node.frontmatter.date)}</span>
                <span class="posts-list-post-category" style={{color: edge.node.frontmatter.category_color}}>
                  {edge.node.frontmatter.category}
                </span>
                <span class="posts-list-post-title">{edge.node.frontmatter.title}</span>
                
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