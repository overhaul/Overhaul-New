import * as React from 'react'
import Layout from '../components/Layout'
// import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'
import { ecommSlides, whatwedo } from '../ecomm-content'
import Vimeo from '../components/BlockVideo'
// import BlockCallToAction from '../components/BlockCallToAction'
import BlockWhatWeDo from '../components/BlockWhatWeDo'
import Marquee from '../components/BlockMarquee'
import BlockCaseStudies from '../components/BlockCaseStudies'
import BlockPartners from '../components/BlockPartners'


const EcommPage = () => {

    const titleSlideText = [
        'Your online store is more than just a single sales channel,',
        'Its this,',
        'and this too.',
    ]

    return(
        <Layout themeColor="dark" >
            <TypingSlide
                height="150"
                text={titleSlideText}
                nextSlide={''}
            />
            <Vimeo 
                autoplay 
                video="773896366" 
                fit="full"
                overlayContent="It’s an expression of your brand, your business, your products and your relationship with customers."
            />
            {/* <FixedSlides slides={ecommSlides} /> */}
            <BlockWhatWeDo
                smallTitle="What we Do"
                title="We work with new and existing brands to create good ideas. We’re experts at helping companies grow and will work with you to produce exceptional results. We’re smaller than some – so we can tailor you and your team’s involvement in the process."
                whatwedo={whatwedo} 
            />
            <Marquee 
                text='Want to Start a Project?'
                linkText="Get_started"
                link="/contact"
            />
            <Vimeo 
                autoplay
                video="657647433" 
                title="Our Process at a Glance"
            />
            <BlockPartners 
                title="We have a 10+ year track record of creating and optimizing eCommerce sites across multiple industries." 
                smallTitle="Shopify Partners"
            />
            <BlockCaseStudies/>
            <Marquee 
                text='Curious about our process or capabilities?'
                linkText="Reach_out"
                link="mailto:info@overhaulmedia.com"
            />
        </Layout>
    )
}

export default EcommPage