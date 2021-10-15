import React from 'react'
import { Link } from 'gatsby'
import useMousePosition from "../hooks/useMousePosition"

function WorkListItem (props) {
  const { x, y } = useMousePosition()

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
        {props.featuredImage && <img
          src={props.featuredImage.node.sourceUrl}
          alt={props.featuredImage.node.altText}
        />}
      </div>
    </div>
  )
}

export default WorkListItem