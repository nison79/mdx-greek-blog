import React from 'react'
import { Link , graphql ,useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const AllContent =styled.div`
  
`

const PageWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:3rem;
  background-color:#f6f7f9;
  
  @media(max-width:1054px) {
    display:flex;
    flex-direction:column;
    
  }
  /* width:960px;
    @media(max-width:960px){
    width:800px;
    @media(max-width:780px)
    width:700px;
    @media(max-width:600px){
    width:500px;
  }  */
`

const NewPaperLayout = styled.main`
  box-sizing:border-box;
  
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  column-gap:1rem;
  background:#eff0f3;
  border:1px solid #ff6e6c;
  padding:0.5rem;
  margin:0.5rem;
  font-family:'GFS Didot' ,san-serif;
  p{
    color:#2a2a2a;
    margin-bottom:1.5rem;
    font-family:'GFS Didot' ,san-serif;
    grid-column:1/3;
    grid-row:1/2;
  }
  h1{
    padding:0rem;
    color:#0d0d0d;
    font-size:1.5rem;
    font-family:'GFS Didot' ,san-serif;
    grid-column:1/2;
    grid-row:2/3;
  }
  h4 {
    color:#2a2a2a;
    font-weight:regular;
    font-family:'GFS Didot' ,san-serif;
    grid-column:2/3;
    grid-row:2/3;
  }
  .gatsby-image-wrapper {
    grid-column:3/4;
    grid-row:2/3;
  }

`

const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
  transition: all 300ms ease-in;

&:hover {
  transform:scale(1.025);
  
}
`

const StyledSpan = styled.span`
  font-size:1.2rem;

`




const NewsPaper = () => {
  const data = useStaticQuery(graphql`
    query {
          allMdx (sort: {fields: frontmatter___date, order: DESC}) {
            edges {
          node {
            frontmatter {
              author
              title
              slug
              tags
              date(formatString: "D MMMM YYYY" , locale:"el_GR")
            excerpt
        }
        id
      }
    }
  }
}
`)

// console.log(data);
  return (
    <AllContent>
      <PageWrapper >
        {data.allMdx.edges.map(post => (
          
            <NewPaperLayout>
              <StyledLink to={`/${post.node.frontmatter.slug}`}>
                  <h1>{post.node.frontmatter.title}</h1><StyledSpan>Διαβάστε...</StyledSpan>
              </StyledLink>
                    <p>{post.node.frontmatter.date}</p>
                  <h4>{post.node.frontmatter.excerpt}</h4>
            </NewPaperLayout>
          
        ))}

        {/* {data.allMdx.edges.node.frontmatter.image.childrenImageSharp.gatsbyImageData} */}
        
      </PageWrapper>
    </AllContent>
  )
}

export default NewsPaper
