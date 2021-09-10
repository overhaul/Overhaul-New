import * as React from 'react'
import '../styles/layout.scss'
import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'

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
    </div>
  )
}

export default Layout
