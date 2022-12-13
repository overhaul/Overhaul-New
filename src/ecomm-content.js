import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const caseStudies = [
    {
        title: 'Nalata Nalata Shopify + WordPress Hybrid',
        link: '/work/nalata-nalata',
        image: (<StaticImage src='../src/images/ecomm/NalataEcomm.png' alt='Nalata nalata case study' layout='fullWidth' placehodeler='blurred'/>),
        
    },
    {
        title: 'HAVEN – Shopify Plus + WordPress',
        link: '/work/haven',
        image: (<StaticImage src='../src/images/ecomm/HavenEcomm.png' alt='Haven Menswear Case study' layout='fullWidth' placehodeler='blurred'/>),
    }
]

export const partners = [
    {
        image: (<StaticImage src='../src/images/clients/logo-haven.png' alt='Haven Menswear' layout='fullWidth' placehodeler='blurred'/>),
    },
    {
        image: (<StaticImage src='../src/images/clients/logo-nalata-nalata.png' alt='Nalata nalata' layout='fullWidth' placehodeler='blurred'/>),
    },
    {
        image: (<StaticImage src='../src/images/clients/tonal-logo-white.png' alt='Haven Menswear Case study' layout='fullWidth' placehodeler='blurred'/>),
    }
]

export const whatwedo = [
    {
        icon: 'star',
        title: 'Development',
        paragraph: 'Our full-stack development team delivers maintainable products with a premium on code quality and user experience. On the back end, we build and integrate the technologies best suited to your project, so your way of doing business is well-supported.'
    },
    {
        icon: 'fire',
        title: 'User Experience Design',
        paragraph: 'At the heart of every project is design. We create a visual language that reflects who you are as a company and apply it to the pieces that make up your user’s journey. Good design shows an understanding of the user and their goals, front to back.'
    },
    {
        icon: 'sand',
        title: 'Branding',
        paragraph: 'Your brand is at the forefront of every user experience—digital or otherwise. We offer solutions to help your brand embody its promise across every touchpoint, finding ways to ensure you make a meaningful connection with your audience.'
    },
    {
        icon: 'water',
        title: 'Strategy',
        paragraph: 'Every project needs a solid plan. We aim to understand the current landscape of your business, where you’re headed, and anything that might be getting in your way. From there we can work together to plan a perfect solution.'
    },
    {
        icon: 'wind',
        title: 'Ongoing Optimization & Maintenance',
        paragraph: 'Our work together will set you up for launch. However your store isn’t a static tool. As you grow over time, we’ll support you with regular reporting, maintenance updates, and data-informed improvements. We care about the long-term success of our work and want to make sure it’s successful.'
    },

]