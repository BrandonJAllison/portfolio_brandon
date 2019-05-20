import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `black`,
    }}
  >
  
    <div
      style={{
        maxWidth: 960,
      }}
    >
      <p style={{color: "white", padding: ".5rem"}}>About | Projects | Contact</p>
      
    </div>
    
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
