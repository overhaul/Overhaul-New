import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/layout.scss'

import '../styles/styles.scss'

import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <title className="heading">{pageTitle} | {data.site.siteMetadata.title}</title>
      <NavDesk/>
      <NavMob/>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
