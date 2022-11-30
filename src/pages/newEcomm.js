import * as React from 'react'
import Layout from '../components/Layout'
// import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'
import { ecommSlides, whatwedo } from '../ecomm-content'
import Vimeo from '../components/BlockVideo'
// import BlockCallToAction from '../components/BlockCallToAction'
import BlockWhatWeDo from '../components/BlockWhatWeDo'


const EcommPage = () => {
    // const seo = data?.wpPage?.seo || {}

    const titleSlideText = [
        'Your online store is more than just a single sales channel.',
        'Its thiss,',
        'and this too.',
    ]
    // console.log(ecommSlides)
    return(
        <Layout themeColor="dark" >
            <TypingSlide
                height="150"
                text={titleSlideText}
                nextSlide={''}
            />
            <Vimeo video="773896366"/>
            {/* <FixedSlides slides={ecommSlides} /> */}
            <BlockWhatWeDo
                smallTitle="What we Do"
                title="We work with new and existing brands to create good ideas. We’re experts at helping companies grow and will work with you to produce exceptional results. We’re smaller than some – so we can tailor you and your team’s involvement in the process."
                whatwedo={whatwedo} 
                />
        </Layout>
    )
}

export default EcommPage