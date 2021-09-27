import * as React from 'react'

class BlogTitle extends React.Component {
    
    render() {
        return (
            <div className="blog-title col-md-4 col-xs-12">
                <h2>{ this.props.title }</h2>
            </div>
          )
      }
}

export default BlogTitle
