import * as React from 'react'
import Img from "gatsby-image"

class PageHero extends React.Component {
    render() {
        const {title, subTitle, gatsbyImageData} = this.props
        return (
            <div className="page-hero">
                {gatsbyImageData ? <Img 
                    {...gatsbyImageData}
                    className="page-hero_img"
                    />
                : '' }
                <div className="container page-hero_container">
                    { title ? <h1>{ title }</h1> : ''}
                    { subTitle ? <h2>{ subTitle }</h2> : ''}
                </div>
            </div>
          )
      }
}

export default PageHero
