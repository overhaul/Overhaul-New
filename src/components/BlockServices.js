import * as React from 'react'
import Icon from '../components/Icons'

class BlockServices extends React.Component {

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
        const { title, subTitle, paragraph, serviceItems } = this.props
        return (
            <div className="block-services gsap-fade-in">
                <div className="container row">
                    <div className="col-xs-12 col-md-3 block-services_title">
                        <Icon name="sun"/>
                        <h2>{ title }</h2>
                        <button aria-label="open" onClick={this.toggleAccordion} className='arrow-button'>
                            <span className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                    <div className={`accordion col-md-9 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        <div className="block-services_subtitle row">
                            <h2 className="col-md-4 col-xs-12">{ subTitle }</h2>
                            <p className="col-md-8 col-xs-12">{ paragraph }</p>
                        </div>
                        <div className="block-services_list row">
                            <h2 className="col-md-4 col-xs-12">Our Core Abilities:</h2>
                            <ul className="col-md-8 col-xs-12">
                                {serviceItems.map((serviceItem, index) => (
                                    <li key={index}>{serviceItem.title ?? serviceItem.link}</li>
                                ))}
                            </ul>
                            <div className="block-services_list_cta col-md-8 col-xs-12 col-md-offset-4 col-xs-offset-0">
                                <p>Have a specific need? &nbsp;
                                    <a href={'mailto:info@overhaulmedia.com'} 
                                       target="_blank" 
                                       rel="noreferrer"
                                       className="cursor-text--Reach_Out"
                                    >
                                    Ask us if we’re a good fit.
                                   </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockServices
