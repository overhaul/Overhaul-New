import * as React from 'react'
import { Link } from 'gatsby'
import { 
  navLinks,
  navLinkItem,
  navLinkText,
  omMobNav,
  navBurger,
  hiddenNav,
  moreLinks,
} from './navigation.module.scss'
import { Component } from "react";

import OmLogo from '../components/OmLogo'

function NavDesk(){

	return(
		<nav className={omMobNav}>
    <BurgerMenu/>
  		<OmLogo/>
      <div className={hiddenNav}>
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
        <div className={moreLinks}>
          <Link to="/careers" className={navLinkText}>
              Careers
          </Link>
          <a href="tel:7807588642" rel="noreferrer" target="_blank" className={navLinkText}>
              780 758 8642
          </a>
          <a href="mailto:hello@overhaulmedia.com" target="_blank" rel="noreferrer" className={navLinkText}>
              hello@overhaulmedia.com
          </a>
        </div>
        </div>
    </nav>
      )
}

export default NavDesk

class BurgerMenu extends Component {

  burgerMenu() {

    const burger = document.getElementById('navBurger');

    if(burger.classList.contains('open')){
      burger.classList.remove('open')
    }else{
      burger.classList.add('open')
    }
  }

  render() {
    return  <div onClick={this.burgerMenu} onKeyDown={this.burgerMenu} className={navBurger} id="navBurger" role="navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
  }
}



