import * as React from 'react'
import { Link } from 'gatsby'

import OmLogo from '../components/OmLogo'

class NavDesk extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      visible: true,
    };
  }
  // Add an event listener when the component mounts.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component unmounts.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    if (this.state.debounce) return

    this.setState({
      debounce: setTimeout(() => {
        const { prevScrollpos, debounce } = this.state;

        const currentScrollPos = Math.max(0, window.pageYOffset);
        const visible = prevScrollpos >= currentScrollPos;

        this.setState({
          prevScrollpos: currentScrollPos,
          visible,
          debounce: null,
        });
      }, 200)
    })
  };

  render(){
    return(
      <nav id="desk_nav" className={`desk-nav ${this.state.visible ? '' : 'desk-nav_hidden'}`}>
        <OmLogo />
        <ul className="nav-links">
          <li className="nav-link_item">
            <Link to="/work" className="nav-link_text" rel="alternate" hrefLang="en">
            Work
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/about" className="nav-link_text" rel="alternate" hrefLang="en">
            About
            </Link>
          </li>
          <li className="nav-link_item">
            <Link to="/contact" className="nav-link_text" rel="alternate" hrefLang="en">
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavDesk
