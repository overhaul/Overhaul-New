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
        const { title, paragraph, taxonomies } = this.props
        return (
            <div className="work-intro">
                <div className="container row">
                    <div className="work-intro_title col-xs-12 col-md-4">
                        { title ? <h1>{ title }</h1> : ''}
                    </div>
                    <div className="work-intro_paragraph col-xs-12 col-md-6 col-md-offset-2">
                        { paragraph ? <div dangerouslySetInnerHTML={{ __html:paragraph}}></div> : ''}
                        {
                          !taxonomies.length ? '' : (
                            <div className={`work-intro_read-more-content row ${this.state.toggleIsOpen ? 'open' : ''}`}>
                                {taxonomies.map((list, i) => (
                                    <ul key={i} className="work-intro_read-more-list col-xs-6 col-md-5">
                                    <li><strong>{list.title}</strong></li>
                                    {list.items.map((item, j) => <li key={`${i}_${j}`}>{item.text ?? item}</li>)}
                                    </ul>
                                ))}
                            </div>
                          )
                        }
                        {
                          !taxonomies.length ? '' : (
                            <button onClick={this.toggleMore}
                                    onKeyDown={this.toggleMore}
                                    className="work-intro_read-more-button"
                                    >
                                <p>{this.state.toggleIsOpen ? 'Read Less' : 'Read More'}</p>
                            </button>
                          )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkIntro