import * as React from 'react'
import Layout from '../components/Layout'
import TypingSlide from '../components/TypingSlide'
import { whatwedo } from '../ecomm-content'
import Vimeo from '../components/BlockVideo'
import BlockWhatWeDo from '../components/BlockWhatWeDo'
import Marquee from '../components/BlockMarquee'
import BlockCaseStudies from '../components/BlockCaseStudies'
import BlockPartners from '../components/BlockPartners'
import mobileProcess from '../images/mobile-process.png'


const EcommPage = () => {

    const staticSeo = 
        {
        'canonical': "https://overhaulmedia.com/ecommerce-agency",
        "cornerstone": false,
        "focuskw": "Edmonton Digital Agency, Ecommerce Experts",
        "title" : "Edmonton Digital Agency, Ecommerce Experts",
        "metaDesc": "Overhaul Media is an award-winning digital agency and design agency in Edmonton, Alberta. We offer branding, web design, graphic design, digital products, web developer and design studio solutions including Shopify, E-commerce, Restaurant Branding for a diverse set of clients across the globe. Call today.",
        "metaKeywords": "Overhaul, Shopify, Edmonton",
        "metaRobotsNofollow": "follow",
        "metaRobotsNoindex": "index",
        "opengraphAuthor": "",
        "opengraphDescription": "Overhaul Media is an award-winning digital agency and design agency in Edmonton, Alberta. We offer branding, web design, graphic design, digital products, web developer and design studio solutions including Shopify, E-commerce, Restaurant Branding for a diverse set of clients across the globe. Call today.",
        "opengraphImage": {sourceUrl: 'https://cms.overhaulmedia.com/wp-content/uploads/2…/10/OverhaulMediaPhotos20190587-edited-scaled.jpg'},
        "opengraphModifiedTime": "2022-03-22T23:06:57+00:00",
        "opengraphPublishedTime": "",
        "opengraphPublisher": "https://www.facebook.com/overhaulmedia",
        "opengraphSiteName": "Overhaul Media",
        "opengraphTitle":"Overhaul | Branding, digital design and development. Edmonton, Alberta",
        "opengraphType": "article",
        "opengraphUrl": "https://overhaulmedia.com",
        "readingTime": 0,
        }
    
    const titleSlideText = [
        'Your online store is more than just a sales channel,',
        'It’s an expression of your brand,',
        'your products and your relationship with customers.'
    ]

    return(
        <Layout themeColor="dark" seo={staticSeo}>
            <TypingSlide
                height="190"
                text={titleSlideText}
                nextSlide={''}
            />
            <Vimeo 
                autoplay 
                video="780415326" 
                fit="full"
            />
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
                mobileImage={mobileProcess}
            />
            <BlockPartners 
                title="We have a 10+ year track record of creating and optimizing eCommerce sites across multiple industries." 
                smallTitle="Shopify Partners"
            />
            <BlockCaseStudies/>
            <Marquee 
                text="Let's see if we're a fit"
                linkText="Reach_Out"
                link="mailto:business@overhaulmedia.com"
            />
        </Layout>
    )
}

export default EcommPage
