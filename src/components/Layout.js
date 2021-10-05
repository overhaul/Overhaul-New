import React, {useRef, useEffect, useContext} from 'react'
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
