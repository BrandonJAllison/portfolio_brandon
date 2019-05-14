import React from "react"
import { Link } from "gatsby"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"


 


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Page Under Construction, Please Check Back Soon!</h1>
   
  <div>
   
  </div>

    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query indexQuery {
   
    hero: allImageSharp(filter:{original:{src:{regex:"/golden-gate/"}}}) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
