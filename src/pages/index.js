import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/otherThing'
import "./index.css"


const IndexPage = () => (

  <Layout>
   
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="hero-text">
    <div className="iconDiv">ENTER</div>
    <Card></Card>
    </div>
  </Layout>
)

export default IndexPage


