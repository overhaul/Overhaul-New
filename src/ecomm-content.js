import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const ecommSlides = [
    {
        title: 'This will be the first title',
        link: '',
        gatsbyImageData: {
            // fluid: {
            //     aspectRatio: 1.7793594306049823,
            //     base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVQoz2Pgcjb8z+1iBMYwNjYxbBhdHQgzkGMgNoNgfAZ0DegK8LGxWcaAzRXkuhrFy7jCipCrMLyM7gpkSR5X4g2Cu5BQWMEMxeVqdD4DMd7D5VJsLmcgJ9zwRQwDrkRLagKHyeM1EFvSQdaMLQgAvWJJQTGzEEUAAAAASUVORK5CYII=",
            //     sizes: "(max-width: 2000px) 100vw, 2000px",
            //     src: "/static/d2d1b58d481cfd923b4c579afd141e9d/7fb2b/GIP-branding-3.png",
            //     srcSet: "/static/d2d1b58d481cfd923b4c579afd141e9d/9d7e9/GIP-branding-3.png 500w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/30425/GIP-branding-3.png 1000w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/7fb2b/GIP-branding-3.png 2000w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/28d7e/GIP-branding-3.png 2400w",
            //     srcSetWebp: "/static/d2d1b58d481cfd923b4c579afd141e9d/a27e8/GIP-branding-3.webp 500w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/c8563/GIP-branding-3.webp 1000w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/fbe34/GIP-branding-3.webp 2000w,\n/static/d2d1b58d481cfd923b4c579afd141e9d/7acea/GIP-branding-3.webp 2400w",
            //     srcWebp: "/static/d2d1b58d481cfd923b4c579afd141e9d/fbe34/GIP-branding"
            // }  
            src: '../src/images/hero-corporate.jpg',
            alt: 'temporary Alt tag',
        },
        image: {
          src: (<StaticImage src='../src/images/hero-corporate.jpg' alt='Erik before a haircut' layout='fullWidth' placehodeler='blurred'/>),
          alt: 'temporary Alt tag',
        }
    }
]

export const whatwedo = [
    {
        icon: 'star',
        title: 'Development',
        paragraph: '<p>Our full-stack development team delivers maintainable products with a premium on code quality and user experience. On the back end, we build and integrate the technologies best suited to your project, so your way of doing business is well-supported.</p>'
    },
    {
        icon: 'fire',
        title: 'User Experience Design',
        paragraph: '<p>At the heart of every project is design. We create a visual language that reflects who you are as a company and apply it to the pieces that make up your user’s journey. Good design shows an understanding of the user and their goals, front to back.</p>'
    },
    {
        icon: 'sand',
        title: 'Branding',
        paragraph: '<p>Your brand is at the forefront of every user experience—digital or otherwise. We offer solutions to help your brand embody its promise across every touchpoint, finding ways to ensure you make a meaningful connection with your audience.</p>'
    },
    {
        icon: 'water',
        title: 'Strategy',
        paragraph: '<p>Every project needs a solid plan. We aim to understand the current landscape of your business, where you’re headed, and anything that might be getting in your way. From there we can work together to plan a perfect solution.</p>'
    },
    {
        icon: 'wind',
        title: 'Ongoing Optimization & Maintenance',
        paragraph: '<p>Our work together will set you up for launch. However your store isn’t a static tool. As you grow over time, we’ll support you with regular reporting, maintenance updates, and data-informed improvements. We care about the long-term success of our work and want to make sure it’s successful.</p>'
    },

]