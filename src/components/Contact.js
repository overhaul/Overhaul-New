import * as React from 'react'
import { Link } from 'gatsby'

class Contact extends React.Component {

  render() {
  	 const {} = this.props
  	 return (
  	 	<div className="contact">
	  	 	<div className="contact_content row container">
	  	 		<h2 className="contact_content-title col-md-6 col-xs-12">Office</h2>
	  	 		<div className="contact_content-info col-md-6 col-xs-12">
	  	 			<h2>780 758 8642</h2>
	  	 			<h2>7347 104 Street NW</h2>
	  	 			<h2>Edmonton, AB T6E 4B9</h2>
	  	 			<a href="mailto:hello@overhaulmedia.com" target="_blank" rel="noreferer"><h2>hello@overhaulmedia.com</h2></a>
	  	 		</div>
	  	 	</div>
	  	 	<div className="contact_content row container">
	  	 		<h2 className="contact_content-title col-md-6 col-xs-12">New Business Inquiries</h2>
	  	 		<div className="contact_content-info col-md-6 col-xs-12">
	  	 			<h2>Mathew Janzen</h2>
	  	 			<h2>780 758 8642</h2>
	  	 			<h2><a href="mailto:business@overhaulmedia.com" target="_blank" rel="noreferer">business@overhaulmedia.com</a></h2>
	  	 		</div>
	  	 	</div>
	  	 	<div className="contact_content row container">
	  	 		<h2 className="contact_content-title col-md-6 col-xs-12">Job Opportunities & Internships</h2>
	  	 		<div className="contact_content-info col-md-6 col-xs-12">
	  	 			<h2><Link to="/careers">Click here</Link> to see what’s available.</h2>
	  	 			<h2><a href="mailto:work@overhaulmedia.com" rel="noreferer" target="_blank">work@overhaulmedia.com</a></h2>
	  	 		</div>
	  	 	</div>
  	 	</div>
  	)
  }
}

export default Contact
