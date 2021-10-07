import * as React from 'react'
import Layout from '../components/Layout'
import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'
import BlockCallToAction from '../components/BlockCallToAction'

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
      <TypingSlide height="150" text={titleSlideText} />
      <FixedSlides slides={slides} />
      <BlockCallToAction
      title="Have a specific need? Don't see what you're after?"
      link="/contact"
      cta="Ask us if we're a good fit."
      />
    </Layout>
  )
}

export default IndexPage
