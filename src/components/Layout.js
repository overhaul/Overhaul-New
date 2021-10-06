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

function Layout({children, themeColor}) {

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
        <link rel="icon" type="image/x-icon" href={favicon()}/>
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
