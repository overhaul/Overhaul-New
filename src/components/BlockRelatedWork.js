import * as React from 'react'
import WorkCard from './WorkCard'

class BlockRelatedWork extends React.Component {
    render() {
        return (
            <div className="block-related">
                <div className="container row">
                    { this.props.cards.slice(0,2).map((post) => {
                        return (
                           <WorkCard
                                key={post.id}
                                url={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                featuredImage={post.featuredImage}
                           />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BlockRelatedWork
