
import * as React from 'react'
import Layout from '../components/Layout'
import FixedSlides from '../components/FixedSlides'

// Temporary content
import slides from '../../mock-data/fixed-slides'

const IndexPage = () => {
  return (
     <Layout pageTitle="Home Page">
      <FixedSlides slides={slides} />
    </Layout>
  )
}

export default IndexPage
