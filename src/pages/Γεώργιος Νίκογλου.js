import React from 'react'
import { graphql , Link , useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import { GatsbyImage ,getImage } from 'gatsby-plugin-image'


const ΓεώργιοςΝίκογλου = ( { data }) => {
  
const image = getImage(data.mdx.frontmatter.avatar.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <h1>{data.mdx.frontmatter.author}</h1>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.author}  />
    </Layout>
  )
}

export const PageQuery = graphql`
      query {
      mdx(frontmatter: {author: {eq: "Γεώργιος Νίκογλου"}}) {
        frontmatter {
          author
          avatar {
            childImageSharp {
              gatsbyImageData(formats: WEBP)
            }
        }
      tags
      title
      slug
      date(formatString: "Do MMM YYYY" ,locale :"el_GR")
    }
  }
}
`

export default ΓεώργιοςΝίκογλου
