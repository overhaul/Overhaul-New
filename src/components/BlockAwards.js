import * as React from 'react'
import Icon from '../components/Icons'
import MarqueeImages from './BlockMarqueeImages'

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
        const { title, awards, logos } = this.props
        return (
            <div className="block-awards gsap-fade-in">
                <div className="container row">
                    <div className="col-xs-12 block-awards_title">
                        <Icon name="water"/>
                        <h2>{ title }</h2>
                        <button aria-label="open" onClick={this.toggleAccordion} className='arrow-button'>
                            <span className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                    <div className={`accordion col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        <div className='block-awards_logos'>
                            <MarqueeImages 
                                images={logos}
                            />
                        </div>
                        <div className="block-awards_table gsap-fade-in">
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