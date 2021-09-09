import * as React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import PageTitle from '../components/PageTitle'
import DualImages from '../components/DualImages'
import images from '../../mock-data/work-content'

const AboutPage = () => {

    return (
        <Layout>
            <PageHero 
                image='https://images.unsplash.com/photo-1631116618155-6074e787a30b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
                title='This is the Title' 
                subTitle="This will be the Subtitle"
            />
            <PageTitle
                title="this is a Title Test"
                subTitle="Subtitle Test too,"
            />
            <DualImages
                images={images}
            />
        </Layout>
    )
}

export default AboutPage