import * as React from 'react'
import Layout from '../components/Layout'
import Vimeo from '../components/BlockVideo'

const VidTest = ({data}) => {

    return (
        <Layout themeColor="dark">
            <Vimeo autoplay="true" video="773896366"/>
        </Layout>
    )
}

export default VidTest