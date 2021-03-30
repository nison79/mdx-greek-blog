import React from 'react'
import { graphql , Link , useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { GatsbyImage ,getImage } from 'gatsby-plugin-image'

const AuthorImageBox =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  grid-column:1/2;

`

const PageWrapper = styled.div`
  display:grid;
  place-items:center;
  grid-template-columns:1fr 100px 1fr;
  p{
    grid-column:3/4;
  }

`


const ΓεώργιοςΝίκογλου = ( { data }) => {
  
const image = getImage(data.mdx.frontmatter.avatar.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <PageWrapper>
        <AuthorImageBox>
          <h3>{data.mdx.frontmatter.author}</h3>
          <GatsbyImage image={image} alt={data.mdx.frontmatter.author} />
        </AuthorImageBox>
        <p>{data.mdx.frontmatter.bio}</p>
      </PageWrapper>
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
              gatsbyImageData( layout:FIXED width:80 formats: WEBP placeholder: BLURRED transformOptions:{fit:COVER})
              }
              }
                tags
                title
                slug
                bio
                date(formatString: "Do MMM YYYY" ,locale :"el_GR")
        }
  } 
}
`

export default ΓεώργιοςΝίκογλου
