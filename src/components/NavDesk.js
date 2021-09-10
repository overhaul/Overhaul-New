import * as React from 'react'
import { Link } from 'gatsby'

import OmLogo from '../components/OmLogo'

function NavDesk(){

	return(
		<nav id="desk_nav" className="desk-nav">
		<OmLogo/>
        <ul className="nav-links">
           <li className="nav-link_item">
            <Link to="/work" className="nav-link_text">
              Work
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/about" className="nav-link_text">
              About
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/contact" className="nav-link_text">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      )
}

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 

export default NavDesk
