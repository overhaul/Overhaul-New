import * as React from 'react'

class PageHero extends React.Component {
    render() {
        const {title, image, subTitle} = this.props
        return (
            <div className="page-hero">
                <img
                    src={ image } 
                    alt={ title } 
                    className="page-hero_img"
                />
                <div className="container page-hero_container">
                    { title ? <h1>{ title }</h1> : ''}
                    { subTitle ? <h2>{ subTitle }</h2> : ''}
                </div>
            </div>
          )
      }
}

export default PageHero
