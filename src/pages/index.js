import * as React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Landing from "../components/sections/Landing"
import Footer from "../components/sections/Footer"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout>

      {/* Meta Data */}

      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <meta charSet="utf-8" />
        <meta name="description" content="Hi, we're GoHealthy, a platform dedicated to providing health services through our app ."></meta>
        <title>GoHealthy</title>
        <link rel="apple-touch-icon" href="../images/favicons" />
        <link rel="icon" type="image/x-icon" href="../images/favicons/favicon.svg"></link>
      </Helmet>

      {/* Sections */}
      
      <Navbar/>
      <Landing/>
      <Footer/>

    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
