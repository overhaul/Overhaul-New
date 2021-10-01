import * as React from 'react'

class BlogParagraph extends React.Component {
    
    render() {
        return (
            <div className="blog-content col-md-8 col-xs-12" dangerouslySetInnerHTML={{ __html:this.props.content}}></div>
          )
      }
}

export default BlogParagraph
