import * as React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'

const AboutPage = () => {
    return (
        <Layout>
         <PageHero image='../images/corporate-services-3.jpg' title='This is the Title' subTitle="This will be the Subtitle"/>
        </Layout>
    )
}

export default AboutPage