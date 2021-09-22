import * as React from 'react'
import { useContext } from "react"
import { MouseContext } from "../context/mouse-context"
import MouseContextProvider from "../context/mouse-context";
import Cursor from '../components/Cursor'

import '../styles/layout.scss'
import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext)
  return (
    <div>
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
