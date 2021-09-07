import * as React from 'react'
import { Link } from 'gatsby'

import OmLogo from '../components/OmLogo'

function NavDesk(){

	return(
		<nav className="om-desk-nav">
		<OmLogo/>
        <ul className="nav-links">
           <li className="nav-link-item">
            <Link to="/work" className="nav-link-text">
              Work
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/contact" className="nav-link-text">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      )
}

export default NavDesk

