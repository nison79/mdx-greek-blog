/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Header from "./header"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
    <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet"/>   
    </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <Content>{children}</Content>
          
      <Footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.gatsbyjs.com">Γεώργιος Νίκογλου</a>
      </Footer>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display:flex;
  min-height:98vh;
  flex-direction:column;
`

const Content = styled.div`
  flex:1;
`

const Footer = styled.footer`
  text-align:center;
  padding-top:1rem;
  a{
    font-family:'GFS Didot' ,sans-serif;
  }
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
