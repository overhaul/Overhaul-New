import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Icon from '../components/Icons'



// markup
const NotFoundPage = () => {
  return (
    <Layout themeColor="dark" pageTitle="404 Page">
      <div className="error container">
        <div className="error_title">
          <h1>4<span className="error_title-star"><Icon name="sand"/></span>4</h1>
          <h2>Oops! That page is missing.</h2>
          <Link to="/">Return to Homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
