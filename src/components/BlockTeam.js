import * as React from 'react'
import Icon from '../components/Icons'

class BlockTeam extends React.Component {

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
        const { title, subTitle, paragraph, team } = this.props
        return (
            <div className="block-team">
                <div className="container row">
                    <div className="col-xs-12 col-md-6 block-team_title">
                        <Icon name="star"/>
                        <h2>{ title }</h2>
                        <button aria-label="open" onClick={this.toggleAccordion} className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}/>
                    </div>
                    <div className={`accordion col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
                        <div className="block-team_subtitle col-md-6 col-xs-12 col-md-offset-6">
                            <h2>{subTitle}</h2>
                            <p>{paragraph}</p>
                        </div>
                        <div className="row">
                            {team.map((member, index) => (
                                <div className="block-team_member col-md-3" key={index}>
                                    <div className="block-team_member-images" style={{ backgroundImage: "url(" + member.backgroundImage.src + ")"}}>
                                        <div className="block-team_member-images-hover">
                                            <img src={member.imageAfter.src} alt={member.imageAfter.alt} className="block-team_member-images-one"/>
                                            <img src={member.imageBefore.src} alt={member.imageBefore.alt} className="block-team_member-images-two"/>
                                        </div>
                                    </div>
                                    <div className="block-team_member-profile">
                                        <h2>{member.name}</h2>
                                        <p className="block-team_member-profile-title">{member.title}</p>
                                        <p>{member.profile}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
          )
      }
}

export default BlockTeam