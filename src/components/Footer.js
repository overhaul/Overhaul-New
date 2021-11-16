import * as React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
    render() {
        const { phone, email, address } = this.props
        return (
            <footer className="footer">
                <div className="container row">
                    <div className="col-xs-12 col-sm-12 col-md-6  copyright">
                       <p>© 2021 Overhaul Media</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6  row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <div itemProp="address" dangerouslySetInnerHTML={{ __html:address}}/>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <p><a itemProp="telephone" href={'tel:' + phone} rel="noreferrer" target="_blank" hrefLang="en">{phone}</a></p>
                            <p><a itemProp="email" href={'mailto:' + email} rel="noreferrer" target="_blank" hrefLang="en">{ email }</a></p>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-2">
                            <Link to="/careers" rel="alternate" hrefLang="en">Careers</Link>
                            <Link to="/about#Services" rel="alternate" hrefLang="en">Services</Link>
                        </div>
                         <div className="col-xs-12 col-md-6 col-lg-2">
                            <a href="https://www.instagram.com/overhaulmedia/?hl=en" target="_blank" rel="noreferrer" hrefLang="en">Instagram</a>
                            <a href="https://ca.linkedin.com/company/overhaul-media" target="_blank" rel="noreferrer" hrefLang="en">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer