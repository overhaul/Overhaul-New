import * as React from 'react'
import Icon from '../components/Icons'

class BlockClients extends React.Component {

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
        const { title, clients } = this.props
        return (
            <div className="block-clients gsap-fade-in">
                <div className="container row">
                    <div className="col-xs-12 col-md-6 block-clients_title">
                        <Icon name="fire"/>
                        <h2>{ title }</h2>
                        <button aria-label="open" onClick={this.toggleAccordion} className='arrow-button'>
                            <span className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                    <div className={`block-clients_grid accordion col-md-6 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        {clients.map((client, index) => (
                        <div className="block-clients_image" key={index}>
                            <img src={client.src} alt={client.alt} className="block-clients_img"/>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockClients