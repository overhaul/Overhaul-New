
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
     <Layout pageTitle="Home Page">
      <p></p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/corporate-services-3.jpg"
      />
      <button onClick={activateLasers}>
        Activate Lasers
      </button>
    </Layout>
  )
}

export default IndexPage

function activateLasers(){
  console.log('Lasers Armed!')
}
