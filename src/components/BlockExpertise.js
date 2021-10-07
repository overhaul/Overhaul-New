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
            <div className="block-expertise gsap-fade-in">
                <div className="container row">
                    <div className="col-xs-12 col-md-3 block-approach_title">
                        <Icon name="sand"/>
                        <h2>{ title }</h2>
                        <button aria-label="open" onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}/>
                    </div>
                    <div className={`accordion col-md-9 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        {areas.map(({ title, paragraph, client, i}) => (
                            <div key={i} className="row block-expertise_content">
                                <h2 className="col-xs-12 col-md-4">{title}</h2>
                                { paragraph ? <p className="col-md-8 col-xs-12" dangerouslySetInnerHTML={{ __html:paragraph}}></p> : ''}
                                <ul className="col-xs-12 col-md-8 col-md-offset-4" >
                                    {client.map((client, j) => (
                                        <li key={j}>{client.title}
                                        <img className="block-expertise_content-image" 
                                             src={client.image.src} 
                                             alt={client.image.alt}
                                             />
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