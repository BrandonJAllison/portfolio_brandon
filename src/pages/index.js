import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import hero from '../images/hero.jpg'
import node from '../images/node_logo.png'
import react from '../images/react_logo.png'
import javascript from '../images/js_logo.png'
import html from '../images/html_logo.png'
import css from '../images/css_logo.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img src={hero} className="hero-image"/>
    <div class="hero-text">
    <h1>Brandon Allison</h1>
    <p>Full Stack Developer</p>
    <div> <img src={html} style={{height:'33px',width:'33px'}} /> <img src={css} style={{height:'30px',width:'30px'}} />  <img src={javascript} style={{height:'30px',width:'30px'}} /> <img src={react} style={{height:'30px',width:'30px'}} /> <img src={node} style={{height:'30px',width:'30px'}}/></div>
    <p>Website Coming Soon</p>
    </div>
    


    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


