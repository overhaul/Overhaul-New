import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

function WorkCard({title, url, featuredImage, excerpt, gatsbyImageData}) {
	return(
		<div className="col-xs-12 col-md-6 grid_card">
		  <article className="work_card">
		    <Link to={url}>
		      <div className="work_card-featured-image">
		        { gatsbyImageData && <Img {...gatsbyImageData} style={{position: 'absolute'}}/> }
		      </div>
		      <p>{title}</p>
		      <p className="work_card-subtitle">
		        {excerpt}
		      </p>
		    </Link>
		  </article>
		</div>
	)
}

export default WorkCard
