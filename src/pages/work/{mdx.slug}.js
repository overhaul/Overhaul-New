import React, {useRef, useEffect} from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PageHero from '../../components/PageHero'
import WorkIntro from '../../components/WorkIntro'
import Layout from '../../components/Layout'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkPost = ({ data }) => {
  const el = useRef();

  useEffect(() => {

    const q = gsap.utils.toArray(".gsap-fade-in");
    for(let i = 0; i < q.length; i++) {
      console.log(q[i])
      gsap.fromTo(q[i], {
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: q[i],
          start: 'top bottom',
          end: '+=500',
          scrub: 0.5,
        },
        opacity: 1,
        duration: 1,
      });
    }
  }, []);

  if(!data.mdx?.frontmatter) return ''
  const { title, subtitle, paragraph, lists, hero_image } = data.mdx.frontmatter

  return (
    <Layout pageTitle={title}>
      <PageHero
        title={title}
        subTitle={subtitle}
        image={hero_image.publicURL}
      />
      <WorkIntro
        title={subtitle}
        paragraph={paragraph}
        taxonomies={lists}
      />
      <div ref={el}>
        <MDXRenderer >
          {data.mdx.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query Work($slug: String) {
    mdx(slug: {eq: $slug}, fileAbsolutePath: {regex: "/work/"}) {
      body
      frontmatter {
        title
        subtitle
        subtitle
        paragraph
        lists {
          items
          title
        }
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          publicURL
        }
      }
    }
  }
`

export default WorkPost