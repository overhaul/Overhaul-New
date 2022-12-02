import * as React from 'react'
import { Link } from 'gatsby'
import { caseStudies } from '../ecomm-content'

class BlockCaseStudies extends React.Component {
    render() {
        return (
            <div className="block-case-studies">
                <div className="container">
                    <h5>Case Studies</h5>
                </div>
                <div className="row">
                    { caseStudies.map((caseStudy, index) => (
                        <div className="col-xs-12 col-md-6 grid_card" key={index}>
                            <article className="work_card">
                              <Link to={caseStudy.link}>
                                <div className="work_card-featured-image">
                                    { caseStudy.image ? caseStudy.image : 
                                    <img 
                                        className=""
                                        src={caseStudy.image.src}
                                        alt={caseStudy.image.alt}
                                    />
                                    }
                                </div>
                                <p>{caseStudy.title}</p>
                                <p className="work_card-subtitle">
                                  {caseStudy.excerpt}
                                </p>
                              </Link>
                            </article>
                          </div>
                        
                    ))}
                </div>
            </div>
        )
    }
}

export default BlockCaseStudies
