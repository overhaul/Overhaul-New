import React from "react";
import {partners} from '../ecomm-content'

class BlockPartners extends React.Component {
    render() {
        const { title, smallTitle } = this.props
        return (
            <div className="block-partners gsap-fade-in">
                <div className="line"></div>
                <div className='col-xs-12 col-md-4'><h5 className="container">{smallTitle}</h5></div>
                <div className='col-xs-12 col-md-8'>
                    <div className='container title'>{title}</div>
                    <div className="container row">
                        {partners.map((logo, i ) => (
                            <div className="logo" key={i}>
                            { logo.image ? logo.image : 
                                <img 
                                    className=""
                                    src={logo.image.src}
                                    alt={logo.image.alt}
                                />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default BlockPartners