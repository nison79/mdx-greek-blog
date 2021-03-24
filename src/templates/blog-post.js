import React from 'react'
import Layout from '../components/layout'
import { graphql ,Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr;
  /* max-width:1020px; */
  font-family: 'Poppins';
  @media(min-width:1200px) {
    display:flex;
    justify-content:center;
  }
`

const TitleAuthor = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  /* min-height:100vh; */
  padding:0rem 2rem;
  margin-right:5rem;
  margin-top:2rem;
  margin-bottom:2rem;
  width:20rem;
  box-shadow:
  0 10.1px 3.6px rgba(0, 0, 0, 0.068),
  0 10.4px 10px rgba(0, 0, 0, 0.115),
  0 2.1px 24.1px rgba(0, 0, 0, 0.148),
  0 90px 80px rgba(0, 0, 0, 0.2);
  animation: transform 600ms ease-in-out;

  @keyframes transform {
    from {
      transform:translateX(-500px);
      background-color:white;
    }
    to {
      transform:translateX(0px);
      background-color:black;
    }
  }


  @media(min-width:1200px) {
      width:20rem;
      height:30rem;
      display:block;
      /* flex-direction:column; */
    }
  background-color:black;
    h1 {
    margin-top:1rem;
    font-family: 'Poppins';
    color:white;
    }
    h5 {
      font-family: 'Poppins';
      color:white;
    }
    p{
      font-family: 'Poppins';
      color:white;
      font-size:0.8rem;
    }
`

const Text = styled.div`
  padding:1rem;
  max-width:800px;
`

const LinkStyled = styled(Link)`
  text-decoration:none;
  color:black;
  margin-left:2rem;
`

export const data = graphql`
  query ($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          title
          author
          date(formatString:"Do MMM YYYY")
        }
        rawBody
      }
    }
`

const BlogPost = ( { data }) => {

  return (
    <Layout>
      <PageWrapper>
        <TitleAuthor>
          <h1>{data.mdx.frontmatter.title}</h1>
          <h5>by {data.mdx.frontmatter.author}</h5>
          <p>{data.mdx.frontmatter.date}</p>
        </TitleAuthor>
        <Text>
            <MDXRenderer>{data.mdx.rawBody}</MDXRenderer>
        </Text>
      </PageWrapper>
        <LinkStyled to='/'>&larr; Back to Home</LinkStyled>
    </Layout>
  )
}

export default BlogPost
