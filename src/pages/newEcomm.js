import * as React from 'react'
import Layout from '../components/Layout'
import TypingSlide from '../components/TypingSlide'
import { whatwedo } from '../ecomm-content'
import Vimeo from '../components/BlockVideo'
import BlockWhatWeDo from '../components/BlockWhatWeDo'
import Marquee from '../components/BlockMarquee'
import BlockCaseStudies from '../components/BlockCaseStudies'
import BlockPartners from '../components/BlockPartners'


const EcommPage = () => {

    const titleSlideText = [
        'Your online store is more than just a sales channel,',
        'It’s an expression of your brand,',
        'your products and your relationship with customers.'
    ]

    return(
        <Layout themeColor="dark" >
            <TypingSlide
                height="190"
                text={titleSlideText}
                nextSlide={''}
            />
            <Vimeo 
                autoplay 
                video="778176258" 
                fit="full"
            />
            {/* <FixedSlides slides={ecommSlides} /> */}
            <BlockWhatWeDo
                smallTitle="What We Do"
                title="Category defining brands with exceptional customer loyalty share one common strategy – a commitment to delivering superior products and services extending across digital channels, providing an unparalleled customer experience that spans every single interaction."
                whatwedo={whatwedo} 
            />
            <Marquee 
                text='Want to Start a Project?'
                linkText="Get_Started"
                link="mailto:info@overhaulmedia.com"
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
                linkText="Reach_Out"
                link="mailto:info@overhaulmedia.com"
            />
        </Layout>
    )
}

export default EcommPage