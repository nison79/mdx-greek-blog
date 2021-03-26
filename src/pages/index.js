import * as React from "react"

import Layout from "../components/layout"
import NewsPaper from '../components/NewsPaper'
import SEO from "../components/seo"


const IndexPage = () => {

  return (
  <Layout>
    <SEO title="Home" />
    <NewsPaper />
  </Layout>
  )
}


export default IndexPage
