import * as React from 'react'
import Icon from '../components/Icons'

class BlockList extends React.Component {

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
        const { title, listItems } = this.props
        return (
            <div className="block-list">
                <div className="container row">
                    <div className="col-xs-12 col-md-6 block-list_title">
                        <Icon name="moon"/>
                        <h2>{ title }</h2>
                        <div onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></div>
                    </div>
                    <div className={`accordion col-md-6 col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        {listItems.map((listItem, index) => (
                            <h2 key={index}>{listItem.title}</h2>
                        ))}
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockList