import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


const AuthorsWrapper = styled.div`
  margin-top:2rem;
  display:grid;
  grid-template-columns:2fr 2fr 2fr 2fr ;
  grid-template-rows:auto;
  /* place-self:center; */
  max-width:100%;
  @media(max-width:812px) {
    grid-template-columns:1fr 1fr ;
  }
`
const AuthorName = styled.p`
  font-family:'GFS Didot' ,sans-serif;
  font-size:1rem;
  color:#4AB5CE;
  margin-left:2rem;
  
`
const AuthorBox =styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  padding:1rem;
  
`
// const TextTitle = styled.p`
//   margin:0;
//   margin-bottom:8px;
//   padding:0;
//   font-size:0.8rem;
  
// `


const Authors = () => {
  const data = useStaticQuery(graphql`
    query  {
      allMdx(sort: {fields: frontmatter___title}) {
        edges {
        node {
        frontmatter {
          author
          slug
          avatar {
            childImageSharp {
              gatsbyImageData(width: 50, layout: FIXED)
            }
          }
        }
      }
    }
  }
}
`)
// console.log(data);


  return (
    <AuthorsWrapper>
      {data.allMdx.edges.map( res => (
        <AuthorBox key = {res.node.frontmatter.slug}>
          <GatsbyImage image = {res.node.frontmatter.avatar.childImageSharp.gatsbyImageData}
          alt = {res.node.frontmatter.author}></GatsbyImage>
          <Link to={`/${res.node.frontmatter.author}`}>
            <AuthorName>{res.node.frontmatter.author}</AuthorName>
          </Link>
        </AuthorBox>
      ))}
    </AuthorsWrapper>
  )
}

export default Authors
