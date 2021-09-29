import * as React from 'react'

class PageTitle extends React.Component {
    
    render() {
        return (
            <div className="page-title">
                <div className="container">
                   <h1>{ this.props.title }</h1>
                   {this.props.subTitle ? <h2>{ this.props.subTitle }</h2> : ''}
                </div>
            </div>
          )
      }
}

export default PageTitle
