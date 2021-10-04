import * as React from 'react'
import Layout from '../components/Layout'
import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'

// Temporary content,
// delete once pulling from site
import slides from '../../mock-data/fixed-slides'

const IndexPage = () => {

  const titleSlideText = [
    'You have this long to make an impression.',
    'Stand out,',
    'or sit on the bench.',
    // 'get', 'to', 'zeee', 'choppa',
  ]

  return (
    <Layout themeColor="dark" pageTitle="Home Page">
      <TypingSlide height="200" text={titleSlideText} />
      <FixedSlides slides={slides} />
    </Layout>
  )
}

export default IndexPage
