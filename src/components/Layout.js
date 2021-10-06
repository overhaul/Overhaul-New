import React, {useRef, useEffect, useContext, useState} from 'react'
import { Helmet } from "react-helmet"

import { MouseContext } from "../context/mouse-context"
import MouseContextProvider from "../context/mouse-context";
import Cursor from '../components/Cursor'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../styles/layout.scss'
import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'
import Footer from '../components/Footer'
import favicon from '../helpers/faviconSelector'

gsap.registerPlugin(ScrollTrigger);

function Layout({children, themeColor, pageTitle, seo}) {

  if (!seo) seo = {}

  const el = useRef();
  useEffect(() => {
    const q = gsap.utils.toArray(".gsap-fade-in");
    for(let i = 0; i < q.length; i++) {
      gsap.fromTo(q[i], {
        opacity: 0,
      },{
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
    return () => {
      ScrollTrigger.kill()
    }
  }, []);

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={themeColor} ref={el}>
      <Helmet>
        <link
          href="https://overhaul20.wpengine.com/wp-includes/css/dist/block-library/style.min.css"
          rel="stylesheet"
          type="text/css"
        />
<<<<<<< HEAD
        <link rel="icon" type="image/x-icon" href={favicon()}/>
=======

        {seo.title ? <title>{seo.title}</title> : ''}

        {seo.canonical ? <link rel="canonical" href={seo.canonical} /> : ''}
        {seo.metaDesc ? <meta name="description" content={seo.metaDesc} /> : ''}
        {seo.metaKeywords ? <meta name="keywords" content={seo.metaKeywords} /> : ''}
        {seo.metaRobotsNofollow ? <meta name="robots" content={seo.metaRobotsNofollow} /> : ''}
        {seo.metaRobotsNoindex ? <meta name="robots" content={seo.metaRobotsNoindex} /> : ''}

        <meta property="og:locale" content="en_US" />
        {seo.opengraphType ? <meta name="og:type" content={seo.opengraphType} /> : ''}
        {seo.opengraphTitle ? <meta name="og:title" content={seo.opengraphTitle} /> : ''}
        {seo.opengraphAuthor ? <meta name="og:author" content={seo.opengraphAuthor} /> : ''}
        {seo.opengraphDescription ? <meta name="og:description" content={seo.opengraphDescription} /> : ''}
        {seo.opengraphUrl ? <meta name="og:url" content={seo.opengraphUrl} /> : ''}
        {seo.opengraphSiteName ? <meta name="og:site_name" content={seo.opengraphSiteName} /> : ''}
        {seo.opengraphImage?.sourceUrl ? <meta property="og:image" content={seo.opengraphImage.sourceUrl} /> : ''}

        <meta name="twitter:site" content="@overhaulmedia" />
        <meta name="twitter:creator" content="@overhaulmedia" />
        {seo.twitterTitle ? <meta name="twitter:title" content={seo.twitterTitle} /> : ''}
        {seo.twitterDescription ? <meta name="twitter:description" content={seo.twitterDescription} /> : ''}
        {seo.twitterImage?.sourceUrl ? <meta name="twitter:image" content={seo.twitterImage.sourceUrl} /> : ''}
        {seo.twitterImage?.sourceUrl ? <meta name="twitter:card" content="summary_large_image" /> : ''}

        {seo.schema?.raw ? <script type='application/ld+json'>{seo.schema.raw}</script> : '' }
>>>>>>> 5b1e5ccc89ee548e4a431507f8fe061a04c7e528
      </Helmet>
      <MouseContextProvider>
        <header>
          <NavDesk/>
          <NavMob/>
        </header>
        <Cursor/>
        <main>
          {children}
        </main>
        <Footer
          address="<p>7347 104 Street NW</p><p>Edmonton, AB T6E 4B9</p>"
          phone="780 758 8642"
          email="hello@overhaulmedia.com"
        />
      </MouseContextProvider>
    </div>
  )
}

export default Layout
