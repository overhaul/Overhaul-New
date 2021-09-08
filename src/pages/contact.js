import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Us">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Corporate flower needs"
        src="../images/hero-corporate.jpg"
      />
    </Layout>
    )
}

export default ContactPage