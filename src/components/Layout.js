import React, {useRef, useEffect, useState} from 'react'
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSTransition } from 'react-transition-group'

import '../styles/layout.scss'
import '../styles/styles.scss'

import CursorWrapper from './CursorWrapper'
import NavDesk from './NavDesk'
import NavMob from './NavMob'
import Footer from './Footer'
import favicon from '../helpers/faviconSelector'

gsap.registerPlugin(ScrollTrigger);

function Layout({children, themeColor, pageTitle, seo}) {

  if (!seo) seo = {}

  const el = useRef();
  
  useEffect(() => {
    const q = gsap.utils.toArray(".gsap-fade-in");
    const gsapAnimations = []

    if (!window.ScrollTriggerInstance) {
      window.ScrollTriggerInstance = ScrollTrigger
    }

    for(let i = 0; i < q.length; i++) {
      const gsapAnimation = gsap.fromTo(q[i], {
        opacity: 0,
        y: 100,
      },{
        scrollTrigger: {
          trigger: q[i],
          start: 'top bottom',
          end: '+=500',
          scrub: 0.5,
        },
        opacity: 1,
        y: 0,
        duration: 1
      });

      gsapAnimations.push(gsapAnimation)
    }

    setIsVisible(true)

    return () => {
      while (gsapAnimations.length) {
        gsapAnimations.pop().kill()
      }
    }
  }, []);

  useEffect(() => {
    const q = gsap.utils.toArray(".gsap-spin-in");
    const gsapRotations = []
    for(let i = 0; i < q.length; i++) {
      const gsapRotate = gsap.fromTo(q[i], {
        rotate: '0',
        opacity: 1,
      },{
        scrollTrigger: {
          trigger: q[i],
          start: 'top bottom',
          scrub: 1,
        },
        rotate: '640',
        opacity: 1
        // duration: 1
      });

      gsapRotations.push(gsapRotate)
    }

    setIsVisible(true)

    return () => {
      while (gsapRotations.length) {
        gsapRotations.pop().kill()
      }
    }
  }, []);

  //Transition Stuff

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={themeColor} ref={el}>
      <Helmet>
        <link
          href="https://overhaul20.wpengine.com/wp-includes/css/dist/block-library/style.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" type="image/x-icon" href={favicon()}/>

        {seo.title ? <title>{seo.title}</title> : ''}

        {seo.canonical ? <link rel="canonical" href={seo.canonical} /> : ''}
        {seo.metaDesc ? <meta name="description" content={seo.metaDesc.replace(/<[^>]+>|\n|\r|\\n|\\r/g, '')} /> : ''}
        {seo.metaKeywords ? <meta name="keywords" content={seo.metaKeywords} /> : ''}
        {seo.metaRobotsNofollow ? <meta name="robots" content={seo.metaRobotsNofollow} /> : ''}
        {seo.metaRobotsNoindex ? <meta name="robots" content={seo.metaRobotsNoindex} /> : ''}

        <meta property="og:locale" content="en_US" />
        {seo.opengraphType ? <meta name="og:type" content={seo.opengraphType} /> : ''}
        {seo.opengraphTitle ? <meta name="og:title" content={seo.opengraphTitle} /> : ''}
        {seo.opengraphAuthor ? <meta name="og:author" content={seo.opengraphAuthor} /> : ''}
        {seo.opengraphDescription ? <meta name="og:description" content={seo.opengraphDescription.replace(/<[^>]+>|\n|\r|\\n|\\r/g, '')} /> : ''}
        {seo.opengraphUrl ? <meta name="og:url" content={seo.opengraphUrl} /> : ''}
        {seo.opengraphSiteName ? <meta name="og:site_name" content={seo.opengraphSiteName} /> : ''}
        {seo.opengraphImage?.sourceUrl ? <meta property="og:image" content={seo.opengraphImage.sourceUrl} /> : ''}

        <meta name="twitter:site" content="@overhaulmedia" />
        <meta name="twitter:creator" content="@overhaulmedia" />
        {seo.twitterTitle ? <meta name="twitter:title" content={seo.twitterTitle} /> : ''}
        {seo.twitterDescription ? <meta name="twitter:description" content={seo.twitterDescription.replace(/<[^>]+>|\n|\r|\\n|\\r/g, '')} /> : ''}
        {seo.twitterImage?.sourceUrl ? <meta name="twitter:image" content={seo.twitterImage.sourceUrl} /> : ''}
        {seo.twitterImage?.sourceUrl ? <meta name="twitter:card" content="summary_large_image" /> : ''}

        {seo.schema?.raw ? <script type='application/ld+json'>{seo.schema.raw}</script> : '' }

      </Helmet>
      <CursorWrapper>
        <header>
          <NavDesk />
          <NavMob/>
        </header>
        <CSSTransition in={isVisible} timeout={500} className="page">
          <main>
            {children}
          </main>
        </CSSTransition>
        <Footer
          address="<p>7347 104 Street NW</p><p>Edmonton, AB T6E 4B9</p>"
          phone="780 758 8642"
          email="hello@overhaulmedia.com"
        />
      </CursorWrapper>
    </div>
  )
}
console.log("%c site by Overhaul ©","color: red; font-family: Helvetica; font-size: 20px; padding: 10px 20px; width:100%; background-color: #000;")

export default Layout
