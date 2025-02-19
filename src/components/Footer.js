import * as React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
	render() {
		const { phone, email, address } = this.props
		const year = new Date().getFullYear()
		return (
			<footer className="footer">
					<div className="container row">
						<div className="col-xs-12 col-sm-12 col-md-4  copyright">
							<p>© {year} Overhaul Media</p>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-8 row nav-container">
							<div className="col-md-6 nav">
								<div className="mob-1">
										<div itemProp="address" dangerouslySetInnerHTML={{ __html:address}}/>
								</div>
								<div className="mob-1">
										<!--p><a itemProp="telephone" href={'tel:' + phone} rel="noreferrer" target="_blank" hrefLang="en">{phone}</a></p-->
										<p><a itemProp="email" href={'mailto:' + email} rel="noreferrer" target="_blank" hrefLang="en">{ email }</a></p>
								</div>
							</div>
							<div className="col-md-6 nav">
								<div className="mob-2">
										<Link to="/ecommerce-agency" rel="alternate" hrefLang="en">eCommerce</Link>
										<Link to="/bar-restaurant-branding-edmonton" rel="alternate" hrefLang="en">Bar & Restaurant Branding</Link>
								</div>
								<div className="mob-2">
										<Link to="/careers" rel="alternate" hrefLang="en">Careers</Link>
										<Link to="/about#Services" rel="alternate" hrefLang="en">Services</Link>
								</div>
								<div className="mob-2">
									<a href="https://www.instagram.com/overhaulmedia/?hl=en" target="_blank" rel="noreferrer" hrefLang="en">Instagram</a>
									<a href="https://ca.linkedin.com/company/overhaul-media" target="_blank" rel="noreferrer" hrefLang="en">LinkedIn</a>
								</div>
							</div>
						</div>
					</div>
			</footer>
		)
	}
}

export default Footer
