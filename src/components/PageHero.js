import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

class PageHero extends React.Component {
    render() {
        const {title, image, subTitle} = this.props
        return (
            <div className="page-hero">
                <StaticImage 
                        src={ image } 
                        alt={ title } 
                        className="page-hero_img"
                        layout="fixed"
                />
                {console.log(image)}
                <div className="container">
                    <h1>{ title }</h1>
                    { subTitle ? <h2>{ subTitle }</h2> : ''}
                </div>
            </div>
          )
      }
}

export default PageHero
