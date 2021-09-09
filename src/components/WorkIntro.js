import * as React from 'react'

class WorkIntro extends React.Component {

    constructor() {
        super()
        this.state = {
            toggleIsOpen: false
        }
        this.toggleMore = this.toggleMore.bind(this)
    }

    toggleMore() {

        this.setState( 
            function(prevState){
                return{
                  toggleIsOpen: !prevState.toggleIsOpen
                }
            }
        )
    }

    render() {
        const { title, paragraph, credits } = this.props
        return (
            <div className="container">
                <div className="work-intro row">
                    <div className="work-intro_title col-xs-12 col-md-4">
                        { title ? <h1>{ title }</h1> : ''}
                    </div>
                    <div className="work-intro_paragraph col-xs-12 col-md-6 col-md-offset-2">
                        { paragraph ? <p>{ paragraph }</p> : ''}
                        <div className={`work-intro_read-more-content ${this.state.toggleIsOpen ? 'open' : ''}`}>
                            <p>Dummy for testing</p>
                        </div>
                        <button onClick={this.toggleMore}
                                onKeyDown={this.toggleMore}
                                className="work-intro_read-more-button"
                                >
                             <p>{this.state.toggleIsOpen ? 'Read Less' : 'Read More'}</p>
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkIntro