import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


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
console.log(data);


  return (
    <div>
    <p>Συγγραφείς</p>
      {data.allMdx.edges.map( res => (
        <div key = {res.node.frontmatter.slug}>
          <div>{res.node.frontmatter.author}</div>
          <GatsbyImage image = {res.node.frontmatter.avatar.childImageSharp.gatsbyImageData}
          alt = {res.node.frontmatter.author}></GatsbyImage>
        </div>
      ))}
    </div>
  )
}

export default Authors
