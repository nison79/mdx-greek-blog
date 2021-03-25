import React from 'react'
import { Link , graphql ,useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const PageWrapper = styled.div`
  display:flex;
  padding:3rem;
`

const NewPaperLayout = styled.main`
  box-sizing:border-box;
  
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  border:1px solid black;
  padding:0.5rem;
  margin:0.5rem;
  font-family:'GFS Didot' ,san-serif;
  p{
    
    margin-bottom:1rem;
    font-family:'GFS Didot' ,san-serif;
    grid-column:1/3;
    grid-row:1/2;
  }
  h1{
    font-size:1.5rem;
    font-family:'GFS Didot' ,san-serif;
    grid-column:1/2;
    grid-row:2/3;
  }
  h4 {
    font-weight:regular;
    font-family:'GFS Didot' ,san-serif;
    grid-column:2/4;
    grid-row:2/3;
  }
  .gatsby-image-wrapper {
    grid-column:3/4;
    grid-row:2/3;
  }

`




const NewsPaper = () => {
  const data = useStaticQuery(graphql`
    query {
          allMdx {
            edges {
          node {
            frontmatter {
              author
              title
              slug
              tags
              date(formatString: "Do MMM YYYY")
            excerpt
            image {
              childrenImageSharp {
                gatsbyImageData(layout: FIXED, width: 200)
            }
          }
        }
        id
      }
    }
  }
}

`)

console.log(data);
  return (
    <PageWrapper >
      {data.allMdx.edges.map(post => (
        <NewPaperLayout>
              <h1>{post.node.frontmatter.title}</h1>
              <p>{post.node.frontmatter.date}</p>
              <h4>{post.node.frontmatter.excerpt}</h4>
        </NewPaperLayout>
      ))}

      {/* {data.allMdx.edges.node.frontmatter.image.childrenImageSharp.gatsbyImageData} */}
      
    </PageWrapper>
  )
}

export default NewsPaper
