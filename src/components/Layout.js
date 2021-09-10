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
        address="<p>7347 104 Street NW</p><p>Edmonton, AB T6E 4B9</p>"
        phone="780 758 8642"
        email="hello@overhaulmedia.com"
        />
    </div>
  )
}

export default Layout
