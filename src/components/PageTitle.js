import * as React from 'react'

class PageTitle extends React.Component {
    
    constructor() {
        super()
    }
    render() {
        return (
            <div className="page-title">
               <h1>{ this.props.title }</h1>
               {this.props.subTitle ? <h2>{ this.props.subTitle }</h2> : ''}
            </div>
          )
      }
}

// function PageTitle(props) {
//     return (
//         <div className="page-title">
//            <h1>{ props.title }</h1>
//            {props.subTitle ? <h2>{ props.subTitle }</h2> : ''}
//         </div>
//     )
// }

export default PageTitle
