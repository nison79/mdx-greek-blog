import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


const AuthorsWrapper = styled.div`
  display:flex;
  width:467px;
  height:50px;
  margin-top:1rem;
  align-items:center;
  justify-content:space-between;
  @media(min-width:1054px){
    display:block;
    width:200px;
    height:150px;
  }
`
const AuthorName = styled.p`
  font-family:'GFS Didot' ,sans-serif;
  font-size:0.8rem;
  color:#4AB5CE;
  margin:0;
`
const AuthorBox =styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:50px;
  place-items:center;
`
const TextTitle = styled.p`
  margin:0;
  margin-bottom:8px;
  padding:0;
  font-size:0.8rem;
  
`


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
              gatsbyImageData(width: 25, layout: FIXED)
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
      <TextTitle>Γράφουν:</TextTitle>
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
