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
        padding: `1.2rem 1.0875rem`,
      }}
    >
      
      
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
