import * as React from 'react'
import WorkCard from './WorkCard'

class BlockRelatedWork extends React.Component {
    render() {
        return (
            <div className="block-related">
                <div className="container">
                    <h1>Related Projects</h1>
                </div>
                <div className="container row">
                    { this.props.cards.slice(0,2).map((post) => {
                        return (
                           <WorkCard
                                key={post.id}
                                url={`/work/${post.slug.toLowerCase()}`}
                                title={post.title}
                                excerpt={post.workSubtitle.subTitle}
                                featuredImage={post.featuredImage}
                                gatsbyImageData={post.featuredImage?.node.localFile.childImageSharp}
                           />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BlockRelatedWork
