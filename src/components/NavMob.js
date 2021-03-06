import * as React from 'react'
import { Link } from 'gatsby'
import { Component } from "react";

import OmLogo from '../components/OmLogo'

class NavMob extends Component {

  constructor() {
        super()
        this.state = {
          menuIsOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

  toggleMenu() {

        this.setState( 
            function(prevState){
                return{
                  menuIsOpen: !prevState.menuIsOpen
                }
            }
         )
    }
  
  render(){

    return (
        <nav className={`mob-nav ${this.state.menuIsOpen ? 'open' : ''}`}>
         <div
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
            className={`nav-burger ${this.state.menuIsOpen ? 'open' : ''}`}
            id="navBurger"
            role="navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
      <OmLogo/>
      <div className="hidden-nav">
        <ul className="nav-links">
           <li className="nav-link_item">
            <Link to="/work" className="nav-link_text" rel="alternate" hrefLang="en">
              <h2>Work</h2>
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/about" className="nav-link_text" rel="alternate" hrefLang="en">
              <h2>About</h2>
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/contact" className="nav-link_text" rel="alternate" hrefLang="en">
              <h2>Contact</h2>
            </Link>
          </li>
        </ul>
        <div className="more-links">
          <Link to="/careers" className="nav-link_text" rel="alternate" hrefLang="en">
              Careers
          </Link>
          <a href="tel:7807588642" rel="noreferrer" target="_blank" className="nav-link_text" hrefLang="en">
              780 758 8642
          </a>
          <a href="mailto:hello@overhaulmedia.com" target="_blank" rel="noreferrer" className="nav-link_text" hrefLang="en">
              hello@overhaulmedia.com
          </a>
        </div>
      </div>
    </nav>
    )
  }
}

export default NavMob

