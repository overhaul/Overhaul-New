import * as React from 'react'
import Icon from '../components/Icons'

class BlockAwards extends React.Component {

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
        const { title, awards } = this.props
        return (
            <div className="block-awards">
                <div className="container row">
                    <div className="col-xs-12 block-awards_title">
                        <Icon name="moon"/>
                        <h2>{ title }</h2>
                        <div onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></div>
                    </div>
                    <div className={`accordion col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        <div className="block-awards_table">
                            <div className="block-awards_table-head row">
                                <p className="block-awards_table-title col-xs-6">Award</p>
                                <p className="block-awards_table-title col-xs-1">Year</p>
                                <p className="block-awards_table-title col-xs-5">Project</p>
                            </div>
                            { awards.map((award, index) => (
                                <a href={award.link} className="block-awards_table-award row" key={index}>
                                    <p className="col-xs-9 col-md-6">{award.title}</p>
                                    <p className="col-xs-3 col-md-1 block-awards_table-award-year">{award.year}</p>
                                    <p className="col-xs-9 col-md-4">{award.project}</p>
                                    <p className="block-awards_table-award-link col-xs-3 col-md-1"></p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockAwards