import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {FaGithub, FaTwitter} from 'react-icons/fa'
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
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>About</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Projects</Link>
      <Link style={{color: "white", padding: ".5rem", textDecoration: "none"}}>Contact</Link>
      <Link ><FaGithub className="github"/></Link>
      <Link ><FaTwitter className="twitter"/></Link>
      
    
      
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
