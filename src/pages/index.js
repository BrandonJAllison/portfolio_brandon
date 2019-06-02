import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa'
import "./index.css"



const IndexPage = () => (
 
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   <Header/>
   <div>
    <div class="hero-text">
    <h1>Brandon Allison</h1>
    <p>Full Stack Developer</p>
    <div className="iconDiv"><FaHtml5 className="html5"/><FaCss3Alt className="css3"/><FaJs className="js"/><FaReact className="react"/><FaNode className="node"/> </div>
    </div>
    
    </div>
    


    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


