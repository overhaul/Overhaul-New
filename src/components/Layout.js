import * as React from 'react'
import { Helmet } from "react-helmet"

import { useContext } from "react"
import { MouseContext } from "../context/mouse-context"
import MouseContextProvider from "../context/mouse-context";
import Cursor from '../components/Cursor'
import aos from 'aos'

import '../styles/layout.scss'
import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'
import Footer from '../components/Footer'

function Layout({children, themeColor}) {

React.useEffect(() => {
  aos.init({
  });
  aos.refresh();
}, []);

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className={themeColor}>
      <Helmet>
        <link
          href="https://overhaul20.wpengine.com/wp-includes/css/dist/block-library/style.min.css"
          rel="stylesheet"
          type="text/css"
        />
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
