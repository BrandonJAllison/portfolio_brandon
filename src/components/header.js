import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {FaGithub, FaTwitter, FaEllipsisH} from 'react-icons/fa'
import "./components.css"





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
        maxWidth: "100vw",
        
      }}
    >
      
      <FaEllipsisH className="ellipsis"/>
      <Link ><FaGithub className="github"/></Link>
      <a href="http://www.twitter.com" ><FaTwitter className="twitter"/></a>
      
    
      
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
