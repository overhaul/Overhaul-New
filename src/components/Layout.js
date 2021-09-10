import * as React from 'react'
import '../styles/layout.scss'
import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

  return (
    <div>
      <header>
        <NavDesk/>
        <NavMob/>
      </header>
      <main>
        {children}
      </main>
      <Footer
        address="7347 104 Street NW Edmonton, AB T6E 4B9"
        phone="780 758 8642"
        email="hello@overhaulmedia.com"
        />
    </div>
  )
}

export default Layout
