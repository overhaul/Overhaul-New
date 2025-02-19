import * as React from 'react'
import { Link } from 'gatsby'

class Contact extends React.Component {

  render() {

  	 return (
  	 	<div className="contact">
	  	 	<div className="contact_content row container">
	  	 		<h2 className="contact_content-title col-md-6 col-xs-12">New Business Inquiries</h2>
	  	 		<div className="contact_content-info col-md-6 col-xs-12">
	  	 			<h2><a href="mailto:business@overhaulmedia.com" target="_blank" rel="noreferrer" hrefLang="en">business@overhaulmedia.com</a></h2>
	  	 		</div>
	  	 	</div>
	  	 	<div className="contact_content row container">
	  	 		<h2 className="contact_content-title col-md-6 col-xs-12">Job Opportunities & Internships</h2>
	  	 		<div className="contact_content-info col-md-6 col-xs-12">
	  	 			<h2><Link to="/careers" hrefLang="en" rel="alternate">Click here</Link> to see what’s available.</h2>
	  	 			<h2><a href="mailto:work@overhaulmedia.com" rel="noreferrer" target="_blank" hrefLang="en">work@overhaulmedia.com</a></h2>
	  	 		</div>
	  	 	</div>
  	 	</div>
  	)
  }
}

export default Contact
