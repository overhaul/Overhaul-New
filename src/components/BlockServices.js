import * as React from 'react'
import { useContext } from "react";
import Icon from '../components/Icons'
import { MouseContext } from "../context/mouse-context";

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
            <div className="block-services">
                <div className="container row">
                    <div className="col-xs-12 col-md-3 block-services_title">
                        <Icon name="sun"/>
                        <h2>{ title }</h2>
                        <div onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></div>
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
                                    <li key={index}>{serviceItem.title}</li>
                                ))}
                            </ul>
                            <div className="block-services_list_cta col-md-8 col-xs-12 col-md-offset-4 col-xs-offset-0">
                                <p>Have a specific need? 
                                    <a href={'mailto:' + 'info@overhaulmedia.com'} 
                                       target="_blank" 
                                       rel="noreferrer"
                                       onMouseEnter={() => cursorChangeHandler("hovered")}
                                       onMouseLeave={() => cursorChangeHandler("")}>
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