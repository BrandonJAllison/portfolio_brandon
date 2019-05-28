import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"




const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `black`,
      padding: "15px 0",
      boxShadow: "0 8px 6px -6px #999"
    }}
  >
  
    <div
      style={{
        maxWidth: 960,
        
      }}
    >
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>About</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Projects</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Contact</Link>
      
    
      
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
