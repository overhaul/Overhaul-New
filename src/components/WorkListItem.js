import React from 'react'
import { Link } from 'gatsby'
import useMousePosition from "../hooks/useMousePosition"
import Img from "gatsby-image"

function WorkListItem (props) {
  const { x, y } = useMousePosition()
console.log(props.featuredImage)
  return (
    <div className="work_card-list col-xs-12">
      <article key={props.id}>
        <Link to={`/work/${props.slug.toLowerCase()}`}>
          <p>{props.title}</p>
          <p className="work_card-list-subtitle">{props.workSubtitle.subTitle}</p>
          <p className="work_card-list-date">{props.date}</p>
        </Link>
      </article>
      <div
        className="work_card-list-image"
        style={{
          transform: `translate(${x}px, ${y}px)`
        }}
      >
        {props.featuredImage && 
          <Img
            fluid={{ ...props.featuredImage.node.localFile.childImageSharp.fluid, sizes: '200w' }}
          />}
      </div>
    </div>
  )
}

export default WorkListItem