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
      <div className="block-team gsap-fade-in">
        <div className="container row">
          <div className="col-xs-12 col-md-6 block-team_title">
            <Icon name="star"/>
            <h2>{ title }</h2>
            <button aria-label="open" onClick={this.toggleAccordion} className='arrow-button'>
              <span className={`close ${this.state.accordionIsOpen ? 'open' : ''}`}></span>
            </button>
          </div>
          <div className={`accordion col-xs-12 ${this.state.accordionIsOpen ? 'open' : ''}`}>
            <div className="block-team_subtitle col-md-6 col-xs-12 col-md-offset-6">
              <h2>{subTitle}</h2>
              <p>{paragraph}</p>
            </div>
            <div className="col-md-6 col-xs-12 col-md-offset-6">
              <div className="block-team_member-grid">
                {team.map((member, index) => (
                  <div className="block-team_member gsap-fade-in" key={index}>
                    <div className="block-team_member-images">
                      { member.backgroundImage ? member.backgroundImage : ''}
                      <div className="block-team_member-images-hover">
                        { member.imageAfter ? member.imageAfter : <img className="block-team_member-images-one"
                                                                       src={member.imageAfter.src}
                                                                       alt={member.imageAfter.alt}
                        />}
                        { member.imageBefore ? member.imageBefore : <img className="block-team_member-images-two"
                                                                         src={member.imageBefore.src}
                                                                         alt={member.imageBefore.alt}
                        />}
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
      </div>

    )
  }
}

export default BlockTeam