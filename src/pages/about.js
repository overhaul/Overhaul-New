import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Us">
          <p>Overhaul about Page.</p>
          <StaticImage
            alt="Corporate flower needs"
            src="../images/hero-corporate.jpg"
          />
        </Layout>
    )
}

export default AboutPage