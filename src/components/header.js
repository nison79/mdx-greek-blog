import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display:grid;
  grid-template-columns:200px 1fr 200px;
  grid-template-rows: 1fr 50px;
  align-items:center;
  padding: 1rem 1rem; 
  margin-bottom: 4rem;
  @media(max-width:960px){
    grid-template-columns:1fr 1fr 1fr;
    place-items:center;
  }
`

const Logo = styled.div`
  grid-column:2/3;
 
  .gatsby-image-wrapper {
    margin: 0 auto;
    
  }
`

const MenuItems =styled.div`
  grid-column:2/3;
  grid-row: 2/3;
    h5{
      font-family:'GFS Didot' , sans-serif;
      font-size:1rem;
    }
  justify-items:center;
`
const FlexMenuItems = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  h5{
    padding:1rem;
  }
`

const Header = ({ siteTitle  }) => (
  <StyledHeader>
    <Logo>
      <Link to='/'>
        <StaticImage
        src = "../images/header.svg"
        alt="οψεις"
        layout='fixed'
        width={500}
        /> 
        </Link>
    </Logo>
    <MenuItems>
      <FlexMenuItems>
        <h5>λογοτεχνία</h5>
        <h5>πολιτική</h5>
        <h5>τεχνολογία</h5>
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
