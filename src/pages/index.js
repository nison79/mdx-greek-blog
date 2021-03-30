import * as React from "react"

import Layout from "../components/layout"
import NewsPaper from '../components/NewsPaper'
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'


const IndexPage = () => {

  return (
    
  <Layout>
      <SEO title="Άρθρα για την κοινωνία ,τις τεχνες και τη πολιτική"/>
      <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet"/>   
      </Helmet>
    
    <NewsPaper />
  </Layout>
  )
}


export default IndexPage
