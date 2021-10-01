import * as React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
    render() {
        const { phone, email, address } = this.props
        return (
            <footer className="footer">
                <div className="container row">
                    <div className="col-xs-12 col-sm-12 col-md-6 copyright">
                       <p>© 2021 Overhaul Media</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 row">
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div dangerouslySetInnerHTML={{ __html:address}}/>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <p><a href={'tel:' + phone} rel="noreferrer" target="_blank">{phone}</a></p>
                            <p><a href={'mailto:' + email} rel="noreferrer" target="_blank">{ email }</a></p>
                        </div>
                        <div className="col-xs-12  col-md-2">
                            <Link to="/careers">Careers</Link>
                            <Link to="/services">Services</Link>
                        </div>
                         <div className="col-xs-12 col-md-2">
                            <a href="https://www.instagram.com/overhaulmedia/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://ca.linkedin.com/company/overhaul-media" target="_blank" rel="noreferrer">Linkedin</a>
                        </div>
                    </div>
                </div>
            </footer>
          )
      }
}

export default Footer