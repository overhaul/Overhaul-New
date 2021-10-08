import React from 'react'
import { Link } from 'gatsby'

function WorkCard({title, url, featuredImage, excerpt}) {
	return(
		<div className="col-xs-12 col-md-6 grid_card">
		  <article className="work_card">
		    <Link to={url}>
		      <div className="work_card-featured-image">
		        {featuredImage && <img
		          src={featuredImage.node.sourceUrl}
		          alt={featuredImage.node.altText}
		        />}
		      </div>
		      <p>{title}</p>
		      <p className="work_card-subtitle">
		        {excerpt.replace(/<[^><]+>/g, '')}
		      </p>
		    </Link>
		  </article>
		</div>
	)
}

export default WorkCard
