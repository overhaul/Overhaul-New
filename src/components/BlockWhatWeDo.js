import * as React from 'react'
import Accordion from '../components/Accordion';

class BlockWhatWeDo extends React.Component {

    render() {
        const { title, smallTitle, whatwedo } = this.props
        return (
            <div className="block-what-we-do gsap-fade-in">
                <div className="line"></div>
                <div className='col-xs-12 col-md-4'><h5 className="container">{smallTitle}</h5></div>
                <div className='col-xs-12 col-md-8'>
                    <div className='container title'>{title}</div>
                    <div className="container row">
                        {whatwedo.map(({ title, paragraph, icon }, i ) => (
                            <Accordion title={title} paragraph={paragraph} icon={icon} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BlockWhatWeDo