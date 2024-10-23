import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

function WorkCard({title, url, featuredImage, excerpt, gatsbyImageData, categories, onCategoryClick, activeCategory}) {
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
			<div className="work-card-categories">
				{categories?.map((category, index) => (
					<button 
						key={index} 
						onClick={() => onCategoryClick(category)} // Trigger filter update on click
						className={`category-pill ${activeCategory?.title === category ? 'active' : ''}`}
					>
						{category}
					</button>
				))}
			</div>
		  </article>
		</div>
	)
}

export default WorkCard
