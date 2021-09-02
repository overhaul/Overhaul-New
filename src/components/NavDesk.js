import * as React from 'react'
import { Link } from 'gatsby'
import { 
  navLinks,
  navLinkItem,
  navLinkText,
  omDeskNav,
} from './navigation.module.scss'

import OmLogo from '../components/OmLogo'

function NavDesk(){

	return(
		<nav className={omDeskNav}>
		<OmLogo/>
        <ul className={navLinks}>
           <li className={navLinkItem}>
            <Link to="/work" className={navLinkText}>
              Work
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      )
}

export default NavDesk

