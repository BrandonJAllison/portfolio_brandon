import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import $ from "jquery"
import "./index.css"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
    <div class="hero-text">
    <h1>Brandon Allison</h1>
    <p>Full Stack Developer</p>
  
    <div className="logos"> <i class="fab fa-html5 fa-2x"></i> <i class="fab fa-css3-alt fa-2x"></i> <i class="fab fa-js fa-2x"> </i>  <i class="fab fa-react fa-2x "></i> <i class="fab fa-node fa-2x"></i></div>
    
    </div>
    


    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


