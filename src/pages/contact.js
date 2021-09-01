import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ContactPage = () => {
  return (
   <Layout pageTitle="Contact Us">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Corporate flower needs"
        src="../images/corporate-services-1.jpg"
      />
    </Layout>
  )
}

export default ContactPage