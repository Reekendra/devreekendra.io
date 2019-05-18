import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact us</h2>
      <p>
        The best way to reach me is via{" "}
        <a href="https://www.twitter.com/@dev_reekendra" target="_blank">
          @dev_reekendra
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
