import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageWrapper =styled.main`
  max-width:1020px;
  font-family:'GFS Didot';
`
const TextInfo =styled.div`
  h1 {
    font-family: 'GFS Didot' , sans-serif;
  }
  h5 {
    font-family: 'GFS Didot' , sans-serif;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      books: allMdx(filter: {frontmatter: {tags: {eq: "Λογοτεχνεία"}}}) {
      edges {
        node {
          frontmatter {
            author
            title
            slug
            tags
            date(formatString: "Do MMM YYYY")
            excerpt
          }
        }
      }
    }
      photography: allMdx(filter: {frontmatter: {tags: {eq: "Photography"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "Do MMM YYYY")
                  excerpt
          }
        }
      }
    }
    }
  `)
  return (
  <Layout>
    <SEO title="Home" />
    {data.books.edges.map(book => (
      <PageWrapper>
        <TextInfo>
          <h1>{book.node.frontmatter.title}</h1>
          <h5>{book.node.frontmatter.author}</h5>
        </TextInfo>
      </PageWrapper>
    ))}
  </Layout>
  )
}


export default IndexPage
