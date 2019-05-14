import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import image from '../images/hero.jpg'




 


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <img src={image} className="hero-image"/>
    <div class="hero-text">
    <h1>Brandon Allison</h1>
    <p>HTML | CSS | JS | React | Node.js</p>
    <p>Website Coming Soon</p>
    </div>


    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


