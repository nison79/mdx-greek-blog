import React from 'react'
import Layout from '../components/layout'
import { graphql ,Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const PageWrapper =styled.div`
  display:grid;
  grid-template-columns:1fr;
  /* max-width:1020px; */
  font-family: 'GFS Didot';
  @media(min-width:1200px) {
    display:flex;
    /* align-items:center; */
    justify-content:center;
  }
`

const TitleAuthor = styled.div`
  display: block;
  padding:0rem 2rem;
  margin-right:5rem;
  margin-top:2rem;
  margin-bottom:2rem;
  width:20rem;
  box-shadow:
  /* 0 10.1px 3.6px rgba(0, 0, 0, 0.068), */
  0 10.4px 10px rgba(0, 0, 0, 0.115),
  /* 0 2.1px 24.1px rgba(0, 0, 0, 0.048), */
  0 90px 80px rgba(0, 0, 0, 0.010);
  animation: transform 600ms ease-in-out;

  @keyframes transform {
    from {
      transform:translateY(-1000px);
      
    }
    to {
      transform:translateX(0px);
      
    }
  }


  @media(min-width:1200px) {
      width:20rem;
      height:30rem;
      display:block;
      /* flex-direction:column; */
    }
  background-color: #eff0f3;
    h1 {
    margin-top:1rem;
    font-family: 'GFS Didot';
    color:#0d0d0d;
    }
    h5 {
      font-family: 'GFS Didot';
      color:#0d0d0d;
    }
    p{
      font-family: 'GFS Didot';
      color:#0d0d0d;
      font-size:0.8rem;
    }
`

const Text = styled.div`
  color:#0d0d0d;
  font-size:1.1rem;
  padding:3rem;
  max-width:800px;
  background-color: #eff0f3;; 
  min-height:80vh;
  box-shadow:
  /* 0 10.1px 3.6px rgba(0, 0, 0, 0.068), */
  0 10.4px 10px rgba(0, 0, 0, 0.115),
  0 2.1px 24.1px rgba(0, 0, 0, 0.048),
  0 90px 80px rgba(0, 0, 0, 0.055);

`

const LinkStyled = styled(Link)`
  display:inline-block;
  text-decoration:none;
  color:black;
  margin-top:2rem;
  transition: all 300ms ease;
  &:hover {
    transform:scale(1.2);
  }
`

export const data = graphql`
  query ($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          title
          author
          date(formatString:"Do MMMM YYYY",locale:"el_GR")
        }
        body
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
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Text>
      </PageWrapper>
        <LinkStyled to='/'><StaticImage src="../images/slice1.svg" layout="fixed" width={50}  /></LinkStyled>
    </Layout>
  )
}

export default BlogPost
