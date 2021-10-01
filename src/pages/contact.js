import * as React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <Layout themeColor="dark" pageTitle="Contact Us">
            <PageTitle
                title='We do what you can’t.'
                subTitle='You’ve got a great business. We’re here to help make it better. If you’d like to talk about working with us then we’d love to hear your story.'
            />
            <Contact/>
        </Layout>
    )
}

export default ContactPage