import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery'; 

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#85144B`,
    }}
  >
  

    <div
      style={{
        maxWidth: 960,
        padding: `1.2rem 1.0875rem`,
      }}
    >
       <div id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
        </div>
      
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
