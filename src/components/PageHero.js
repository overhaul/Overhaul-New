import * as React from 'react'
import Img from "gatsby-image"
import useWindowDimensions from '../hooks/useWindowDimensions'

// class PageHero extends React.Component {
//     render() {
//         const {title, subTitle, gatsbyImageData} = this.props
//         const { height } = useWindowDimensions();
//         return (
//             <div className="page-hero" style={{ height : height }}>
//                 {gatsbyImageData && (gatsbyImageData.fluid || gatsbyImageData.fixed) ? <Img
//                     {...gatsbyImageData}
//                     className="page-hero_img"
//                     />
//                 : <div className="gatsby-image-wrapper"><img {...gatsbyImageData} /></div> }
//                 <div className="container page-hero_container">
//                     { title ? <h1>{ title }</h1> : ''}
//                     { subTitle ? <h2>{ subTitle }</h2> : ''}
//                 </div>
//             </div>
//           )
//       }
// }

// export default PageHero

const PageHero = ({ title, subTitle, gatsbyImageData }) => {
    // const { title, subTitle, gatsbyImageData } = this.props
    const { height } = useWindowDimensions();

    return (
        <div className="page-hero" style={{ height : height }}>
            {gatsbyImageData && (gatsbyImageData.fluid || gatsbyImageData.fixed) ? <Img
                {...gatsbyImageData}
                className="page-hero_img"
                />
            : <div className="gatsby-image-wrapper"><img {...gatsbyImageData} /></div> }
            <div className="container page-hero_container">
                { title ? <h1>{ title }</h1> : ''}
                { subTitle ? <h2>{ subTitle }</h2> : ''}
            </div>
        </div>
    );
}

export default PageHero
