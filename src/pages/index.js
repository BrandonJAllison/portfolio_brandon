import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

import "./index.css"

import Card from '../components/otherThing'



const IndexPage = () => (

  <Layout>
   
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
   
     
    <div class="hero-text">
    
    <div className="iconDiv">ENTER</div>
    <Card></Card>
    </div>
    


    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    
  </Layout>
)

export default IndexPage


