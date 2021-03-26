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

import Header from "./header"
import "./layout.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.gatsbyjs.com">Γεώργιος Νίκογλου</a>
        </Footer>
    </>
  )
}

const Footer = styled.footer`
  text-align:center;
  bottom:0;
  right:50;
  a{
    font-family:'GFS Didot' ,sans-serif;
  }
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
