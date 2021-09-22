import * as React from 'react'
import Icon from '../components/Icons'

class BlockExpertise extends React.Component {

  constructor() {
        super()
        this.state = {
          accordionIsOpen: false
        }
        this.toggleAccordion = this.toggleAccordion.bind(this)
        }

    toggleAccordion() {

        this.setState( 
            function(prevState){
                return{
                  accordionIsOpen: !prevState.accordionIsOpen
                }
            }
         )
    }
    render() {
        const { title, areas } = this.props
        return (
            <div className="block-expertise">
                <div className="container row">
                    <div className="col-xs-12 col-md-3 block-approach_title">
                        <Icon name="sand"/>
                        <h2>{ title }</h2>
                        <div onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></div>
                    </div>
                    <div className={`block-expertise_content accordion col-md-9 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        {areas.map((area, client, index) => (
                            <div key={index}>
                                <h2 className="col-xs-12 col-md-3">{area.title}</h2>
                                 { area.paragraph ? <p className="col-md-9" dangerouslySetInnerHTML={{ __html:area.paragraph}}></p> : ''}
                                 <ul className="col-xs-12 col-md-9 offset-md-3">
                                    {client.map((client, index) => (
                                        <li key={index}>{client.title}
                                        <img className="block-expertise_content-image" 
                                             src={client.image.src} 
                                             alt={client.image.alt}/>
                                        </li>
                                    ))}
                                 </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BlockExpertise