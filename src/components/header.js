import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledHeader = styled.div`
  display:grid;
  grid-template-columns:200px 1fr 200px;
  align-items:center;
  padding: 0.5rem 1rem; 
`

const Logo = styled.div`
  grid-column:1/2;
  h1{
      font-family:'GFS Didot' , sans-serif;
      font-size:2rem;
    }
`

const MenuItems =styled.div`
  grid-column:3/4;
    h5{
      font-family:'GFS Didot' , sans-serif;
      font-size:1rem;
    }
  justify-items:center;
`
const FlexMenuItems = styled.div`
  display:flex;
  justify-content:space-around;
`

const Header = ({ siteTitle  }) => (
  <StyledHeader>
    <Logo>
        <h1>{siteTitle}</h1>
    </Logo>
    <MenuItems>
      <FlexMenuItems>
        <h5>άρθρα</h5>
        <h5>άρθρα</h5>
        <h5>άρθρα</h5>
      </FlexMenuItems>
    </MenuItems>


  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
