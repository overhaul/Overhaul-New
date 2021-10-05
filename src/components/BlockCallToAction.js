import * as React from 'react'

class BlockCallToAction extends React.Component {
    
    render() {

        const { title, cta, link } = this.props
        return (
            <div className="container row gsap-fade-in">
                <div className="block-cta col-md-6 col-xs-12">
                    <h1>{ title }</h1>
                    <a href={link}><h1>{cta}</h1></a>
                </div>
            </div>
          )
      }
}

export default BlockCallToAction
