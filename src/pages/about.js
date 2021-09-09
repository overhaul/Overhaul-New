import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import WorkIntro from '../components/WorkIntro'

const AboutPage = () => {
    const lists = [{
            title: 'Services',
            items: [
                'Strategy',
                'Branding',
                'Digital',
            ],
        },
        {
            title: 'Credits',
            items: [
                'Name 1',
                'Name 2',
                'Name 3',
            ],
        },
        {
            title: 'Industry',
            items: [
                'Retail',
            ],
        }
    ]

    return (
        <Layout pageTitle="About Us">
            <WorkIntro 
                title="An eye for the finer things in life"
                paragraph="Solamente necesito tomar cereales con leche. El queso está bueno, y también lo están las galletas. Me encanta mojar mis nachos en chocolate. Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca. Mis padres quieren que tenga un hijo. El colegio es útil si te quieres morir.
                Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca. Mis padres quieren que tenga un hijo. El colegio es útil si te quieres morir."
                taxonomies={lists}
                />
        </Layout>
    )
}

export default AboutPage