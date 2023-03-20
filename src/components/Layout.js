import React, { useEffect, useState} from 'react'
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
import IdleScreen from './IdleScreen'

gsap.registerPlugin(ScrollTrigger);

function Layout({children, themeColor, pageTitle, seo, startNavWhite = false}) {

  if (!seo) seo = {}

  useEffect(() => {

    const q = gsap.utils.toArray(".gsap-fade-in");
    const qSpin = gsap.utils.toArray(".gsap-spin-in");
    const gsapAnimations = []

    if (!window.ScrollTriggerInstance) {
      window.ScrollTriggerInstance = ScrollTrigger
    }

    for(let i = 0; i < q.length; i++) {
      const gsapAnimation = gsap.fromTo(q[i], {
        opacity: 0.1,
        y: 100,
      },{
        scrollTrigger: {
          trigger: q[i],
          start: 'top bottom',
          end: '+=500',
          scrub: false,
        },
        opacity: 1,
        y: 0,
        duration: 1
      });

      gsapAnimations.push(gsapAnimation)
    }

    for(let i = 0; i < qSpin.length; i++) {
      const gsapRotateSpin = gsap.fromTo(qSpin[i], {
        rotate: '0',
        opacity: 1,
      },{
        scrollTrigger: {
          trigger: qSpin[i],
          start: 'top bottom',
          scrub: 1,
        },
        rotate: '640',
        opacity: 1
        // duration: 1
      });

      gsapAnimations.push(gsapRotateSpin)
    }
    
    setIsVisible(true)

    return () => {
      window.ScrollTriggerInstance.clearScrollMemory()
      while (gsapAnimations.length) {
        gsapAnimations.pop().kill()
      }
    }
  }, []);

  //Transition Stuff
  const [isVisible, setIsVisible] = useState(false)
  const [isBelowFold, setIsBelowFold] = useState(false)

  // Seo Contact Address
  const contactAddress = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Overhaul Media",
    "logo": "https://cms.overhaulmedia.com/wp-content/uploads/2021/10/OverhaulMediaPhotos20190587-edited-scaled.jpg",
    "image": "https://overhaulmedia.com/static/a3e675482218cc51a435ab6447bedc90/8fc3b/OverhaulOffice.jpg",
    "description": "We are a design agency in Edmonton that helps businesses redefine the way they connect with their customers. Our services range from creative direction, design & development, to marketing and communications. The aim is simple: deliver original ideas, push the boundaries of technology, and contribute work that matters.",
    "url": "https://overhaulmedia.com/",
    "priceRange": "$", 
    "telephone": "+1 780 758 8642",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7347 104 Street NW",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "postalCode": "T6E 4B9",
      "addressCountry": "CA"
    } ,
    "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.5106139",
    "longitude": "-113.497065"
    },
      "sameAs": [
        "https://www.instagram.com/overhaulmedia/",
        "https://ca.linkedin.com/company/overhaul-media"
      ] 
    }

  useEffect(() => {
    let windowHeight = window.innerHeight
    let wasBelow = false
    function handleResize() {
      windowHeight = window.innerHeight
    }

    function handleScroll (e) {
      const checkBelowFold = windowHeight < window.scrollY
      if (checkBelowFold && !wasBelow) {
        setIsBelowFold(true)
        wasBelow = true
      } else if (!checkBelowFold && wasBelow) {
        setIsBelowFold(false)
        wasBelow = false
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return (
    <div className={`layout ${themeColor}`}>
      <Helmet>
      <html lang='en'/>
        <link rel="icon" type="image/x-icon" href={favicon()}/>
        <script type="application/ld+json">
          {JSON.stringify(contactAddress)}
        </script>

        {seo.title ? <title>{seo.title}</title> : ''}

        {seo.canonical ? <link rel="canonical" href={seo.canonical} /> : <link rel="canonical" href={seo.opengraphUrl}/> }
        {seo.metaDesc ? <meta name="description" content={seo.metaDesc.replace(/<[^>]+>|\n|\r|\\n|\\r/g, '')} /> : ''}
        {seo.metaKeywords ? <meta name="keywords" content={seo.metaKeywords} /> : ''}
        {seo.metaRobotsNofollow ? <meta name="robots" content={seo.metaRobotsNofollow} /> : ''}

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
        <IdleScreen/>
        <header className={!isBelowFold && startNavWhite ? 'dark' : ''}>
          <NavDesk />
          <NavMob />
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
