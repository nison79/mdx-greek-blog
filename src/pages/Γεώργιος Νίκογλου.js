import React from 'react'
import { graphql , Link , useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { GatsbyImage ,getImage } from 'gatsby-plugin-image'

const AuthorImageBox =styled.div`
  display:flex;
  align-items:center;
  justify-self:right;
  grid-column:1/2;
  padding:2rem;
  padding-right:8rem;
  @media(max-width:960px) {
    padding:1rem;
    padding-right:1rem;
  }

`

const PageWrapper = styled.div`
  display:grid;
  place-items:center;
  grid-template-columns:1fr 50px 1fr;
  padding:2rem;
  p{
    grid-column:3/4;
    margin-right:8rem;
    @media(max-width:960px) {
      margin-right:1rem;
    
  }
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
