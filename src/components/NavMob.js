import * as React from 'react'
import { Link } from 'gatsby'
import { Component } from "react";

import OmLogo from '../components/OmLogo'

class NavDesk extends Component {

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
        <nav className="om-mob-nav">
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
      <div className={`hidden-nav ${this.state.menuIsOpen ? 'open' : ''}`}>
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
        <div className="more-links">
          <Link to="/careers" className="nav-link-text">
              Careers
          </Link>
          <a href="tel:7807588642" rel="noreferrer" target="_blank" className="nav-link-text">
              780 758 8642
          </a>
          <a href="mailto:hello@overhaulmedia.com" target="_blank" rel="noreferrer" className="nav-link-text">
              hello@overhaulmedia.com
          </a>
        </div>
      </div>
    </nav>
    )
  }
}

export default NavDesk

// class BurgerMenu extends Component {

//     constructor() {
//         super()
//         this.state = {
//           menuIsOpen: false
//         }
//         this.toggleMenu = this.toggleMenu.bind(this)
//     }

//     toggleMenu() {

//         this.setState( 
//             function(prevState){
//                 return{
//                   menuIsOpen: !prevState.menuIsOpen
//                 }
//             }
//          )
//     }

//     render() {
//         return (
//           <div
//             onClick={this.toggleMenu}
//             onKeyDown={this.toggleMenu}
//             className={`nav-burger ${this.state.menuIsOpen ? 'open' : ''}`}
//             id="navBurger"
//             role="navigation"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         )
    
//     }
// }