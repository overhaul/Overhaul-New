import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavDesk from '../components/NavDesk'
import NavMob from '../components/NavMob'
import '../styles/styles.scss'

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
    <div>
      <title className="heading">{pageTitle} | {data.site.siteMetadata.title}</title>
      <NavDesk/>
      <NavMob/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
