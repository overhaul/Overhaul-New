import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import PageTitle from '../components/PageTitle'
import BlockList from '../components/BlockList'
import BlockClients from '../components/BlockClients'
import BlockServices from '../components/BlockServices'
import BlockAwards from '../components/BlockAwards'
// import BlockTeam from '../components/BlockTeam'
import BlockApproach from '../components/BlockApproach'
import BlockImageText from '../components/BlockImageText'
import BlockExpertise from '../components/BlockExpertise'
import BlockTestimonials from '../components/BlockTestimonials'

import { awards, awardsLogos, areas, listItems, serviceAbilities, clients, ourApproach, approachImage, aboutImage, testimonials } from '../about-content'

const AboutPage = ({ data }) => {
    const seo = data?.wpPage?.seo || {}
    const haven = <Link to="/work/haven" hrefLang="en" rel="alternate">HAVEN</Link>
    const beljan = <Link to="/work/beljan-development" hrefLang="en" rel="alternate">Beljan Development</Link>
    const epic = <Link to="/work/epic-investment-services" hrefLang="en" rel="alternate">Epic Investment Services</Link>

    return (
        <Layout themeColor="dark" seo={seo}>
            <PageTitle
                title="A dozen years of digital, brand, and marketing projects. Edmonton born and built."
            />
            <BlockImageText
                image={aboutImage}
                imageAlt='The Overhaul Office'
            >
                <p>We are a design agency in Edmonton that helps business redefine the way they connect with their customers. Our services range from creative direction, design & development, to marketing and communications. The aim is simple: deliver original ideas, push the boundaries of technology, and contribute work that matters.</p><p>From the original concept to the finished product, we work with clients large and small to reinforce their core brand value and define their distinct voice in the market. Our aim is to help businesses see design as a competitive advantage; helping brands move beyond conventional marketing activities to deliver messages and ideas that elevate the customer experience.</p>
                <p>Founded in 2006, Overhaul has built a client list that includes {beljan}, Naked & Famous Denim, {haven}, CBC, City of Edmonton, Government of Alberta, {epic} and more.</p>
            </BlockImageText>
            <BlockClients 
                title="Selected Clients"
                clients={clients}
            />
            <BlockList 
                title="Our Values"
                listItems={listItems}
            />
            {/* <BlockTeam 
                title="Meet the Team"
                subTitle="Hired guns don't have all the tools. Big shops move too slow. We meet you in the middle. "
                paragraph="We’re Agile. We’re smaller, but experience tells us that’s a good thing. Our team has decades of experience across multiple disciplines."
                team={team}
            /> */}
            <BlockExpertise
                title="Areas of Expertise"
                areas={areas}
            />
            <BlockServices
                title="Services"
                subTitle="Every business decision is a brand opportunity."
                paragraph="Branding doesn't stop with a visual identity or advertising campaign. Every aspect of your company is an opportunity to make your business better for your customers. With that in mind, we've built a team that lets us contribute wherever we can make the biggest impact. "
                serviceItems={serviceAbilities}
            />
            <BlockApproach
                title="Our Approach"
                image={approachImage}
                alt="Our Team hard at work"
                content={ourApproach}
            />
            <BlockTestimonials
                title="Testimonials"
                content={testimonials}
            />
            <BlockAwards
                title="Awards"
                logos={awardsLogos}
                awards={awards}
            />
        </Layout>
    )
}

export const query = graphql `
  query {
    wpPage(slug: {eq: "about"}) {
      title
      seo {
        canonical
        cornerstone
        focuskw
        fullHead
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        opengraphImage {
            sourceUrl
          }
        readingTime
        title
        twitterDescription
        twitterTitle
        schema {
          raw
        }
      }
    }
  }
  
`

export default AboutPage
