import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About me</h2>
      <p>I am a normal person with normal a brain.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
