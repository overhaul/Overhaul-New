import * as React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Vimeo from '../components/BlockVideo'
import BlockExpertise from '../components/BlockExpertise'
import { areas } from '../about-content'

const VidTest = ({data}) => {

    return (
        <Layout themeColor="dark">
            <PageTitle title="This is a Video Test Page" subTitle="Cause we want to use video."/>
            <Vimeo autoplay="true" video="773896366"/>
            <BlockExpertise 
                title="Areas of Expertise"
                areas={areas}
            />
        </Layout>
    )
}

export default VidTest